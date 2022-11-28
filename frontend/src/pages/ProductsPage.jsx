import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsAsync } from '../redux/reducers/products/products';
import Card from '../components/Card';
import Container from '@mui/material/Container'
import {createUseStyles} from 'react-jss'
import { sizing } from '@mui/system';
import { Button } from '@mui/material';
import AddProduct from '../components/AddProduct'

const useStyles = createUseStyles({
  hero: {
    width: '100%',
    height: '100vh',
    maxWidth: '100%',
    padding: '20px'
  },
  containerUp: {
      display:'flex',
      boxSizing:'border-box',
      maxWidth:'100%',
      justifyContent: 'center',
      backgroundColor: 'rgba(21, 21, 21, 0.05)',
      borderRadius: '20px',
      marginBottom: '60px',
      marginTop: '30px'
  },
  containerDown: {
    display:'flex',
    boxSizing:'border-box',
    maxWidth:'100%',
    height:'400px',
    justifyContent: 'center',
    backgroundColor: 'rgb(104, 33, 125)',
    borderRadius: '20px',
},
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
})


const ProductsPage = () => {
    const dispatch = useDispatch();
    const { isLoading, products, errorMessage } = useSelector(state => state.products);
    const classes = useStyles()
    useEffect(() => {
        dispatch(loadProductsAsync())
    }, [])
  return (
    <Container maxWidth="sm"className={classes.hero}>
    <Container maxWidth="sm" className={classes.containerUp}>
        {isLoading && <h3>Loading...</h3>}
        {errorMessage && <h3>{errorMessage}</h3>}
        
        {products && Object.entries(products).map((key) =>
        <Card 
        key={key[1][0]}
        id={key[1][0]}
        name={key[1][1]}
        details={key[1][2]}
        imageCID={key[1][3]}
        reviewsCID={key[1][4]}
        hashCID={key[1][5]}
        tokenPool={key[1][6]}
        />)}
        {/* {users && Object.keys(users.item).map((item, user) => (
            <h5 key ={user.address}>{user.name}</h5>

    ))} */}
    {/* <AddProductCard /> */}
    </Container>
    <Container className={classes.containerDown}>
      <AddProduct />
    </Container>
    </Container>
  )
}

export default ProductsPage;