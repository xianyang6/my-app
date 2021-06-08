//import logo from './logo.svg';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import Contact from './Contact';
import Analyze from './Analyze';
import Intro from './Intro';
import About from './About';
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
    <Router>
      {/* <div className="App">
      <div className="b-0">
        <header className="App-header">
          <button class="button0a">
            主页
          </button>
        </header>
      </div> */}
      {/* <body className="App-body"> */}
      <NavBar />
      {/* <Home /> */}
      {/* <Description/> */}
      {/* </body>
    </div > */}
      {/* <nav>
        <ul>
          <li className={styles.boxBa}>
          <Link to="/contact">
            Contact
          </Link>
          </li>
        <li className={styles.boxBa} >
          <Link to="/analyze">
            案例分析
          </Link>
        </li>
        <li className={styles.boxBa}>
          <Link to="/products">
            产品介绍
          </Link>
        </li>
        <li className={styles.boxBa} >
          <Link to="/intro">
            公司简介
          </Link>
        </li>
        </ul>
      </nav> */}
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path = "/intro">
          <Intro />
        </Route>
        <Route path="/analyze">
          <Analyze />
        </Route>
        <Route path ="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

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
