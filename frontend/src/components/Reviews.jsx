import React from 'react';
import Paper from '@mui/material/Paper';
import {createUseStyles} from 'react-jss';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';


const useStyles = createUseStyles({
      displayReward: {
        display: 'flex',
        justifyContent: 'space-between'
      },
      reviewBox: {
        backgroundColor: 'rgb(104, 33, 125)',
        border: '2px solid',
        borderColor: 'rgb(238, 238, 255)',
        padding: '5px',
        margin: '20px',
        color: 'rgb(238, 238, 255)',
        fontFamily: 'Quicksand',
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.4)'
      },
      rating: {
        color: 'rgb(238, 238, 255)'
      },
      prosField: {
        width: '98%',
        margin: '10px',
        backgroundColor: 'rgba(0, 142, 134, 0.2)',
        backgroundColor: 'rgba(55, 67, 102, 0.6)',
        borderRadius: '5px',
      },
      consField: {
        width: '98%',
        margin: '10px',
        backgroundColor: 'rgba(125, 33, 72, 0.6)',
        borderRadius: '5px',
      },
      prosOutline: {
        borderColor: 'rgba(0, 142, 134, 1)',
        borderColor: 'rgb(55, 67, 102)',
        borderWidth: 2,
      },
     consOutline: {
        borderColor: 'rgb(125, 33, 72)',
        '&:hover': {
            borderColor: 'rgb(238, 238, 255)',
        },
        borderWidth: 2,
      },
      prosLabel: {
        color: 'rgba(0, 142, 134, 1)',
        fontFamily: 'Quicksand'
      },
      consLabel: {
        color: 'rgba(246, 74, 110, 1)',
        fontFamily: 'Quicksand'
      },
  })

const Reviews = () => {
    const classes = useStyles()
  return (
    <Paper variant="outlined" className={classes.reviewBox} >
    <div className={classes.displayReward}>
        <p>Salut</p>
        <Rating name="read-only" value={4} readOnly className={classes.rating}/>
    </div> 
    <TextField
          id="outlined-read-only-input"
          label="Pros"
          defaultValue="Hello World"
          InputLabelProps={{
            classes : {root: classes.prosLabel}
          }}
          InputProps={
            {readOnly: true,
             style: {
                color: 'rgb(238, 238, 255)',
                fontFamily: 'Quicksand' 
             },
             classes: { notchedOutline: classes.prosOutline}}
        }
          className={classes.prosField}   
    />
    <TextField
          id="outlined-read-only-input"
          label="Cons"
          defaultValue="Hello World"
          InputLabelProps={{
            classes : {root: classes.consLabel}
          }}
          InputProps={{readOnly: true,
            style: {
                color: 'rgb(238, 238, 255)',
                fontFamily: 'Quicksand' 
             },
             classes: { notchedOutline: classes.consOutline }}}
          className={classes.consField}   
    />
    </Paper>
  )
}

export default Reviews