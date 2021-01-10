import Rating from "@material-ui/lab/Rating";
import React from "react";

const SkillItem = (props) => (
    <div className="skillItem">
        <p>{props.skill}</p>
        <Rating name="read-only" value={props.knowledge} precision={0.5} readOnly/>
    </div>
)

export default SkillItem;