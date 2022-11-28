import React from 'react'
import TextField from '@mui/material/TextField';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    searchField: {
        width: '98%',
        marginLeft: '25px',
        marginTop: '20px',
        borderRadius: '30px',
        backgroundColor: 'rgba(104, 33, 125, 0.3)'
      },
      searchLabel: {
        color: 'rgb(104, 33, 125)',
        fontFamily: 'Quicksand'
      },
      searchOutline: {
        borderColor: 'rgb(104, 33, 125)',
        '&:hover': {
            borderColor: 'rgb(238, 238, 255)',
        },
        borderRadius: '30px',
        borderWidth: 5,
      },
  })


const SearchBar = () => {
    const classes = useStyles()
  return (
    <TextField
    id="outlined-search"
    label="Search Product"
    type="search"
    InputLabelProps={{
        classes : {root: classes.searchLabel}
      }}
      InputProps={{readOnly: true,
        style: {
            color: 'rgb(238, 238, 255)',
            fontFamily: 'Quicksand' 
         },
         classes: { notchedOutline: classes.searchOutline }}}
      className={classes.searchField}   
  />
  )
}

export default SearchBar