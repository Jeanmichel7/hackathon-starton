import React, {useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {createUseStyles} from 'react-jss'
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import { SCaddProduct } from '../services/wallet.service'
import axios from 'axios';


import Reviews from './Reviews';

const useStyles = createUseStyles({
reviewButton: {
  backgroundColor: 'rgb(238, 238, 255)',
  opacity: 1,
  '&:hover': {
    backgroundColor: 'rgb(238, 238, 255)',
    opacity: '0.7',
  },
  fontFamily: 'Quicksand',
  color: 'rgb(104, 33, 125)',
  height: '100px',
  width: '400px',
  borderRadius: '30px',
  marginTop: '100px',
  fontSize: '25px'
},
addButton: {
  backgroundColor: 'rgb(238, 238, 255)',
  opacity: 1,
  '&:hover': {
    backgroundColor: 'rgb(238, 238, 255)',
    opacity: '0.7',
  },
  fontFamily: 'Quicksand',
  color: 'rgb(104, 33, 125)',
  borderRadius: '30px',
  marginTop: '100px',
  fontSize: '25px'
},
form: {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%'
},
Title: {
  fontFamily: 'Quicksand',
  fontSize:'25px',
  color: 'rgb(238, 238, 255);',
  marginBottom: '70px',
},
searchField: {
  width: '98%',
  height: '150px',
  marginLeft: '25px',
  marginTop: '20px',
  borderRadius: '30px',
},
searchLabel: {
  color: 'rgb(238, 238, 255)',
  fontFamily: 'Quicksand',
  fontSize: '35px'
},
searchOutline: {
  borderColor: 'rgb(238, 238, 255)',
  '&:hover': {
      borderColor: 'rgb(238, 238, 255)',
  },
  height: '150px',
  borderRadius: '30px',
  borderWidth: 5,
},
})


  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  async function getHashCid(name) {
    const instance = axios.create({
      baseURL: 'http://localhost:4242',
    });
    let ret = await instance.post('/generatePwd', {
      name: name
    });
    console.log("ret getpwd : ", ret);
    return ret.data
  }
  
  async function addProduct(web3, name, details, imageCID) {
    let hashCID = await getHashCid(name);
    SCaddProduct(web3, name, details, imageCID, hashCID);
  }
const Card = ({id, name, details, imageCID, reviewsCID, hashCID, tokenPool }) => {
    const classes = useStyles()

    const [open, setOpen] = React.useState(false);
 
    const { isLoading, wallet, errorMessage } = useSelector(state => state.wallet);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

   
    const nameRef = useRef('')
    const detailsRef = useRef('')
    const imageRef = useRef('')

    const sendValue = async () => {
        await addProduct(wallet, nameRef.current.value, detailsRef.current.value, imageRef.current.value);
        handleClose();

    }

  return (
    <div>
   <Button className={classes.reviewButton} onClick={handleClickOpen} >
            + Add Your Product
          </Button> 
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          style: {
            backgroundColor: 'rgb(104, 33, 125)',
            borderRadius: '20px',
            height: '800px',
            width: '1400px',
            maxWidth: '1400px'
          }
        }}
      >
        <div className={classes.form}>
        <DialogTitle className={classes.Title}>
            Add Your Product
        </DialogTitle>
        <DialogContent>
        <div className={classes.form}>
            <TextField
            id='outlined-textarea'
            label='name'
            placeholder='Write your pros'
            multiline
            variant='outlined'
            inputRef={nameRef}
            InputLabelProps={{
              classes : {root: classes.searchLabel}
            }}
            InputProps={{
              style: {
                  color: 'rgb(238, 238, 255)',
                  fontFamily: 'Quicksand',
                  fontSize: '35px'
               },
               classes: { notchedOutline: classes.searchOutline }}}
            className={classes.searchField} 
            />
            <TextField
            id='outlined-textarea'
            label='details'
            placeholder='Write your cons'
            multiline
            variant='outlined'
            inputRef={detailsRef}
            InputLabelProps={{
              classes : {root: classes.searchLabel}
            }}
            InputProps={{
              style: {
                  color: 'rgb(238, 238, 255)',
                  fontFamily: 'Quicksand' 
               },
               classes: { notchedOutline: classes.searchOutline }}}
            className={classes.searchField} 
            />
            <TextField
            id='outlined-textarea'
            label='image CID'
            placeholder='Image Url'
            multiline
            variant='outlined'
            inputRef={imageRef}
            InputLabelProps={{
              classes : {root: classes.searchLabel}
            }}
            InputProps={{
              style: {
                  color: 'rgb(238, 238, 255)',
                  fontFamily: 'Quicksand' 
               },
               classes: { notchedOutline: classes.searchOutline }}}
            className={classes.searchField} 
            />
            <Button
            variant='contained'
            color='primary'
            size='small'
            onClick={sendValue}
            className={classes.addButton}
            >
            Add Product
            </Button>
        </div>
        </DialogContent>
        </div>
      </Dialog>
      </div>
  )
}

export default Card;