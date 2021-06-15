import React from 'react';
import styles from './CaseEight.module.css';
export default function CaseFourteen() {
    return(<>
    <p className ={styles.paraGraph}>
       不管是国内还是国外医院都有自动摆药机，可以根据不同病人配置不同的药丸，一袋一袋分装好，打上日期、用量、姓名等，他们对于包装膜的要求是：1）膜对折后收成卷膜；2）袋子要易撕；3）医生可以在袋子上直接用水笔、圆珠笔写字；4）降低成本；
我们根据他们提出的几个要点，做了如下动作：
1）和设备厂合作做成了高速对折机；<br></br>
2）用薄膜压花，一方面解决易撕问题，一方面可以降低成本，替代玻璃纸；<br></br>
3）用特殊油墨印刷，解决水笔或者圆珠笔在薄膜上直接书写的问题。<br></br>
 
      </p>
      <img src = "Analyze/Free post design.png" alt ="" className ={styles.img}></img>
      </>);
}