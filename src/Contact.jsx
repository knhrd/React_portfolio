import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Contact.css';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50vw',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div className="contact" id="contact">
      <h3>Contact</h3>    
      <h6 fro="name" >Your Name</h6>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="お名前" variant="outlined" />
      </form>
      <h6 fro="email" className="label">Your Mail Address</h6>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="メールアドレス" variant="outlined" />
      </form>
      <h6 fro="contact" className="label">Content</h6>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="メッセージを入力" multiline rows={10} variant="outlined" /></form>
        <Button className="sending"  variant="contained" >送信</Button>
    </div>

  );
}
