import React, {useRef} from 'react'
import {createUseStyles} from 'react-jss'
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import axios from 'axios'

import Reviews from './Reviews';

const useStyles = createUseStyles({
    card: {
        backgroundColor: 'rgb(104, 33, 125)',
        margin: '20px',
        width: '330px',
        height: '550px',
        borderRadius: '25px'
    },
    cardArea: {
        display: 'flex',
        flexDirection : 'column',
        textAlign: 'center',
        "-webkit-justify-content": 'space-between',
        height: '550px'
    },
    cardMedia: {
        height:'280px',
        width:'330px',
        padding: '10px',
        borderRadius: '25px'
      },
      cardText: {
        fontFamily: 'Quicksand',
        color: '#ffffff',
        fontSize: '22px'
      },
      cardDescription: {
        fontFamily: 'Quicksand',
        color: '#ffffffba',
        fontSize: '14px',
        padding : '20px',
        height: '100px',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      },
      cardReward:{
        fontFamily: 'Quicksand',
        color: '#ffffff',
        fontSize: '14px',
      },
      cardToken: {
        fontFamily: 'Quicksand',
        color: '#ffffff',
        fontSize: '14px',
      },
      displayReward: {
        display: 'flex',
        justifyContent: 'space-between'
      },
      dialog: {
        display: 'flex',
        justifyContent: 'space-between',
        color: '#ffffff',
        fontFamily: 'Quicksand',
        fontSize: '26px'
      },
      reviewButton: {
        backgroundColor: 'rgb(238, 238, 255)',
        opacity: 1,
        '&:hover': {
          backgroundColor: 'rgb(238, 238, 255)',
          opacity: '0.7',
        },
        fontFamily: 'Quicksand',
        color: 'rgb(104, 33, 125)'
      },
      reviewBox: {
        backgroundColor: 'rgb(104, 33, 125)',
        border: '2px solid',
        borderColor: 'rgb(238, 238, 255)',
        padding: '5px',
        color: 'rgb(238, 238, 255)',
        fontFamily: 'Quicksand'
      },
      rating: {
        color: 'rgb(238, 238, 255)'
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
form: {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%'
},addButton: {
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
  })

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const ipfs = axios.create({
    baseURL: "https://ipfs.eu.starton.io/ipfs/",
    headers: {},
  })
  
  async function getIpfsData(cid) {
    console.log("cid : ", cid);
    const res = await ipfs.get(cid)
    .catch(function (error) { return error; });
    console.log("getipfsdata : ", res);
    return res;
  }

  async function upRev(pwd, newReview, cid, id, hashobj, wallet) {
    const instance = axios.create({
      baseURL: 'http://localhost:4242',
    });

    let ret = await instance.post('/product/uploadReview', {
      pwd: pwd,
      newReview: newReview,
      cid: cid,
      id: id,
      hashobj: hashobj,
      wallet: wallet
    });
    console.log("ret getpwd : ", ret.data);
    return ret.data
  }






const Card = ({id, name, details, imageCID, reviewsCID, hashCID, tokenPool }) => {
    const classes = useStyles()

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(4);
    const { isLoading, wallet, errorMessage } = useSelector(state => state.wallet);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [openD, setOpenD] = React.useState(false);

    const handleClickOpenD = () => {
      setOpenD(true);
      setOpen(false);
    };

    const handleCloseD = () => {
      setOpenD(false);
    };

    const pwdRef = useRef('')
    const prosRef = useRef('')
    const consRef = useRef('')
    let hashobj = {}
    const sendValue = async () => {
      hashobj= await getIpfsData(hashCID);
      console.log(hashobj.data);
      upRev(pwdRef.current.value, {"rating":value, "pros":prosRef.current.value, "cons":consRef.current.value}, reviewsCID, id, hashobj.data, wallet.pubAddr);
      handleCloseD();

  }



  return (
    <div>
    <MuiCard sx={{ maxWidth: 345 }} className={classes.card}>
      <CardActionArea className={classes.cardArea} onClick={handleClickOpen}>
        <CardMedia
          component="img"
          image={require('../assets/iphone.png')}
          alt="iphone"
          className={classes.cardMedia}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className={classes.cardText}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" className={classes.cardDescription}>
            {details}
          </Typography>
          <Rating name="read-only" value={4} readOnly className={classes.rating}/>
          <div className={classes.displayReward}>
            <Typography variant="body2" className={classes.cardReward}>
              REWARD
            </Typography>
            <Typography variant="body2" className={classes.cardToken}>
              1000 FFUL
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </MuiCard>
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
        <DialogTitle className={classes.dialog}>{"User Reviews About The Product"}
          <Button className={classes.reviewButton} onClick={handleClickOpenD}>
            WRITE A REVIEW
          </Button>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
          <Reviews />
          <Reviews />
          <Reviews />
          <Reviews />
          <Reviews />
          <Reviews />
          <Reviews />
          <Reviews />
          <Reviews />
          <Reviews />
          <Reviews />
          <Reviews />
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Dialog
        open={openD}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseD}
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
        <DialogTitle className={classes.dialog}>{"Write Your Review"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        
      />
      <TextField
            id='outlined-textarea'
            label='password'
            placeholder='Password'
            multiline
            variant='outlined'
            inputRef={pwdRef}
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
            label='pros'
            placeholder='Write your pros'
            multiline
            variant='outlined'
            inputRef={prosRef}
            InputLabelProps={{
              classes : {root: classes.searchLabel}
            }}
            InputProps={{
              style: {
                  color: 'rgb(238, 238, 255)',
                  fontFamily: 'Quicksand',
               },
               classes: { notchedOutline: classes.searchOutline }}}
            className={classes.searchField} 
            />
            <TextField
            id='outlined-textarea'
            label='cons'
            placeholder='Write your cons'
            multiline
            variant='outlined'
            inputRef={consRef}
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
            Add Review
            </Button>
          </DialogContentText>
        </DialogContent>
        </div>
      </Dialog>
      </div>
  )
}

export default Card;