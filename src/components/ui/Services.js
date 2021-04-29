import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import ButtonArrow from './ButtonArrow';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg';
import mobileIcon from '../../assets/mobileIcon.svg';
import websiteIcon from '../../assets/websiteIcon.svg';

const useStyles = makeStyles(theme => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 10,
    marginTop: '1em',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.secondaryColor,
  },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
}));

const Services = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction="column">
      {/*----- Custom Software Block -----*/}

      <Grid
        className={classes.serviceContainer}
        container
        justify={matchesSM ? 'center' : 'flex-end'}
        direction="row"
      >
        <Grid
          item
          style={{
            textAlign: matchesSM ? 'center' : undefined,
          }}
        >
          <Typography variant="h4">Custom Software Development</Typography>
          <Typography className={classes.subtitle} variant="subtitle1">
            Save Energy. Save Time. Save Money.
          </Typography>
          <Typography variant="subtitle1">
            Complete digital Solutions, from investigation to{' '}
            <span className={classes.specialText}>celebration</span> .
          </Typography>
          <Button
            className={classes.learnButton}
            variant="outlined"
            component={Link}
            to="/customsoftware"
            onClick={() => {
              setValue(1);
              setSelectedIndex(1);
            }}
          >
            <span style={{ marginRight: 5 }}>Learn More</span>
            <ButtonArrow
              width={15}
              height={15}
              fill={theme.palette.common.primaryColor}
            />
          </Button>
        </Grid>
        <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
          <img
            className={classes.icon}
            alt="Custom Software Icon"
            src={customSoftwareIcon}
          />
        </Grid>
      </Grid>

      {/*----- Mobile App Development Block -----*/}

      <Grid
        className={classes.serviceContainer}
        container
        justify={matchesSM ? 'center' : 'flex-start'}
        direction="row"
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : '5em',
            textAlign: matchesSM ? 'center' : undefined,
          }}
        >
          <Typography variant="h4">Mobile App Development</Typography>
          <Typography className={classes.subtitle} variant="subtitle1">
            Extend Functionality. Extend Access. Increase Engagement.
          </Typography>
          <Typography variant="subtitle1">
            Integrate your web experience or create a standalone app
            {matchesSM ? null : <br />}with either mobile platform.
          </Typography>
          <Button
            className={classes.learnButton}
            variant="outlined"
            component={Link}
            to="/mobileapps"
            onClick={() => {
              setValue(1);
              setSelectedIndex(2);
            }}
          >
            <span style={{ marginRight: 5 }}>Learn More</span>
            <ButtonArrow
              width={15}
              height={15}
              fill={theme.palette.common.primaryColor}
            />
          </Button>
        </Grid>
        <Grid item>
          <img
            className={classes.icon}
            alt="Mobile App Development Icon"
            src={mobileIcon}
          />
        </Grid>
      </Grid>

      {/*----- Website Development Block -----*/}

      <Grid
        className={classes.serviceContainer}
        container
        justify={matchesSM ? 'center' : 'flex-end'}
        direction="row"
      >
        <Grid
          item
          style={{
            textAlign: matchesSM ? 'center' : undefined,
          }}
        >
          <Typography variant="h4">Website Development</Typography>
          <Typography className={classes.subtitle} variant="subtitle1">
            Reach More. Discover More. Sell More.
          </Typography>
          <Typography variant="subtitle1">
            Optimized for Search Engines, built for speed.
          </Typography>
          <Button
            className={classes.learnButton}
            variant="outlined"
            component={Link}
            to="/websites"
            onClick={() => {
              setValue(1);
              setSelectedIndex(3);
            }}
          >
            <span style={{ marginRight: 5 }}>Learn More</span>
            <ButtonArrow
              width={15}
              height={15}
              fill={theme.palette.common.primaryColor}
            />
          </Button>
        </Grid>
        <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
          <img
            className={classes.icon}
            alt="Website Development Icon"
            src={websiteIcon}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
