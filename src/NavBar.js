import React from 'react';
import styles from './NavBar.module.css';
import './NavBar.module.css';
import {
  Link
} from "react-router-dom";

export default function NavBar() {
  return (
    <>
     <div className="b-0">
        <header className="App-header">
          <button class="button0a">
            主页
          </button>
        </header>
      </div>
    <div class={styles.bA}>
      <div className= {styles.boxA}>
        <h1 classname="Company-Name">
          恒元创
     </h1>
      </div>
      <img src="https://i.postimg.cc/mZ5wwxMF/d4d63b76378afe0668c2f1f12cafce7.png" alt="" className= {styles.imgA}></img>
      <div class= {styles.boxB}>
        <Link to="/contact" className={styles.boxBb}>
          <span class="glyphicon glyphicon-earphone"></span>
        </Link>
        <Link to="/intro" className={styles.boxBb}>
          <span class="glyphicon glyphicon-question-sign"></span>
        </Link>
        <Link to ="/analyze" className={styles.boxBb}>
          <span class="glyphicon glyphicon-search"></span>
        </Link>
        <Link to ="/" className={styles.boxBb}>
          <span class="glyphicon glyphicon-info-sign"></span>
        </Link>
        <ul>
          <li className={styles.boxBa}>
          <Link to="/contact">
            联系我们
          </Link>
          </li>
        <li className={styles.boxBa} >
          <Link to="/analyze">
            案例分析
          </Link>
        </li>
        <li className={styles.boxBa}>
          <Link to="/intro">
            产品介绍
          </Link>
        </li>
        <li className={styles.boxBa} >
          <Link to="/">
            公司简介
          </Link>
        </li>
        </ul>
      </div>
    </div>
    </>
  );
}
/**
 * <Router>
          <nav>
          <ul>
          <li className={styles.boxBa}>
          <Link to "/contact">
            Contact
          </Link>
          </li>
        <li className={styles.boxBa} >
          <Link to "/analyze">
            案例分析
          </Link>
        </li>
        <li className={styles.boxBa}>
          <Link to "/products">
            产品介绍
          </Link>
        </li>
        <li className={styles.boxBa} >
          <Link to "/intro">
            公司简介
          </Link>
        </li>
        </ul>
        </nav>
        <switch>
          <Route path = "/contact"> </联系我们> </Route>
        </switch>
      </Router>
 */