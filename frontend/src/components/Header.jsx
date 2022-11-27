import React, { useEffect } from 'react'
import {createUseStyles} from 'react-jss'
import { useDispatch, useSelector } from 'react-redux';
import { loadWalletAsync } from '../redux/reducers/wallet/wallet';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ClassNames } from '@emotion/react';

const useStyles = createUseStyles({
    header: {
      margin: '20px',
      },
    bar: {
        'background-color': 'rgb(104, 33, 125)',
        // 'background-color': '#4E148C',
        // 'background-color': '#858AE3',
        // 'background-color': '#613DC1',
        'border-radius': '10px',
        'height': '100px',
        justifyContent: 'center',
    },
    fonth4: {
      'font-family': 'Quicksand',
      'font-size': '35px'
    },
    fonth6: {
      'font-family': 'Quicksand',
      'font-size': '24px'
    }
  })


const Header = () => {
    const classes = useStyles()
    const dispatch = useDispatch();
    const { isLoading, wallet, errorMessage } = useSelector(state => state.wallet);
  return (
    <div className={classes.header}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className={classes.bar}>
            <Toolbar>
              <Typography className={classes.fonth4} component="div" sx={{ flexGrow: 1 }}>
                FAITHFUL
              </Typography>
              <Button color="inherit" className={classes.fonth6} onClick={() => dispatch(loadWalletAsync())}>Connect Wallet</Button>
            </Toolbar>
          </AppBar>
        </Box>
    </div>
  )
}

export default Header