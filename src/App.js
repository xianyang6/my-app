//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';

export default function App() {

  return (
    /** 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    **/
    <div className="App">
      <div className="b-0">
        <header className="App-header">
          <button class="button0a">
            主页
          </button>
        </header>
      </div>
      <body className="App-body">
        <NavBar />
        <Home />
      </body>
    </div >
  );
}
// function NextImg() {
//   var ImageId = document.getElementById("img-1");
//   if (ImageId.src.match("https://i.postimg.cc/DwcFRmnt/DJI-0135.jpg")) {
//     ImageId.src = "https://i.postimg.cc/TwbXdzzL/963A9831.jpg";
//   } else if (ImageId.src.match("https://i.postimg.cc/TwbXdzzL/963A9831.jpg")) {
//     ImageId.src = "https://i.postimg.cc/d3ZCLq2Y/963A9794.jpg";
//   } else if (ImageId.src.match("https://i.postimg.cc/d3ZCLq2Y/963A9794.jpg")) {
//     ImageId.src = "https://i.postimg.cc/xTnR6ZS3/963A9797.jpg";
//   } else if (ImageId.src.match("https://i.postimg.cc/xTnR6ZS3/963A9797.jpg")) {
//     ImageId.src = "https://i.postimg.cc/63Ts4QMT/963A9811.jpg";
//   } else if (ImageId.src.match("https://i.postimg.cc/63Ts4QMT/963A9811.jpg")) {
//     ImageId.src = "https://i.postimg.cc/QdxrZScp/963A9867.jpg";
//   } else if (ImageId.src.match("https://i.postimg.cc/QdxrZScp/963A9867.jpg")) {
//     ImageId.src = "https://i.postimg.cc/XYTxkYNp/963A9801.jpg";
//   } else if (ImageId.src.match("https://i.postimg.cc/XYTxkYNp/963A9801.jpg")) {
//     ImageId.src = "https://i.postimg.cc/qRfB8Y58/963A9807.jpg";
//   } else if (ImageId.src.match("https://i.postimg.cc/qRfB8Y58/963A9807.jpg")) {
//     ImageId.src = "https://i.postimg.cc/GpCSGxj4/963A9816.jpg";
//   } else if (ImageId.src.match("https://i.postimg.cc/GpCSGxj4/963A9816.jpg")) {
//     ImageId.src = "https://i.postimg.cc/htBtzNNT/963A9839.jpg";
//   } else if (ImageId.src.match("https://i.postimg.cc/htBtzNNT/963A9839.jpg")) {
//     ImageId.src = "https://i.postimg.cc/DwcFRmnt/DJI-0135.jpg";
//   }
// }
