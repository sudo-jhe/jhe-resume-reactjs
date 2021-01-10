import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import ic_certificate from "./img/ic_certificate.svg";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";


const timeLineItemStyle = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    missingOppositeContent: {
        minWidth: '6.5rem',
        paddingLeft: 'unset',
        paddingRight: 'unset',
        flex: 0,
        textAlign: 'center'
    },
}));

const EducationWorkItem = (props) => (
    <TimelineItem>
        <TimelineOppositeContent className={timeLineItemStyle().missingOppositeContent}>
            <Grid container spacing={0} direction="column">
                <Grid item xs>
                    <Typography variant="button" color="textPrimary">
                        {props.data.until}
                    </Typography>
                </Grid>
                <Grid item xs>
                    <i className="material-icons">merge_type</i>
                </Grid>
                <Grid item xs>
                    <Typography variant="caption" color="textSecondary">
                        {props.data.from}
                    </Typography>
                </Grid>
            </Grid>
        </TimelineOppositeContent>
        <TimelineSeparator>
            <TimelineDot color={props.index % 2 !== 0 ? "primary" : "secondary"}/>
            <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
            <div className="tlContent">
                <span className="contentTitle">{props.data.title}</span>
                <h3 className="contentSubtitle">{props.data.subtitle}</h3>
                <div className="contentBulletpoints">
                    <ul>
                        {props.data.facts.map((fact, index) =>
                            <li key={index}>{fact}</li>
                        )}
                    </ul>
                </div>
                <div className="contentChips">
                    {props.data.keywords.map((keyword, index) =>
                        <Chip size="small" label={keyword} key={index}/>
                    )}
                </div>
                <Grid container spacing={0} direction="row">
                    <Grid item xs>
                        <div className="contentCertButtons">
                            {props.data.certificates.map((certificateObj, index) =>
                                <Button startIcon={<img alt="certificate" src={ic_certificate}></img>} size="small" color="primary"
                                        target="_blank" key={index}
                                        href={certificateObj.url}>{certificateObj.linkText}</Button>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs>
                        <div className="contentLinkButtons">
                            {props.data.readMore.map((readMoreObj, index) =>
                                <Button size="small" color="secondary" target="_blank" key={index}
                                        href={readMoreObj.url}>{readMoreObj.linkText}</Button>
                            )}
                        </div>
                    </Grid>
                </Grid>
            </div>
        </TimelineContent>
    </TimelineItem>
);

export default EducationWorkItem;