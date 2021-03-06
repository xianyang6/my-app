import React from 'react';
import styles from './CaseEight.module.css';
export default function CaseTwo() {
    return(
        <>

    <p className ={styles.paraGraph}>
        我们给广州某著名外资公司提供试样，客户投诉我们的样品不能使用，因为包装膜容易烫烂。
我们赶到现场一看，原来因为业务员沟通不充分，业务员提供的客户包装膜使用信息有误。客户使用的是PE卷膜，虽然是PE卷膜，为了保证包装顺利，PE的内外层耐温必须拉开，也就是外层必须比内层耐温高，这样制袋时，内层已经融化热封，外层还是保持坚挺。但我们给客户提供的卷膜内外层搞反了，内层在外，外层在内，所以客户包装机热封刀一加热，就烫糊了。
按理说，我们应该把卷膜发回我司倒一下卷，把内外层倒一下再发回客户处试机，但一是浪费时间，二是毕竟是试样，不是批量使用。<br></br>
我们现场发现，只要把他们的放卷马达反转一下，就可以解决这个问题，所以当场就拆开他们的马达，把其中两根接线对换一下，让马达反转，当场就试机通过了。
      </p>
      <img src = "Analyze/Free post design.png" alt ="" className ={styles.img}></img>
      </>);
}