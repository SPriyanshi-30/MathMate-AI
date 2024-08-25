from flask import Flask, request, jsonify
from flask_cors import CORS
import speech_recognition as sr
import pronouncing
from pydub import AudioSegment
import os
import logging

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Ensures CORS is applied globally

logging.basicConfig(level=logging.DEBUG)

def convert_to_wav(file, filename):
    """Converts an audio file to .wav format."""
    audio = AudioSegment.from_file(file)
    wav_filename = f"{filename}.wav"
    audio.export(wav_filename, format="wav")
    return wav_filename

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    return response

@app.route('/speech-to-text', methods=['POST'])
def speech_to_text():
    logging.debug('Received request for speech to text')
    if 'file' not in request.files:
        logging.error('No file part in request')
        return jsonify({'error': 'No file part'})

    file = request.files['file']
    filename, ext = os.path.splitext(file.filename)
    logging.debug(f'Received file: {file.filename}')

    if file.filename == '':
        logging.error('No selected file')
        return jsonify({'error': 'No selected file'})

    # Convert non-wav files to wav
    if ext.lower() != '.wav':
        logging.debug(f'Converting {ext} to .wav')
        wav_filename = convert_to_wav(file, filename)
    else:
        wav_filename = 'temp_audio.wav'
        file.save(wav_filename)

    recognizer = sr.Recognizer()

    try:
        with sr.AudioFile(wav_filename) as source:
            audio = recognizer.record(source)
            logging.debug('Audio recorded from wav file')
            text = recognizer.recognize_google(audio)
            logging.debug(f'Recognized text: {text}')
            return jsonify({'text': text})
    except sr.UnknownValueError:
        logging.error('Could not understand the audio')
        return jsonify({'error': 'Could not understand the audio'})
    except sr.RequestError as e:
        logging.error(f'Google Speech Recognition request error: {e}')
        return jsonify({'error': f'Could not request results from Google Speech Recognition service; {e}'})
    except Exception as e:
        logging.error(f'Unexpected error: {e}')
        return jsonify({'error': f'An unexpected error occurred: {e}'})
    finally:
        if os.path.exists(wav_filename):
            os.remove(wav_filename)  # Clean up the temporary file

arpabet_to_phonetic = {
    "AA": "ah", "AE": "a", "AH": "uh", "AO": "aw", "AW": "ow", "AY": "ai",
    "B": "b", "CH": "ch", "D": "d", "DH": "th", "EH": "e", "ER": "er", 
    "EY": "ey", "F": "f", "G": "g", "HH": "h", "IH": "i", "IY": "ee", 
    "JH": "j", "K": "k", "L": "l", "M": "m", "N": "n", "NG": "ng", 
    "OW": "oh", "OY": "oy", "P": "p", "R": "r", "S": "s", "SH": "sh", 
    "T": "t", "TH": "th", "UH": "uh", "UW": "oo", "V": "v", "W": "w", 
    "Y": "y", "Z": "z", "ZH": "zh"
}

def convert_to_phonetic(arpabet):
    phonetic = []
    for phone in arpabet.split():
        clean_phone = ''.join([char for char in phone if not char.isdigit()])
        phonetic.append(arpabet_to_phonetic.get(clean_phone, clean_phone))
    return ' '.join(phonetic)

@app.route('/phonetic-spelling', methods=['POST'])
def phonetic_spelling():
    word = request.json['word']
    phones = pronouncing.phones_for_word(word)
    if phones:
        phonetic = convert_to_phonetic(phones[0])
    else:
        phonetic = "No phonetic spelling found. Please check the spelling."
    return jsonify({'phonetic': phonetic})

if __name__ == '__main__':
    app.run(debug=True)
