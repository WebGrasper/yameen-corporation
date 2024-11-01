import { FunctionComponent } from 'react';
import styles from './subtract-button.module.css';

export const SubtractButton:FunctionComponent<{onClick: ()=> void}> = ({onClick}) =>{
    return(
        <div className={styles.root} onClick={onClick}>
            <img src="/subtract.png" alt="Add button" />
        </div>
    );
}