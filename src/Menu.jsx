import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import './Menu.css';
import { MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      boxshadow: 'none',
    textdecoration: 'none', 
    color: 'inherit',
    },
  },
}));


export default function SimpleMenu() {
 
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <Button className="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Menu
      </Button>
      <Menu 
        id="simple-menu"
        className="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <p className="menu">-MENU-</p> 
        <div className="menu">
        <ul>
          <li><a href="#about"><MenuItem className={classes.root} onClick={handleClose}>About me</MenuItem></a></li>
          <li><a href="#skill"><MenuItem className={classes.root} onClick={handleClose}>Skill</MenuItem></a></li>
          <li><a href="#like"><MenuItem className={classes.root} onClick={handleClose}>Like</MenuItem></a></li>
          <li><a href="#contact"><MenuItem className={classes.root} onClick={handleClose}>Contact</MenuItem></a></li>
        </ul></div>
      </Menu>
    </React.Fragment>
  );
}
