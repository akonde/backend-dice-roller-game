/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HighScores = () => {
    const [highScores, setHighScores] = useState([]);
    const [error, setError] = useState('');

    const fetchHighScores = async () => {
        try {
            const response = await axios.get('http://localhost:3000/users/highscores', {
                withCredentials: true // Ensure cookies are sent
            });
            setHighScores(response.data);
        } catch (err) {
            console.error('Error fetching high scores:', err);
            setError('Error fetching high scores');
        }
    };

    useEffect(() => {
        fetchHighScores();
    }, []);

    return (
        <div>
            <h2>High Scores History</h2>
            {error && <p>{error}</p>}
            {highScores.length > 0 ? (
                <ul>
                    {highScores.map((user, index) => (
                        <li key={index}>
                            <strong>{user.username}</strong> (High Score: {user.highScore})
                            <ul>
                                {user.scores.map((score, scoreIndex) => (
                                    <li key={scoreIndex}>
                                        Score: {score.value} - {new Date(score.createdAt).toLocaleString()}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No high scores available.</p>
            )}
        </div>
    );
};

export default HighScores;
