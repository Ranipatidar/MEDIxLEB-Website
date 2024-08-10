import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Login({handleClose, open}) {

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Quick Login/Register</DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-basic" 
            label="Phone Number"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Send Otp</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}