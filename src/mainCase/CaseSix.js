import React from 'react';
import styles from './CaseEight.module.css';
export default function CaseFive() {
    return(<>
    <p className ={styles.paraGraph}>
       客户有时为了考虑卷膜的爽滑性，会要求内层的摩擦系数很低很低，但这个卷膜在实际使用过程中往往会带来卷膜内层热封面发涩，而外层打滑，导致根本没法顺利包装。
这种现象在卷膜在库里存放时间过长，或者卷膜经过一个较高气温的变化而特别容易发生。
这种问题如果不热封层的配方等着手从源头根本解决，早晚会发生此类问题的，因为你不能让客户必须在短时间内使用完卷膜，也不能预防高温天气变化，从而导致爽滑剂析出到卷膜表面的极性层，从而出现表面打滑、内层发涩，致使包装膜根本没法使用。
      
      </p>
      <img src = "Analyze/Free post design.png" alt ="" className ={styles.img}></img>
      </>);
}