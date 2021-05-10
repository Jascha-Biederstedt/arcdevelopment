import React from 'react';
import Lottie from 'react-lottie';
import { cloneDeep } from 'lodash';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import check from '../assets/check.svg';
import send from '../assets/send.svg';
import software from '../assets/software.svg';
import mobile from '../assets/mobile.svg';
import website from '../assets/website.svg';
import backArrow from '../assets/backArrow.svg';
import backArrowDisabled from '../assets/backArrowDisabled.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import forwardArrowDisabled from '../assets/forwardArrowDisabled.svg';
import camera from '../assets/camera.svg';
import upload from '../assets/upload.svg';
import person from '../assets/person.svg';
import persons from '../assets/persons.svg';
import info from '../assets/info.svg';
import bell from '../assets/bell.svg';
import people from '../assets/people.svg';
import usersIcon from '../assets/users.svg';
import iPhone from '../assets/iphone.svg';
import gps from '../assets/gps.svg';
import customized from '../assets/customized.svg';
import data from '../assets/data.svg';
import android from '../assets/android.svg';
import globe from '../assets/globe.svg';
import biometrics from '../assets/biometrics.svg';

import estimateAnimation from '../animations/estimateAnimation/data.json';
import { Block } from '@material-ui/icons';

//****************************************************
// STYLES
//****************************************************

const useStyles = makeStyles(theme => ({
  icon: {
    width: '12em',
    height: '10em',
    marginTop: '1em',
  },
  mainContainer: {
    padding: '2em',
    [theme.breakpoints.down('sm')]: {
      padding: '1.5em',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.secondaryColor,
    borderRadius: 50,
    height: 50,
    width: 225,
    marginRight: 40,
    marginTop: '4em',
    marginLeft: '2.3em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const defaultQuestions = [
  {
    id: 1,
    title: 'Which service are you interested in?',
    active: true,
    options: [
      {
        id: 1,
        title: 'Custom Software Development',
        subtitle: null,
        icon: software,
        iconAlt: 'Three floating screens',
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: 'Mobile App Development',
        subtitle: null,
        icon: mobile,
        iconAlt: 'Outlines of phones and tablets',
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: 'Website Development',
        subtitle: null,
        icon: website,
        iconAlt: 'Computer outline',
        selected: false,
        cost: 0,
      },
    ],
  },
];

const softwareQuestions = [
  {
    id: 1,
    title: 'Which service are you interested in?',
    active: false,
    options: [
      {
        id: 1,
        title: 'Custom Software Development',
        subtitle: null,
        icon: software,
        iconAlt: 'three floating screens',
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: 'iOS/Android App Development',
        subtitle: null,
        icon: mobile,
        iconAlt: 'outlines of phones and tablets',
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: 'Website Development',
        subtitle: null,
        icon: website,
        iconAlt: 'computer outline',
        selected: false,
        cost: 0,
      },
    ],
  },
  {
    id: 2,
    title: 'Which platforms do you need supported?',
    subtitle: 'Select all that apply.',
    options: [
      {
        id: 1,
        title: 'Web Application',
        subtitle: null,
        icon: website,
        iconAlt: 'computer outline',
        selected: false,
        cost: 1000,
      },
      {
        id: 2,
        title: 'iOS Application',
        subtitle: null,
        icon: iPhone,
        iconAlt: 'outline of iphone',
        selected: false,
        cost: 1000,
      },
      {
        id: 3,
        title: 'Android Application',
        subtitle: null,
        icon: android,
        iconAlt: 'outlines of android phone',
        selected: false,
        cost: 1000,
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: 'Which features do you expect to use?',
    subtitle: 'Select all that apply.',
    options: [
      {
        id: 1,
        title: 'Photo/Video',
        subtitle: null,
        icon: camera,
        iconAlt: 'camera outline',
        selected: false,
        cost: 250,
      },
      {
        id: 2,
        title: 'GPS',
        subtitle: null,
        icon: gps,
        iconAlt: 'gps pin',
        selected: false,
        cost: 250,
      },
      {
        id: 3,
        title: 'File Transfer',
        subtitle: null,
        icon: upload,
        iconAlt: 'outline of cloud with arrow pointing up',
        selected: false,
        cost: 250,
      },
    ],
    active: false,
  },
  {
    id: 4,
    title: 'Which features do you expect to use?',
    subtitle: 'Select all that apply.',
    options: [
      {
        id: 1,
        title: 'Users/Authentication',
        subtitle: null,
        icon: usersIcon,
        iconAlt: 'outline of a person with a plus sign',
        selected: false,
        cost: 250,
      },
      {
        id: 2,
        title: 'Biometrics',
        subtitle: null,
        icon: biometrics,
        iconAlt: 'fingerprint',
        selected: false,
        cost: 250,
      },
      {
        id: 3,
        title: 'Push Notifications',
        subtitle: null,
        icon: bell,
        iconAlt: 'outline of a bell',
        selected: false,
        cost: 250,
      },
    ],
    active: false,
  },
  {
    id: 5,
    title: 'What type of custom features do you expect to need?',
    subtitle: 'Select one.',
    options: [
      {
        id: 1,
        title: 'Low Complexity',
        subtitle: '(Informational)',
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 250,
      },
      {
        id: 2,
        title: 'Medium Complexity',
        subtitle: '(Interactive, Customizable, Realtime)',
        icon: customized,
        iconAlt: 'two toggle switches',
        selected: false,
        cost: 500,
      },
      {
        id: 3,
        title: 'High Complexity',
        subtitle: '(Data Modeling and Computation)',
        icon: data,
        iconAlt: 'outline of line graph',
        selected: false,
        cost: 1000,
      },
    ],
    active: false,
  },
  {
    id: 6,
    title: 'How many users do you expect?',
    subtitle: 'Select one.',
    options: [
      {
        id: 1,
        title: '0-10',
        subtitle: null,
        icon: person,
        iconAlt: 'person outline',
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: '10-100',
        subtitle: null,
        icon: persons,
        iconAlt: 'outline of two people',
        selected: false,
        cost: 1.125,
      },
      {
        id: 3,
        title: '100+',
        subtitle: null,
        icon: people,
        iconAlt: 'outline of three people',
        selected: false,
        cost: 1.25,
      },
    ],
    active: false,
  },
];

const websiteQuestions = [
  {
    id: 1,
    title: 'Which service are you interested in?',
    active: false,
    options: [
      {
        id: 1,
        title: 'Custom Software Development',
        subtitle: null,
        icon: software,
        iconAlt: 'three floating screens',
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: 'iOS/Android App Development',
        subtitle: null,
        icon: mobile,
        iconAlt: 'outlines of phones and tablets',
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: 'Website Development',
        subtitle: null,
        icon: website,
        iconAlt: 'computer outline',
        selected: false,
        cost: 0,
      },
    ],
  },
  {
    id: 2,
    title: 'Which type of website are you wanting?',
    subtitle: 'Select one.',
    options: [
      {
        id: 1,
        title: 'Basic',
        subtitle: '(Informational)',
        icon: info,
        iconAlt: 'person outline',
        selected: false,
        cost: 1000,
      },
      {
        id: 2,
        title: 'Interactive',
        subtitle: "(Users, API's, Messaging)",
        icon: customized,
        iconAlt: 'outline of two people',
        selected: false,
        cost: 2000,
      },
      {
        id: 3,
        title: 'E-Commerce',
        subtitle: '(Sales)',
        icon: globe,
        iconAlt: 'outline of three people',
        selected: false,
        cost: 2500,
      },
    ],
    active: true,
  },
];

//****************************************************
// ESTIMATE COMPONENT
//****************************************************

const Estimate = () => {
  const classes = useStyles();
  const theme = useTheme();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container className={classes.mainContainer}>
      <Grid item container direction="column" lg>
        <Grid item>
          <Typography variant="h2">Estimate</Typography>
        </Grid>
        <Grid
          item
          style={{ marginRight: '10em', maxWidth: '50em', marginTop: '5.5em' }}
        >
          <Lottie options={defaultOptions} height="100%" width="100%" />
        </Grid>
      </Grid>
      <Grid item container direction="column" lg alignItems="center">
        {defaultQuestions
          .filter(question => question.active)
          .map((question, index) => (
            <React.Fragment key={index}>
              <Grid item>
                <Typography
                  variant="h2"
                  align="center"
                  style={{
                    fontWeight: 300,
                    marginTop: '3em',
                    fontSize: '2.25rem',
                  }}
                >
                  {question.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  gutterBottom
                  style={{ marginBottom: '2.5em' }}
                >
                  {question.subtitle}
                </Typography>
              </Grid>
              <Grid item container>
                {question.options.map(option => (
                  <Grid item container direction="column" md>
                    <Grid item style={{ maxWidth: '12em' }}>
                      <Typography variant="h6" align="center" gutterBottom>
                        {option.title}
                      </Typography>
                      <Typography variant="caption" align="center">
                        {Option.subtitle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        src={option.icon}
                        alt={option.iconAlt}
                        className={classes.icon}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}

        <Grid
          item
          container
          justify={'space-between'}
          style={{ marginTop: '3em', width: '15em' }}
        >
          <Grid item>
            <img src={backArrow} alt="Previous question" />
          </Grid>
          <Grid item>
            <img src={forwardArrow} alt="Next question" />
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" className={classes.estimateButton}>
            Get Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Estimate;