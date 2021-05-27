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


export default function Izakaya() {
 
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
        <div class="izakaya">
          <h4>Izakaya</h4>
          <img className="izakaya" src={`${process.env.PUBLIC_URL}/../pic/izakaya.jpg`} onClick={handleClick}/>
        </div>
      <Menu 
        id="sabizakaya"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className="sabizakaya">
        <h5>Izakaya</h5>
        <ul className="sabizakaya">
        <li><MenuItem className={classes.root} onClick={handleClose}><img className="sabizakaya" src={`${process.env.PUBLIC_URL}/../pic/izakaya.jpg`} /></MenuItem></li>
        <li><MenuItem className={classes.root} onClick={handleClose}><img className="sabizakaya" src={`${process.env.PUBLIC_URL}/../pic/izakaya1.jpg`} /></MenuItem></li>
        <li><MenuItem className={classes.root} onClick={handleClose}><img className="sabizakaya" src={`${process.env.PUBLIC_URL}/../pic/izakaya2.jpg`} /></MenuItem></li>
        <li><MenuItem className={classes.root} onClick={handleClose}><img className="sabizakaya" src={`${process.env.PUBLIC_URL}/../pic/izakaya3.jpg`} /></MenuItem></li>
        <li><MenuItem className={classes.root} onClick={handleClose}><img className="sabizakaya" src={`${process.env.PUBLIC_URL}/../pic/izakaya4.jpg`} /></MenuItem></li>
        <li><MenuItem className={classes.root} onClick={handleClose}><img className="sabizakaya" src={`${process.env.PUBLIC_URL}/../pic/izakaya5.jpg`} /></MenuItem></li>
        </ul>
        </div>
      </Menu>
    </React.Fragment>
  );
}