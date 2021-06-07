import React from 'react';
import styles from './Description.module.css';
export default function Description(){
    return(
    <div class ={styles.container}>
    <img src = "images/pla009.jpg" alt ="" class = {styles.img}></img>
    <h3 className ={styles.boxA}>
          无锡恒元创包装
    </h3>
      <h3 className ={styles.paraA}>
        是一家有着自己庞大生产基地的外贸出口企业。
        公司是一家对塑料软包装有着自己深刻理解的企业，公司深知自己存在的价值就是为所有使用塑料软包的客户解决他们在使用过程中遇到的任何实际问题，我们就是解决软包装问题的专家。
      </h3>
    </div>
    );
}