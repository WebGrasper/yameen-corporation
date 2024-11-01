"use client";

import { FunctionComponent, useEffect, useState } from 'react';
import { AdditionButton } from '../addition-button/addition-button';
import { SubtractButton } from '../subtract-button/subtract-button';
import styles from './quantity-adjuster.module.css';
import Para3 from '../para-3/para-3';

const QuantityAdjuster = () => {

    const [quantity, setQuantity] = useState<number>(1);
    // Increment and decrement functions
    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () => setQuantity(prev => Math.max(1, prev - 1));

    return (
        <div className={styles.root}>
            <Para3
                value={"Quantity."}
                animate={false}
                showIcon={false}
                dark={true}
                bold={true}
            />
            <div className={styles.counterContainer}>
                <SubtractButton onClick={decrement}/>
                <p className={styles.value}>{quantity}</p>
                <AdditionButton onClick={increment}/>
            </div>
        </div>
    );
}

export default QuantityAdjuster;