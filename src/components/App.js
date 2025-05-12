// App.jsx or index.jsx
import React, { useState, useCallback } from "react";

const SkillList = ({ skills, onDelete }) => {
  return (
    <ul id="skill-list">
      {skills.map((skill, index) => (
        <li
          key={index}
          id={`skill-number-${index}`}
          onClick={() => onDelete(skill)}
          style={{ cursor: "pointer", margin: "5px 0" }}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
};


const UseCallbackComp = () => {
  const [skills, setSkills] = useState(["HTML", "CSS", "JavaScript", "React"]);
  const [input, setInput] = useState("");

  const addSkill = useCallback(() => {
    const trimmed = input.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
    }
    setInput("");
  }, [input, skills]);

  const deleteSkill = useCallback(
    (skillToDelete) => {
      setSkills(skills.filter((skill) => skill !== skillToDelete));
    },
    [skills]
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 id="heading">Skill Manager</h1>
      <input
        id="skill-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a skill"
      />
      <button id="skill-add-btn" onClick={addSkill} style={{ marginLeft: "10px" }}>
        Add Skill
      </button>
      <SkillList skills={skills} onDelete={deleteSkill} />
    </div>
  );
};

export default UseCallbackComp;


