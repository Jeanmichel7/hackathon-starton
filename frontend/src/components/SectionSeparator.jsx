import React from 'react'
import {createUseStyles} from 'react-jss'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ClassNames } from '@emotion/react';

const useStyles = createUseStyles({
    header: {
      margin: '20px 20px',
      },
    bar: {
        'background-color': 'rgb(55, 67, 102)',
        // 'background-color': '#4E148C',
        // 'background-color': '#858AE3',
        // 'background-color': '#613DC1',
        'border-radius': '10px',
        'height': '50px',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fonth4: {
      'font-family': 'Quicksand',
      'font-size': '30px'
    },
    fonth6: {
      'font-family': 'Quicksand',
      'font-size': '24px'
    }
  })

const SectionSeparator = ({name}) => {
    const classes = useStyles()
  return (
    <div className={classes.header}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className={classes.bar}>
            <Toolbar>
              <Typography className={classes.fonth4} component="div" sx={{ flexGrow: 1 }}>
                {name}
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
    </div>
  )
}

export default SectionSeparator