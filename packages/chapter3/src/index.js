import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Helmet, HelmetProvider} from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
      <Helmet>
        <title>Hello World!!!!</title>
        <meta name="description" content={'this is description'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hanghae-iota.vercel.app/" />
        <meta property="og:title" content="Content Title" />
        <meta
          property="og:image"
          content="https://hanghae99.spartacodingclub.kr/_next/image?…%2Fplus_fe_course_image.png%3Fver%3D2&w=3840&q=75"
        />
        <meta property="og:description" content="Description Here" />
        <meta property="og:site_name" content="Site Name" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630"></meta>
      </Helmet>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
