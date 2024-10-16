/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/Game.css'; // Import the CSS file

const Game = ({ setUser }) => {
    const [diceRollResult, setDiceRollResult] = useState(null);
    const [highScores, setHighScores] = useState([]); // Store high scores
    const [username, setUsername] = useState(''); // State for username
    const [error, setError] = useState('');

    // Handle dice roll
    const handleRollDice = async () => {
        try {
            const response = await axios.get('http://localhost:4000/roll-dice', {
                withCredentials: true
            });
            setDiceRollResult(response.data.result);
            setError('');
            fetchUserInfo(); // Fetch updated user info after rolling
        } catch (err) {
            setError('Error rolling dice');
        }
    };

    // Fetch user high scores and username
    const fetchUserInfo = async () => {
        try {
            const response = await axios.get('http://localhost:4000/user/history', {
                withCredentials: true
            });
            setHighScores(response.data.highScores || []); // Safely set high scores from the response
            setUsername(response.data.username || ''); // Safely set the username from the response
        } catch (err) {
            setError('Error fetching user information');
        }
    };

    const fetchHighScores = async () => {
        try {
            const response = await axios.get('http://localhost:4000/users/highscores', {
                withCredentials: true // Make sure cookies are sent
            });
            setHighScores(response.data);
        } catch (err) {
            console.error('Error fetching high scores:', err);
            setError('Error fetching high scores'); // Update error message
        }
    };
    
    // Fetch user info when component mounts
    useEffect(() => {
        fetchUserInfo();
        fetchHighScores(); // Fetch high scores on mount
    }, []);

    // Handle user logout
    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:4000/logout', {}, {
                withCredentials: true
            });
            setUser(null); // Clear user session in frontend
        } catch (err) {
            setError('Logout failed');
        }
    };

    return (
        <div className="game-container">
            <h2>🎲 Dice Roller Game</h2>

            {/* Display the username */}
            {username && <p className="welcome-message">Welcome, {username}!</p>}

            {/* Display the current dice roll */}
            {diceRollResult !== null && <p className="dice-roll">Dice Roll: {diceRollResult}</p>}

            {/* Display high score history */}
            <h3>User Scores History</h3>
            {highScores.length > 0 ? (
    <ul className="high-score-list">
        {highScores.map((score, index) => (
            <li key={index} className="high-score-item">
                Score: {score.value} - {score.createdAt ? new Date(score.createdAt).toLocaleString() : 'Unknown Date'}
            </li>
        ))}
    </ul>
) : (
    <p>No high score history yet.</p>
)}

            {/* Button to roll the dice */}
            <button className="roll-button" onClick={handleRollDice}>Roll Dice</button>

            {/* Error message */}
            {error && <p className="error-message">{error}</p>}

            {/* Logout Button */}
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Game;
