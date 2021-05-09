import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from './ui/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CallToAction from './ui/CallToAction';

import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';
import repeatingBackground from '../assets/repeatingBackground.svg';
import infoBackgroundImage from '../assets/infoBackground.svg';

//****************************************************
// STYLES
//****************************************************

const useStyles = makeStyles(theme => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.secondaryColor,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
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
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
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
  revolutionBackground: {
    backgroundImage: `url(${repeatingBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: '8em 0',
      borderRadius: 0,
      width: '100%',
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
}));

//****************************************************
// LANDING PAGE COMPONENT
//****************************************************

const LandingPage = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Grid className={classes.mainContainer} container direction="column">
        {/*----- Hero Block -----*/}

        <Grid item>
          <Grid
            container
            justify="flex-end"
            alignItems="center"
            direction="row"
          >
            <Grid className={classes.heroTextContainer} sm item>
              <Typography align="center" variant="h2">
                Bringing West Coast Technology
                <br />
                to the Midwest
              </Typography>
              <Grid
                className={classes.buttonContainer}
                container
                justify="center"
                direction="row"
              >
                <Grid item>
                  <Button
                    className={classes.estimateButton}
                    variant="contained"
                    component={Link}
                    to="/estimate"
                    onClick={() => setValue(5)}
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    className={classes.learnButtonHero}
                    variant="outlined"
                    component={Link}
                    to="/revolution"
                    onClick={() => setValue(2)}
                  >
                    <span style={{ marginRight: 5 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.primaryColor}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item className={classes.animation}>
              <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
            </Grid>
          </Grid>
        </Grid>

        {/*----- Custom Software Block -----*/}

        <Grid
          className={classes.serviceContainer}
          container
          justify={matchesSM ? 'center' : undefined}
          direction="row"
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
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
          <Grid item>
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
          justify={matchesSM ? 'center' : 'flex-end'}
          direction="row"
        >
          <Grid
            item
            style={{
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
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
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
          justify={matchesSM ? 'center' : undefined}
          direction="row"
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
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
          <Grid item>
            <img
              className={classes.icon}
              alt="Website Development Icon"
              src={websiteIcon}
            />
          </Grid>
        </Grid>

        {/*----- The Revolution Block -----*/}

        <Grid item>
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ height: '100em', marginTop: '12em' }}
          >
            <Card className={classes.revolutionCard}>
              <CardContent>
                <Grid
                  container
                  direction="column"
                  style={{ textAlign: 'center' }}
                >
                  <Grid item>
                    <Typography variant="h3" gutterBottom>
                      The Revolution
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Visionary insights coupled with cutting-edge technology is
                      a recipe for revolution.
                    </Typography>
                    <Button
                      className={classes.learnButton}
                      variant="outlined"
                      component={Link}
                      to="/revolution"
                      onClick={() => setValue(2)}
                    >
                      <span style={{ marginRight: 5 }}>Learn More</span>
                      <ButtonArrow
                        width={15}
                        height={15}
                        fill={theme.palette.common.primaryColor}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <div className={classes.revolutionBackground} />
          </Grid>
        </Grid>

        {/*----- The Information Block -----*/}

        <Grid item>
          <Grid
            container
            style={{ height: '80em' }}
            direction="row"
            alignItems="center"
          >
            <Grid
              item
              container
              style={{
                position: 'absolute',
                textAlign: matchesXS ? 'center' : 'inherit',
              }}
              direction={matchesXS ? 'column' : 'row'}
            >
              <Grid
                item
                sm
                style={{
                  marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em',
                }}
              >
                <Grid
                  container
                  style={{ marginBottom: matchesXS ? '10em' : 0 }}
                  direction="column"
                >
                  <Typography variant="h2" style={{ color: 'white' }}>
                    About Us
                  </Typography>
                  <Typography variant="subtitle2">
                    Let's get personal.
                  </Typography>
                  <Grid item>
                    <Button
                      className={classes.learnButton}
                      variant="outlined"
                      component={Link}
                      to="/about"
                      onClick={() => setValue(3)}
                      style={{ color: 'white', borderColor: 'white' }}
                    >
                      <span style={{ marginRight: 5 }}>Learn More</span>
                      <ButtonArrow width={15} height={15} fill="white" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                sm
                style={{
                  marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em',
                  textAlign: matchesXS ? 'center' : 'right',
                }}
              >
                <Grid container direction="column">
                  <Typography variant="h2" style={{ color: 'white' }}>
                    Contact Us
                  </Typography>
                  <Typography variant="subtitle2">Say hello.</Typography>
                  <Grid item>
                    <Button
                      className={classes.learnButton}
                      variant="outlined"
                      component={Link}
                      to="/contact"
                      onClick={() => setValue(4)}
                      style={{ color: 'white', borderColor: 'white' }}
                    >
                      <span style={{ marginRight: 5 }}>Learn More</span>
                      <ButtonArrow width={15} height={15} fill="white" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <div className={classes.infoBackground} />
          </Grid>
        </Grid>

        {/*----- The Call To Action Block -----*/}

        <Grid item>
          <CallToAction setValue={setValue} />
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPage;
