import React from 'react';
import styles from './About.module.css';
export default function About() {
    return( 
    <div>
    <div className = {styles.mainTitle}>公司起源/理念</div>
    <div className ={styles.imgA}>
    <img src ={'About/antarctica1060.jpg'} alt ="" className = {styles.imgA}></img>
    <p className ={styles.paraGraph}>
      恒元创新材料科技有限公司致力于以解决软包装行业的难题为己任，持之以恒、立足本元、坚持创新！<br></br>
    恒元创团队主要骨干在软包装行业均从业20年以上，是一支当客户有包装问题就会感到兴奋的专业队伍，因为我们从中看到了我们的机会。我们希望我们是因为帮助客户解决了包装问题而站着挣钱的公司，而不是靠请客、公关、搞关系而跪着乞讨活路的公司！<br></br>
    软包装行业还有许多未解的所谓“行业通病”，总是或多或少存在这样那样的问题，或是功能性达不到要求，导致货架期的缩短；或是包装材料的韧性达不到运输或者耐穿刺的要求导致漏包；或是包装膜和包装机的匹配问题，导致包装机开动时膜拉不动等等。<br></br>恒元创公司通过解决客户软包方面的问题从而为客户提供增值服务。<br></br>
    “不管是包装机的问题还是包装膜的问题，都是我们恒元创的问题！”——这将是恒元创公司永恒的宗旨和发展的动力。
     </p>
     </div>
     </div>);
}