import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {QRCodeSVG} from 'qrcode.react';

  const root = ReactDOM.createRoot(document.getElementById('root'));
  const data = {src: "https://www.google.com/search?channel=fs&client=ubuntu&q=qrcode+svg#imgrc=kLr-ptm1S9b9fM", 
  x: 10, y:10, height: 50, width: 50, excavate: false};
  root.render(
    <>
     <QRCodeSVG 
     value = "QRcode developed by Qodbrains"
     renderas ='svg'
     bgColor ="#FFFFFF"
     fgColor ="#000000"
     level='H'
     includeMargin = "true"
     imageSettings={data}
     />
    </>
  )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

