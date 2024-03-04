import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Header,
  Arrow,
  Profile,
  Moto,
  Exp,
  Firstwave,
  Secondwave,
  Card,
  Footer,
} from './App.jsx';
import Toogle from './Toogle.jsx';
import './index.css';

ReactDOM.createRoot(document.querySelector('.header')).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

ReactDOM.createRoot(document.querySelector('.moto')).render(
  <React.StrictMode>
    <Moto />
  </React.StrictMode>
);

ReactDOM.createRoot(document.querySelector('.arrow-btn')).render(
  <React.StrictMode>
    <Arrow />
  </React.StrictMode>
);

ReactDOM.createRoot(document.querySelector('.my_profile')).render(
  <React.StrictMode>
    <Profile />
  </React.StrictMode>
);

ReactDOM.createRoot(document.querySelector('.wave01')).render(
  <React.StrictMode>
    <Firstwave />
  </React.StrictMode>
);

ReactDOM.createRoot(document.querySelector('.experiences')).render(
  <React.StrictMode>
    <Exp />
  </React.StrictMode>
);

ReactDOM.createRoot(document.querySelector('.wave02')).render(
  <React.StrictMode>
    <Secondwave />
  </React.StrictMode>
);

ReactDOM.createRoot(document.querySelector('.cards')).render(
  <React.StrictMode>
    <h2
      className="pt-14 pb-6 text-xl font-semibold text-center font-outfit"
      id="article"
    >
      Article
    </h2>
    <Card
      pic="/pantai.jpg"
      title="Kompasiana"
      teks="Saya menulis berbagai hal tentang teknik penulisan cerita di sini."
      goto="https://www.kompasiana.com/ghelwinanto/"
    />
    <Card
      pic="./gedung.jpg"
      title="Medium"
      teks="Saya menulis tentang kepustakawanan atau hal-hal yang berhubungan dengan perpustakaan disini."
      goto="https://medium.com/@helwinantog"
    />
  </React.StrictMode>
);

ReactDOM.createRoot(document.querySelector('.foot')).render(
  <React.StrictMode>
    <Firstwave />
    <Footer />
  </React.StrictMode>
);

ReactDOM.createRoot(document.querySelector('.toggle')).render(
  <React.StrictMode>
    <Toogle />
  </React.StrictMode>
);
