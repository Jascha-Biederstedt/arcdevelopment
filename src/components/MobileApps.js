import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';

import CallToAction from './ui/CallToAction';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import swiss from '../assets/swissKnife.svg';
import access from '../assets/extendAccess.svg';
import engagement from '../assets/increaseEngagement.svg';

import integrationAnimation from '../animations/integrationAnimation/data.json';

//****************************************************
// STYLES
//****************************************************

const useStyles = makeStyles(theme => ({
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
  mainContainer: {
    padding: '5em',
    [theme.breakpoints.down('sm')]: {
      padding: '3em 1.5em',
    },
  },
}));

//****************************************************
// MOBILE APP DEVELOPMENT COMPONENT
//****************************************************

const MobileApps = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid
          item
          container
          direction="row"
          justify={matchesMD ? 'center' : undefined}
        >
          <Hidden mdDown>
            <Grid
              item
              className={classes.arrowContainer}
              style={{ marginRight: '1em', marginLeft: '-3.5em' }}
            >
              <IconButton
                style={{ backgroundColor: 'transparent' }}
                component={Link}
                to="/customsoftware"
                onClick={() => setSelectedIndex(1)}
              >
                <img src={backArrow} alt="Back to Services Page" />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid item container direction="column" className={classes.heading}>
            <Grid item>
              <Typography
                variant="h2"
                gutterBottom
                align={matchesMD ? 'center' : undefined}
              >
                Mobile App Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? 'center' : undefined}
              >
                Mobile apps allow you to take your tools on the go.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? 'center' : undefined}
              >
                Whether you want an app for your customers, employees, or
                yourself, we can build cross-platform native solutions for any
                part of your business process. This opens you up to a whole new
                world of possibilities by taking advantage of phone features
                like the camera, GPS, push notifications, and more.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? 'center' : undefined}
              >
                Convenience. Connection.
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item className={classes.arrowContainer}>
              <IconButton
                style={{ backgroundColor: 'transparent' }}
                component={Link}
                to="/websites"
                onClick={() => setSelectedIndex(3)}
              >
                <img src={forwardArrow} alt="Forward to Website Development" />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
        <Grid
          item
          container
          direction={matchesSM ? 'column' : 'row'}
          alignItems={matchesSM ? 'center' : undefined}
          style={{ marginTop: '10em', marginBottom: '10em' }}
        >
          <Grid
            item
            container
            direction="column"
            md
            style={{ maxWidth: matchesSM ? '40em' : undefined }}
          >
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesSM ? 'center' : undefined}
              >
                Integration
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                Our technology enables an innate interconnection between web and
                mobile applications, putting everything you need right in one
                convenient place.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? 'center' : undefined}
              >
                This allows you to extend your reach, reinvent interactions, and
                develop a stronger relationship with your users than ever
                before.
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Lottie options={defaultOptions} style={{ maxWidth: '20em' }} />
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            style={{ maxWidth: matchesSM ? '40em' : undefined }}
          >
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesSM ? 'center' : 'right'}
              >
                Simultaneous Platform Support
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? 'center' : 'right'}
              >
                Our cutting-edge development process allows us to create apps
                for iPhone, Android, and tablets - all at the same time.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? 'center' : 'right'}
              >
                This significantly reduces costs and creates a more unified
                brand experience across all devices.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container direction={matchesMD ? 'column' : 'row'}>
          <Grid item container direction="column" md alignItems="center">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Extend Functionality
              </Typography>
            </Grid>
            <Grid item>
              <img src={swiss} alt="Swiss army knife" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            alignItems="center"
            style={{
              marginTop: matchesMD ? '10em' : 0,
              marginBottom: matchesMD ? '10em' : 0,
            }}
          >
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Extend Access
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={access}
                alt="Tear-one-off sign"
                style={{ maxWidth: matchesXS ? '20em' : '28em' }}
              />
            </Grid>
          </Grid>
          <Grid item container direction="column" md alignItems="center">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Increase Engagement
              </Typography>
            </Grid>
            <Grid item>
              <img src={engagement} alt="App with notification" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction setValue={setValue} />
    </>
  );
};

export default MobileApps;
