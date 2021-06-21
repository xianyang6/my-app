import React, { useState } from 'react';
import Description from './Description';
import styles from './Home.module.css';

const imgLinks = [
  'images/DJI_0135.jpg',
  'images/963A9794.jpg',
  'images/963A9807.jpg',
  'images/963A9811.jpg',
  'images/963A9816.jpg',
  'images/963A9823.jpg',
  'images/963A9839.jpg',
  'images/963A9842.jpg',
  'images/963A9863.jpg',
  'images/963A9870.jpg',
];

export default function Home() {

  const [imgIndex, setImgIndex] = useState(0);

  return (
    <>
      <div className="m-1">
        <img src={imgLinks[imgIndex]} alt="" className={styles.img}></img>
        <button class="btn" onClick={() => setImgIndex(prev => (prev + 1) % imgLinks.length)}>下一张</button>
      </div>
      <Description />
      <iframe height= "498" width="510" src='https://player.youku.com/embed/XNTE3MjE2NTU4NA==' frameborder="0" allowfullscreen title ="介绍"></iframe>
    </>
  );
}