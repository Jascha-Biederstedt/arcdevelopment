import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import ButtonArrow from './ui/ButtonArrow';

import background from '../assets/background.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';

//****************************************************
// STYLES
//****************************************************

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em ',
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
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.secondaryColor,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
      marginTop: '2em',
    },
  },
}));

//****************************************************
// CONTACT COMPONENT
//****************************************************

const Contact = ({ setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Grid container direction="row">
      <Grid item container direction="column" justify="center" lg={3}>
        <Grid item>
          <Typography variant="h2" style={{ lineHeight: 1 }}>
            Contact us
          </Typography>
          <Typography
            variant="body1"
            style={{ color: theme.palette.common.primaryColor }}
          >
            We're waiting
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item>
            <img src={phoneIcon} alt="Phone" style={{ marginRight: '0.5em' }} />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{
                color: theme.palette.common.primaryColor,
                fontSize: '1rem',
              }}
            >
              (555) 123-4567
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item>
            <img
              src={emailIcon}
              alt="Envelope"
              style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{
                color: theme.palette.common.primaryColor,
                fontSize: '1rem',
              }}
            >
              zachary@gmail.com
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item>
            <TextField
              label="Name"
              id="name"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Email"
              id="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Phone"
              id="phone"
              value={phone}
              onChange={event => setPhone(event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            value={message}
            id="message"
            multiline
            rows={10}
            onChange={event => setMessage(event.target.value)}
          />
        </Grid>
        <Grid item>
          <Button variant="contained">
            Send Message
            <img src={airplane} alt="Paper airplane" />
          </Button>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        className={classes.background}
        lg={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : '5em',
            textAlign: matchesSM ? 'center' : 'inherit',
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2">
                Simple Software.
                <br />
                Revolutionary Results.
              </Typography>
              <Typography variant="subtitle2" style={{ fontSize: '1.5rem' }}>
                Take advantage of the 21st Century.
              </Typography>
              <Grid container justify={matchesSM ? 'center' : undefined} item>
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
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.estimateButton}
            component={Link}
            to="/estimate"
            onClick={() => setValue(5)}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;