import React from 'react';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import ProfilePicture from "./img/profile.jpg";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";

const AvatarStyle = makeStyles((theme) => ({
    large: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
}));

const Header = (props) => (
    <div className="header">
        <Grid container spacing={0}>
            <Grid item>
                <Avatar alt={props.data.fullName} src={ProfilePicture} className={AvatarStyle().large}/>
            </Grid>
            <Grid item xs className="headerNameTitle">
                <h1>{props.data.fullName}</h1>
                <h4>{props.data.title}</h4>

                <Divider className="divider"/>

                <Grid container spacing={0} className="headerInfo">
                    <Grid item xs>
                        <Grid container spacing={0} direction="column">
                            <Grid item xs>
                                <i className="material-icons">home</i> <a href={props.data.addressMapsURL}
                                                                          target="_blank"
                                                                          rel="noreferrer">{props.data.address}</a>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs>
                        <Grid container spacing={0} direction="column">
                            <Grid item xs>
                                <i className="material-icons">phone</i> <a href={"tel:" + props.data.phone}
                                                                           target="_blank"
                                                                           rel="noreferrer">{props.data.phone}</a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
);

export default Header;