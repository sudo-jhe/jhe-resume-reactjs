import React from 'react';
import Grid from "@material-ui/core/Grid";
import EducationWork from "./EducationWork";
import About from "./About";
import Skills from "./Skills";

const Body = (props) => (
    <Grid container spacing={0} alignContent="center" className="main">
        <Grid item className="timelineGrid">
            <Grid container spacing={0} direction="column">
                <Grid item xs>
                    <EducationWork className="workExperience" title="Berufserfahrung" iconClass="engineering"
                                   data={props.data.workExperience}/>
                </Grid>
                <Grid item xs>
                    <EducationWork className="practicalExperience" title="Praktische Erfahrung" iconClass="api"
                                   data={props.data.practicalExperience}/>
                </Grid>
                <Grid item xs>
                    <EducationWork className="educationalPaths" title="Bildungsweg" iconClass="school"
                                   data={props.data.educationalPaths}/>
                </Grid>
            </Grid>
        </Grid>

        <Grid item xs className="skillsGrid">
            <Grid container spacing={0} direction="column">
                <Grid item xs>
                    <About data={props.data.general}/>
                </Grid>
                <Grid item xs>
                    <Skills className="technologies" title="Technologien" data={props.data.general.technologies}
                            iconClass="psychology"/>
                </Grid>
                <Grid item xs>
                    <Skills className="software" title="Software" data={props.data.general.software}
                            iconClass="build"/>
                </Grid>
                <Grid item xs>
                    <Skills className="languages" title="Sprachen" data={props.data.general.languages}
                            iconClass="translate"/>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
);

export default Body;