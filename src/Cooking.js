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


export default function Cooking() {
 
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
        <div class="cooking">
          <p>Cooking</p>
          <img className="cooking" src={`${process.env.PUBLIC_URL}/../pic/cooking.jpg`} onMouseOver={handleClick}/>
        </div>
      <Menu 
        id="sabcooking"
        className="sabcooking"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className="sabcafe">
        <h4>Cooking</h4>
        <ul className="sabcooking">
        <li><MenuItem className={classes.root} onClick={handleClose}><img className="sabcooking" src={`${process.env.PUBLIC_URL}/../pic/cooking.jpg`} /></MenuItem></li>
        <li><MenuItem className={classes.root} onClick={handleClose}><img className="sabcooking" src={`${process.env.PUBLIC_URL}/../pic/cooking1.jpg`} /></MenuItem></li>
        <li><MenuItem className={classes.root} onClick={handleClose}><img className="sabcooking" src={`${process.env.PUBLIC_URL}/../pic/cooking2.jpg`} /></MenuItem></li>
        <li><MenuItem className={classes.root} onClick={handleClose}><img className="sabcooking" src={`${process.env.PUBLIC_URL}/../pic/cooking3.jpg`} /></MenuItem></li>
        <li><MenuItem className={classes.root} onClick={handleClose}><img className="sabcooking" src={`${process.env.PUBLIC_URL}/../pic/cooking4.jpg`} /></MenuItem></li>
        <li><MenuItem className={classes.root} onClick={handleClose}><img className="sabcooking" src={`${process.env.PUBLIC_URL}/../pic/cooking5.jpg`} /></MenuItem></li>
        </ul>
        </div>
      </Menu>
    </React.Fragment>
  );
}