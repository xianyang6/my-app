import React from 'react';
import { Product } from './API';
import styles from './Product.module.css';

export default function ProductUI(props: { product: Product }) {
    return (
        <div className = {styles.img}>
            <h3>{props.product.name}</h3>
            <p>行业应用: {props.product.application}</p>
            <p>材料类型: {props.product.types.join(', ')}</p>
            <img src = {props.product.imageUrl} alt = " "></img>
        </div>
    );
}
