import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
  },
  logo: {
    height: '8em',
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
  },
  menu: {
    backgroundColor: theme.palette.common.primaryColor,
    color: 'white',
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const path = window.location.pathname;

    if (path === '/' && value !== 0) setValue(0);
    if (path === '/services' && value !== 1) {
      setValue(1);
      setSelectedIndex(0);
    }
    if (path === '/customsoftware' && value !== 1) {
      setValue(1);
      setSelectedIndex(1);
    }
    if (path === '/mobileapps' && value !== 1) {
      setValue(1);
      setSelectedIndex(2);
    }
    if (path === '/websites' && value !== 1) {
      setValue(1);
      setSelectedIndex(3);
    }
    if (path === '/revolution' && value !== 2) setValue(2);
    if (path === '/about' && value !== 3) setValue(3);
    if (path === '/contact' && value !== 4) setValue(4);
    if (path === '/estimate' && value !== 5) setValue(5);
  }, [value]);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  };

  const handleClose = e => {
    setAnchorEl(null);
    setOpen(false);
  };

  const menuOptions = [
    { name: 'Services', link: '/services' },
    { name: 'Custome Software Development', link: '/customsoftware' },
    { name: 'Mobile App Development', link: '/mobileapps' },
    { name: 'Website Development', link: '/websites' },
  ];

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => {
                setValue(0);
              }}
              disableRipple
            >
              <img
                alt="Arc Development Logo"
                className={classes.logo}
                src={logo}
              />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="Home"
              />
              <Tab
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup={anchorEl ? true : undefined}
                className={classes.tab}
                onMouseOver={e => handleClick(e)}
                component={Link}
                to="/services"
                label="Services"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/revolution"
                label="The Revolution"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/about"
                label="About Us"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/contact"
                label="Contact Us"
              />
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                component={Link}
                to="/estimate"
                onClick={() => {
                  setValue(5);
                }}
              >
                Free Estimate
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                classes={{ paper: classes.menu }}
                elevation={0}
                open={open}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
              >
                {menuOptions.map((option, i) => (
                  <MenuItem
                    key={option}
                    component={Link}
                    to={option.link}
                    classes={{ root: classes.menuItem }}
                    onClick={e => {
                      handleMenuItemClick(e, i);
                      setValue(1);
                      handleClose(e);
                    }}
                    selected={i === selectedIndex && value === 1}
                  >
                    {option.name}
                  </MenuItem>
                ))}
              </Menu>
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
