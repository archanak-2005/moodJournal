import React, { useState } from "react";

const MoodForm = ({ onAddMood }) => {
    const [mood, setMood] = useState("Happy");
    const [note, setNote] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddMood({ mood, note });
        setNote("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Mood:
                <select value={mood} onChange={(e) => setMood(e.target.value)}>
                    <option value="Happy">Happy</option>
                    <option value="Sad">Sad</option>
                    <option value="Angry">Angry</option>
                    <option value="Neutral">Neutral</option>
                    <option value="Excited">Excited</option>
                </select>
            </label>
            <label>
                Note:
                <input
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />
            </label>
            <button type="submit">Add Mood</button>
        </form>
    );
};

export default MoodForm;
