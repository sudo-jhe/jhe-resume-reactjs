import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import AboutPicture from "./img/about.jpg";
import React from "react";

const calculate_age = (birthdate) => {
    const birthDate = new Date(birthdate);
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference);

    return Math.abs(age.getUTCFullYear() - 1970);
}

const About = (props) => (
    <div className="about">
        <Paper elevation={3} square>
            <h2><i className="material-icons">mood</i> Über mich</h2>
            <div className="aboutItems">
                <ul>
                    <li><i
                        className="material-icons">cake</i> {props.data.birthDate + " (" + calculate_age(props.data.birthDate) + ")"}
                    </li>
                    <li><i className="material-icons">email</i> <a href={"mailto:" + props.data.email}
                                                                   target="_blank"
                                                                   rel="noreferrer">{props.data.email}</a></li>
                </ul>
            </div>

            <div className="hobbies">
                <div className="hobbieItems">
                    {props.data.interests.map((interest, index) =>
                        <Chip size="small" label={interest} key={index}/>
                    )}
                </div>
            </div>

            <div className="profilePicture2">
                <img src={AboutPicture} alt="aboutme"/>
            </div>
        </Paper>
    </div>
)

export default About;