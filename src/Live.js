import React from 'react';
import Menu from '@material-ui/core/Menu';
import './Like.css';
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


export default function Live() {
 
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
        <div class="live">
          <p>Live</p>
          <img className="live" src={`${process.env.PUBLIC_URL}/../pic/live.jpg`} onMouseOver={handleClick}/>
        </div>
      <Menu 
        id="sablive"
        className="sablive"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className="sablive">
        <h4>Live</h4>
        <ul className="sablive">
        <li><MenuItem className={classes.root} onClick={handleClose}><img className="sablive" src={`${process.env.PUBLIC_URL}/../pic/live.jpg`} /></MenuItem></li>
        <li><MenuItem className={classes.root} onClick={handleClose}><img className="sablive" src={`${process.env.PUBLIC_URL}/../pic/live1.jpg`} /></MenuItem></li>
        <li><MenuItem className={classes.root} onClick={handleClose}><img className="sablive" src={`${process.env.PUBLIC_URL}/../pic/live2.jpg`} /></MenuItem></li>
        <li><MenuItem className={classes.root} onClick={handleClose}><img className="sablive" src={`${process.env.PUBLIC_URL}/../pic/live3.jpg`} /></MenuItem></li>
        <li><MenuItem className={classes.root} onClick={handleClose}><img className="sablive" src={`${process.env.PUBLIC_URL}/../pic/live4.jpg`} /></MenuItem></li>
        <li><MenuItem className={classes.root} onClick={handleClose}><img className="sablive" src={`${process.env.PUBLIC_URL}/../pic/live5.jpg`} /></MenuItem></li>
        </ul>
        </div>
      </Menu>
    </React.Fragment>
  );
}