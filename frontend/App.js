import React, { useState, useEffect } from "react";
import axios from "axios";
import MoodForm from "./components/MoodForm";
import MoodList from "./components/MoodList";
import MoodGraph from "./components/MoodGraph";
import "./styles.css";

const App = () => {
    const [moods, setMoods] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/moods").then((res) => {
            setMoods(res.data);
        });
    }, []);

    const addMood = (newMood) => {
        axios.post("http://localhost:3000/moods", newMood).then((res) => {
            setMoods([...moods, res.data]);
        });
    };

    const deleteMood = (id) => {
        axios.delete(`http://localhost:3000/moods/${id}`).then(() => {
            setMoods(moods.filter((mood) => mood._id !== id));
        });
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Mood Journal</h1>
            <MoodForm onAddMood={addMood} />
            <MoodGraph moods={moods} />
            <MoodList moods={moods} onDeleteMood={deleteMood} />
        </div>
    );
};

export default App;
