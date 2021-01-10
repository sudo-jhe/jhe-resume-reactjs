import Button from "@material-ui/core/Button";
import Phone from "@material-ui/icons/Phone";
import Mail from "@material-ui/icons/Mail";
import ic_linkedin from "./img/ic_linkedin.svg";
import ic_xing from "./img/ic_xing.svg";
import ic_github from "./img/ic_github.svg";
import React from "react";

const Footer = (props) => (
    <div className="footer">
        <Button startIcon={<Phone/>} size="small" color="inherit" target="_blank"
                href={"tel:" + props.data.phone}/>
        <Button startIcon={<Mail/>} size="small" color="inherit" target="_blank"
                href={"mailto:" + props.data.email}/>
        <Button startIcon={<img alt="linkedin" src={ic_linkedin}/>} size="small" color="inherit" target="_blank"
                href={props.data.linkedIn}/>
        <Button startIcon={<img alt="xing" src={ic_xing}/>} size="small" color="inherit" target="_blank"
                href={props.data.xing}/>
        <Button startIcon={<img alt="github" src={ic_github}/>} size="small" color="inherit" target="_blank"
                href={"#"}/>
        <p>Built with ReactJS & MaterialUI</p>
    </div>
)

export default Footer;