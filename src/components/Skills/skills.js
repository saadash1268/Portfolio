import React from "react";
import './skills.css';

const Skills = () => {

    const skillsList = ["HTMl", "CSS", "JavaScript", "Typescript", "Git", "GitHub", "Node.js", "React", "PostgreSQL", "MongoDB", "REST API", "Jest", "Playwright", "WordPress" ]

    return (
        <section id='skills'>
            <span className="skillTitle">About Me</span>
            <span className="skillDesc"> A pargraph introducing myself</span>
            <ul className="skillsList">
                {skillsList.map((skill, index) => (
                    <li key={index} className="skillItem">
                        {skill}
                    </li>
                ))}

            </ul>
        </section>
    )
}



export default Skills;