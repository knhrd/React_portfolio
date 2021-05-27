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


export default function Cafe() {
 
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
        <div class="cafe">
          <h4>Cafe</h4>
          <img className="cafe" src={`${process.env.PUBLIC_URL}/../pic/cafe.jpg`} onClick={handleClick}/>
        </div>
      <Menu 
        id="sabcafe"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className="sabcafe">
        <h5>Cafe</h5>
        <ul className="sabcafe">
        <li><MenuItem className={classes.root} onClick={handleClose}><img className="sabcafe" src={`${process.env.PUBLIC_URL}/../pic/cafe.jpg`} /></MenuItem></li>
        <li><MenuItem className={classes.root} onClick={handleClose}><img className="sabcafe" src={`${process.env.PUBLIC_URL}/../pic/cafe1.jpg`} /></MenuItem></li>
        <li><MenuItem className={classes.root} onClick={handleClose}><img className="sabcafe" src={`${process.env.PUBLIC_URL}/../pic/cafe2.jpg`} /></MenuItem></li>
        <li><MenuItem className={classes.root} onClick={handleClose}><img className="sabcafe" src={`${process.env.PUBLIC_URL}/../pic/cafe3.jpg`} /></MenuItem></li>
        <li><MenuItem className={classes.root} onClick={handleClose}><img className="sabcafe" src={`${process.env.PUBLIC_URL}/../pic/cafe4.jpg`} /></MenuItem></li>
        <li><MenuItem className={classes.root} onClick={handleClose}><img className="sabcafe" src={`${process.env.PUBLIC_URL}/../pic/cafe5.jpg`} /></MenuItem></li>
        </ul>
        </div>
      </Menu>
    </React.Fragment>
  );
}