import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'; 
import PlacesGridListCard from './PlacesGridListCard'; 
import { makeStyles } from '@material-ui/core/styles';
import * as KEYS from '../../constants/keys'; 
import * as CONSTANTS from '../../constants/places'; 
import { StatusText } from '../Status';
import Tooltip from '@material-ui/core/Tooltip'; 
import Link from '@material-ui/core/Link'; 
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    img: {
        height: 200
        // flex: 1,
        // maxWidth: '100%',
        // borderRadius: '5px'
    }
}));

export default function PlacesGrid(props) {
    const { places } = props; 
    const classes = useStyles();

    const formatDate = (place) => {
        var formattedDate = place[CONSTANTS.REOPENING_DATE].toISOString().substring(0, 10); 
        return formattedDate
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3} direction="row" justify="flex-start" alignItems="flex-start">
                {places.map(place => (
                    <Grid container item xs={12} sm={6} md={3} direction="column" key={place.id}>
                        <Grid item xs>
                            <Card>
                                <CardMedia
                                    className={classes.img}
                                    image={place.photos ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0]["photo_reference"]}&key=${KEYS.MAPS_API_KEY}` : '../../assets/images/blank.png'}
                                    title=""
                                />
                                <CardContent>
                                    <Grid item xs>
                                        <StatusText status={place[CONSTANTS.STATUS]} />
                                    </Grid>
                                    <Grid item xs>
                                        <Typography variant="h6" noWrap>
                                            <b>{place[CONSTANTS.MAIN_TEXT]}</b>
                                        </Typography>
                                        <Grid container item spacing={1} alignItems="center">
                                            <Grid item>
                                                <EventRoundedIcon />
                                            </Grid>
                                            <Grid item>
                                                <Tooltip title="Reopening date">
                                                    <Typography variant="body2" noWrap>
                                                        {formatDate(place)}
                                                    </Typography>
                                                </Tooltip>
                                            </Grid>
                                        </Grid>
                                        <Grid container item spacing={1} alignItems="center">
                                            <Grid item>
                                                <RoomRoundedIcon />
                                            </Grid>
                                            <Grid item xs zeroMinWidth>
                                                <Typography variant="body2" noWrap>
                                                    <Link color="inherit">{place[CONSTANTS.SECONDARY_TEXT]}</Link>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        {place[CONSTANTS.NOTES] !== "" ?
                                            <Grid container item spacing={1}>
                                                <Grid item>
                                                    <InfoOutlinedIcon />
                                                </Grid>
                                                <Grid item xs>
                                                    <Typography variant="body2">
                                                        <i>{place[CONSTANTS.NOTES]}</i>
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            : null}
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}