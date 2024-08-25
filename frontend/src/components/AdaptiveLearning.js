import React, { useState } from 'react';

const AdaptiveLearning = () => {
    const [selectedTopic, setSelectedTopic] = useState('');
    const [resources, setResources] = useState([]);
    const [description, setDescription] = useState('');

    const handleTopicChange = (e) => {
        const topic = e.target.value;
        setSelectedTopic(topic);

        // Suggest resources based on the selected topic
        let newResources = [];
        let newDescription = '';
        switch (topic) {
            case 'Phonemic Awareness':
                newResources = [
                    'Phonemic Awareness Games',
                    'Interactive Sound Matching Activities',
                    'Phoneme Segmentation Practice',
                ];
                newDescription = 'Phonemic awareness helps students recognize and manipulate the sounds in words, which is crucial for reading and spelling.';
                break;
            case 'Reading Comprehension':
                newResources = [
                    'Story Mapping Worksheets',
                    'Summarization Exercises',
                    'Reading Comprehension Question Banks',
                ];
                newDescription = 'Reading comprehension ensures that students understand and retain the material they read, improving overall literacy.';
                break;
            case 'Spelling':
                newResources = [
                    'Spelling Word Lists',
                    'Interactive Spelling Games',
                    'Weekly Spelling Practice Sheets',
                ];
                newDescription = 'Spelling practice helps students recognize patterns in words, which is vital for writing and communication skills.';
                break;
            case 'Math Word Problems':
                newResources = [
                    'Math Word Problem Solving Strategies',
                    'Practice Word Problems with Solutions',
                    'Interactive Math Problem Simulations',
                ];
                newDescription = 'Solving math word problems improves critical thinking and the ability to apply math skills to real-world scenarios.';
                break;
            case 'Time Management':
                newResources = [
                    'Time Management Techniques for Students',
                    'Daily Planner Templates',
                    'Interactive Time Management Tools',
                ];
                newDescription = 'Time management skills help students organize their work and time effectively, leading to better academic performance.';
                break;
            default:
                newResources = [];
                newDescription = '';
                break;
        }

        setResources(newResources);
        setDescription(newDescription);
    };

    return (
        <div>
            <h2>Adaptive Learning</h2>
            <p>Select a topic you need help with:</p>
            <select onChange={handleTopicChange} value={selectedTopic}>
                <option value="" disabled>Select a topic</option>
                <option value="Phonemic Awareness">Phonemic Awareness</option>
                <option value="Reading Comprehension">Reading Comprehension</option>
                <option value="Spelling">Spelling</option>
                <option value="Math Word Problems">Math Word Problems</option>
                <option value="Time Management">Time Management</option>
            </select>

            {selectedTopic && (
                <div>
                    <h3>{selectedTopic}</h3>
                    <p>{description}</p>
                    <h4>Suggested Resources:</h4>
                    <ul>
                        {resources.map((resource, index) => (
                            <li key={index}>{resource}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default AdaptiveLearning;
