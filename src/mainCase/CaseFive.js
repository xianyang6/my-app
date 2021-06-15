import React from 'react';
import styles from './CaseEight.module.css';
export default function CaseFive() {
    return(<>
    <p className ={styles.paraGraph}>
        国内某著名药企投诉说我们的膜在他们自动包装机上光标跟不住，出现乱刀切现象。我们赶到现场一看，发现现场有若干台自动包装机，就中间一台有这个问题。
我们进行了交叉认证，就是把别的机器上用得很顺畅的膜拿到那台机上使用，发现马上就跟不住光标；把那台机器上不能用得膜放到别的机器上，发现马上就可以正常使用了。然后我们把这台机器和别的机器的光电眼对换，发现那台机器的光电眼一换到别的机器上，马上别的机器也不正常了，而那台机器一用别的机器上置换过来的光电眼，那台机器也变得正常了，最后我们确定那台机器的光电眼有问题。
后来我们发现，原来那台机器的光电眼还是处在原始出厂状态，没有校正过，我们把它校正了一下，马上就可以正常工作了，问题也就解决了。
      </p>
      <img src = "Analyze/Free post design.png" alt ="" className ={styles.img}></img>
      </>);
}