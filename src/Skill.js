import React from 'react';
import { Route } from 'react-router';
import "./Skill.css";

const Skill = () => {
    return(
        <Route>
            <div className="skill" id="skill">
        <h3>Skill (in Stady)</h3>
        <ul className="skill">
            <li>MOS</li>
            <li>SQL</li>
            <li>HTML</li>
            <li>Linux</li>
        </ul></div>

        </Route>
);
}

export default Skill;