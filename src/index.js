import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router'
import './css/App.scss';
import './css/Style.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(
    <div>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        <Router/>
    </div>
    ,document.getElementById('root'));