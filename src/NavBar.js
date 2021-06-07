import React from 'react';
import styles from './NavBar.module.css';
import './NavBar.module.css';
export default function NavBar() {
  return (
    <div class={styles.bA}>
      <div className= {styles.boxA}>
        <h1 classname="Company-Name">
          恒元创
     </h1>
      </div>
      <img src="https://i.postimg.cc/mZ5wwxMF/d4d63b76378afe0668c2f1f12cafce7.png" alt="" className= {styles.imgA}></img>
      <div class= {styles.boxB}>
        <a href="https://www.w3schools.com/" className={styles.boxBb}>
          <span class="glyphicon glyphicon-earphone"></span>
        </a>
        <a href="https://www.w3schools.com/" className={styles.boxBb}>
          <span class="glyphicon glyphicon-question-sign"></span>
        </a>
        <a href="https://www.w3schools.com/" className={styles.boxBb}>
          <span class="glyphicon glyphicon-search"></span>
        </a>
        <a href="https://www.w3schools.com/" className={styles.boxBb}>
          <span class="glyphicon glyphicon-info-sign"></span>
        </a>
        <div className={styles.boxBa} >
          <a href="https://www.w3schools.com/">
            联系我们
      </a>
        </div>
        <div className={styles.boxBa} >
          <a href="https://www.w3schools.com/">
            案例分析
      </a>
        </div>
        <div className={styles.boxBa}>
          <a href="https://www.w3schools.com/">
            产品介绍
      </a>
        </div>
        <div className={styles.boxBa} >
          <a href="https://www.w3schools.com/">
            公司简介
      </a>
        </div>
      </div>
    </div>
  );
}