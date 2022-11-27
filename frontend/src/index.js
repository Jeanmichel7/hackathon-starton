import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import UsersPage from './pages/UsersPage';
import ProductsPage from './pages/ProductsPage';
import './index.css'
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import SectionSeparator from './components/SectionSeparator';
import axios from 'axios';

/* to move */
import { SCaddProduct } from './services/wallet.service'


const store = configureStore();

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

async function addProduct() {
  let name = "TEMP NAME";
  let details = "TEMP DETAILSQWERTYUIOP";
  let imageCID = "IMAGE RECUPERER DE GLISSER DEPOSER";
  let hashCID = await getHashCid(name);
  SCaddProduct(name, details, imageCID, hashCID);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <SectionSeparator name="PRODUCTS"/>


      <button onClick={addProduct} value={1}>Genereate pass</button>


      <ProductsPage />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
