import React from 'react';
import './App.css';
import SpeechToText from './components/SpeechToText';
import PhoneticSpelling from './components/PhoneticSpelling';
import AdaptiveLearning from './components/AdaptiveLearning';
import InteractiveVisualAids from './components/InteractiveVisualAids';

// Import images
import mathmateaiLogo from './images/mathmateai_logo.png';
import speechToText from './images/speech_to_text.png';
import phoneticSpelling from './images/phonetic_spelling.png';
import adaptiveLearning from './images/adaptive_learning.png';
import interactiveVizAids from './images/interactive_viz_aids.png';

function App() {
    return (
        <div className="App">
            {/* Navigation Menu */}
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#how-to-use">How to Use</a></li>
                    <li><a href="#tools">Try It Out</a></li>
                </ul>
            </nav>

            {/* Header Section */}
            <header>
                <h1>MathMate AI</h1>
                <p>LEARN. SOLVE. SUCCEED.</p>
            </header>

            {/* About Section */}
            <section id="about">
                <h2>About MathMate AI</h2>
                <img src={mathmateaiLogo} alt="About MathMate AI" className="feature-image" />
                <p>
                    MathMate AI is designed to help students with dyslexia by providing tools that make learning
                    mathematics more accessible. Whether it's converting speech to text or providing phonetic spellings,
                    our aim is to support every student in their learning journey.
                </p>
            </section>

            {/* Features Section */}
            <section id="features">
                <h2>Features</h2>
                <div className="feature">
                    <img src={speechToText} alt="Speech to Text" className="feature-image" />
                    <p><strong>Speech to Text:</strong> Convert spoken mathematical problems into text.</p>
                </div>
                <div className="feature">
                    <img src={phoneticSpelling} alt="Phonetic Spelling" className="feature-image" />
                    <p><strong>Phonetic Spelling:</strong> Get accurate phonetic spellings for any mathematical term.</p>
                </div>
                <div className="feature">
                    <img src={adaptiveLearning} alt="Adaptive Learning" className="feature-image" />
                    <p><strong>Adaptive Learning:</strong> Personalize learning pathways based on student needs. This feature will track your progress, 
                    analyze your strengths and weaknesses, and tailor exercises to help you improve in specific areas.</p>
                </div>
                <div className="feature">
                    <img src={interactiveVizAids} alt="Interactive Visual Aids" className="feature-image" />
                    <p><strong>Interactive Visual Aids:</strong> Engage with math using interactive tools like visualizations, animations, 
                    and interactive problem-solving exercises. These aids will make learning math concepts more intuitive and engaging.</p>
                </div>
            </section>

            {/* How to Use Section */}
            <section id="how-to-use">
                <h2>How to Use MathMate AI</h2>
                <p>Follow these simple steps to get started:</p>
                <ol>
                    <li>Use the <strong>Speech to Text</strong> tool to convert your spoken words into text.</li>
                    <li>Use the <strong>Phonetic Spelling</strong> tool to find the phonetic spelling of complex words.</li>
                    <li>Explore more features as they become available to enhance your learning experience.</li>
                </ol>
            </section>

            {/* Functional Sections */}
            <section id="tools">
                <h2>Try It Out</h2>
                <SpeechToText />
                <PhoneticSpelling />
                <AdaptiveLearning />
                <InteractiveVisualAids />
            </section>

            {/* Footer Section */}
            <footer>
                <p>&copy; 2024 MathMate AI. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
