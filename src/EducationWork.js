import Paper from "@material-ui/core/Paper";
import Timeline from "@material-ui/lab/Timeline";
import React from "react";
import EducationWorkItem from "./EducationWorkItem";

const EducationWork = (props) => (
    <div className={props.className}>
        <Paper elevation={3} square>
            <h2><i className="material-icons">{props.iconClass}</i> {props.title}</h2>

            <Timeline align="left">
                {props.data.map((educationWorkItem, index) =>
                    <EducationWorkItem data={educationWorkItem} key={index} index={index}/>
                )}
            </Timeline>
        </Paper>
    </div>
)

export default EducationWork;