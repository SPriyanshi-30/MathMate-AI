import React, { useState } from 'react';
import axios from 'axios';

const PhoneticSpelling = () => {
    const [word, setWord] = useState('');
    const [phonetic, setPhonetic] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/phonetic-spelling', { word });
            setPhonetic(response.data.phonetic);
        } catch (error) {
            console.error("There was an error processing the word!", error);
        }
    };

    return (
        <div>
            <h2>Phonetic Spelling</h2>
            <input type="text" value={word} onChange={(e) => setWord(e.target.value)} />
            <button onClick={handleSubmit}>Get Phonetic Spelling</button>
            <p>Phonetic Spelling: {phonetic}</p>
        </div>
    );
};

export default PhoneticSpelling;
