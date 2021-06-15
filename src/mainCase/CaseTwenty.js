import React from 'react';
import styles from './CaseEight.module.css';
export default function CaseTwenty() {
    return(<>
    <p className ={styles.paraGraph}>
     我们遇到一个日本客户，要求我们给他们提供的卷膜必须纵横向都非常平整，也就是切下一片膜，摊平在桌面上，不能有卷曲现象。
客户的材质不是很复杂，就只是PET/AL/PE。
一般来讲，卷膜总归会有点卷曲，不管是纵向还是横向，这是做软包装人好像习以为常的事情，但客户就给我们出了这样一个所谓“行业通病”的难题。
我们仔细研究后，得出了几个改善方向：
1）复合时几种材料的张力匹配问题，这个一般稍微有点复合机操作知识的都会注意的；<br></br>
2）控制材料平整度，材料越宽越会出现荡边问题，不管是什么材料；<br></br>
3）复合前材料是不是存在极大内应力，任何材料只要有内应力存在，熟化后终归会体现出来的，这个问题恰恰是行业内基本都会是忽略的，而这个问题恰恰是导致成品包装膜卷曲最致命的原因。<br></br>
找到了问题的原因，对症下药解决问题就比较简单了，后来我们解决了客户问题，也得到了客户的订单。

 
      </p>
      <img src = "Analyze/Free post design.png" alt ="" className ={styles.img}></img>
      </>);
}