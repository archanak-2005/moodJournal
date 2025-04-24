import React from "react";

const MoodList = ({ moods, onDeleteMood }) => (
    <div>
        <h2>Mood History</h2>
        <ul>
            {moods.map((mood) => (
                <li key={mood._id}>
                    <strong>{mood.mood}</strong> - {mood.note}
                    <button onClick={() => onDeleteMood(mood._id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
);

export default MoodList;
