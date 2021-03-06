import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './Analyze.module.css';

import {
    Link
} from "react-router-dom";
export default function Analyze() {
    return (
        <>
         <Helmet>
        <title>经典案例</title>
        <meta name="description" content="从业20年解决包装问题/案例" />
        <meta name="theme-color" content="#008f68" />
        </Helmet>
    <Link to ="/caseOne" className ={styles.caseSet}>
    <img src ="Analyze/photo1.jpg" alt ="" className = {styles.img}></img>
      案例一：自动装机改进问题 --
      解决包装膜的问题，还可以解决包装设备的问题，是真正包装方案的提供者。
    </Link>
    <Link to ="/caseTwo" className ={styles.caseSet}>
    <img src ="Analyze/photo2.png" alt ="" className = {styles.img}></img>
      案例二：薄膜烫烂+无法热封
    </Link>
    <Link to ="/caseThree" className ={styles.caseSet}>
    <img src ="Analyze/photo3.png" alt ="" className = {styles.img}></img>
      案例三：包装膜光标跟不住+乱刀切
    --光标跟不住，出现乱刀切现象
    </Link>
    <Link to ="/caseFour" className ={styles.caseSet}>
    <img src ="Analyze/photo4.png" alt ="" className = {styles.img}></img>
      案例四：卷膜摩擦系数太大+拉不动
    </Link>
    <Link to ='/caseFive' className ={styles.caseSet}>
    <img src ="Analyze/photo5.png" alt ="" className = {styles.img}></img>
        案例五：热灌装、重包装袋子封口不牢
    </Link>
    <Link to ='/caseSix' className ={styles.caseSet}>
    <img src ="Analyze/photo6.png" alt ="" className = {styles.img}></img>
      案例六、卷膜打滑+拉不动 (库里存放时间过长 爽滑剂析出到卷膜表面的极性层 )
    </Link>
    <Link to ='/caseSeven' className ={styles.caseSet}>
    <img src ="Contact/ice-mountain.jpg" alt ="" className = {styles.img}></img>
    案例七、超硬+超尖锐物品的真空包装 或者超韧性+真空包装袋
    </Link>
    <Link to ='/caseEight' className ={styles.caseSet}>
    <img src ="Contact/ice-mountain.jpg" alt ="" className = {styles.img}></img>
    案例八、特殊包装材料（收缩膜）的研发
    </Link>
    <Link to ='/caseNine' className ={styles.caseSet}>
    <img src ="Contact/ice-mountain.jpg" alt ="" className = {styles.img}></img>
    案例九、真空玻璃间隔条膜
    </Link>
    <Link to ='/caseTen' className ={styles.caseSet}>
    <img src ="Contact/ice-mountain.jpg" alt ="" className = {styles.img}></img>
    案例十、特殊裱花袋
    </Link>
    <Link to ='/caseEleven' className ={styles.caseSet}>
    <img src ="Contact/ice-mountain.jpg" alt ="" className = {styles.img}></img>
    案例十一、完全生物可降解+真空袋
    </Link>
    <Link to ='/caseTwelve' className ={styles.caseSet}>
    <img src ="Contact/ice-mountain.jpg" alt ="" className = {styles.img}></img>
    案例十二、高温蒸煮自立袋+无异味内层膜+微波炉加热
    </Link>
    <Link to ='/caseThirteen' className ={styles.caseSet}>
    <img src ="Analyze/photo13.png" alt ="" className = {styles.img}></img>
    案例十三、超级抗跌落重包装袋
    </Link>
    <Link to ='/caseFourteen' className ={styles.caseSet}>
    <img src ="Contact/ice-mountain.jpg" alt ="" className = {styles.img}></img>
    案例十四、摆药机对折膜
    </Link>
    <Link to ='/caseFifteen' className ={styles.caseSet}>
    <img src ="Contact/ice-mountain.jpg" alt ="" className = {styles.img}></img>
    案例十五、耐高温+水溶膜+洗衣袋
    </Link>
    <Link to ='/caseSixteen' className ={styles.caseSet}>
    <img src ="Analyze/photo16.png" alt ="" className = {styles.img}></img>
    案例十六、抗紫外线+堆高+高阻隔+单向排气+抗跌落+抗穿刺袋子
    </Link>
    <Link to = '/caseSeventeen' className ={styles.caseSet}>
    <img src ="Contact/ice-mountain.jpg" alt ="" className = {styles.img}></img>
    案例十七、超高的阻水阻氧性+超低的导热系数
    </Link>
    <Link to = '/caseEightteen' className ={styles.caseSet}>
    <img src ="Analyze/photo18.png" alt ="" className = {styles.img}></img>
    案例十八、高速喷码解决品种多+单品量少+总量不少包装用户
    </Link>
    <Link to ='/caseNineteen' className ={styles.caseSet}>
    <img src ="Analyze/photo19.png" alt ="" className = {styles.img}></img>
    案例十九、超级抗跌落包装袋
    </Link>
    <Link to = '/caseTwenty' className ={styles.caseSet}>
    <img src ="Analyze/photo20.png" alt ="" className = {styles.img}></img>
    案例二十、超平整+无卷曲包装卷膜
    </Link>
    <Link to ='/MoreCase' className ={styles.caseSet}>
        更多解决案例
    </Link>
    </>
    );
}