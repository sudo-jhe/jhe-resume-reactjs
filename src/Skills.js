import Paper from "@material-ui/core/Paper";
import React from "react";
import SkillItem from "./SkillItem";

const Skills = (props) => (
    <div className={props.className}>
        <Paper elevation={3} square>
            <h2><i className="material-icons">{props.iconClass}</i> {props.title}</h2>
            {props.data.map((skillItem) =>
                <SkillItem skill={skillItem.skill} knowledge={skillItem.knowledge} key={skillItem.skill}/>
            )}
        </Paper>
    </div>
)

export default Skills;