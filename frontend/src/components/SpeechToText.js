import React, { useState } from 'react';
import axios from 'axios';

const SpeechToText = () => {
    const [audioFile, setAudioFile] = useState(null);
    const [text, setText] = useState('');

    const handleFileChange = (event) => {
        setAudioFile(event.target.files[0]);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('file', audioFile);

        try {
            const response = await axios.post('http://127.0.0.1:5000/speech-to-text', formData);
            setText(response.data.text);
        } catch (error) {
            console.error("There was an error processing the audio file!", error);
        }
    };

    return (
        <div>
            <h2>Speech to Text</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleSubmit}>Convert to Text</button>
            <p>Recognized Text: {text}</p>
        </div>
    );
};

export default SpeechToText;
