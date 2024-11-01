import { FunctionComponent } from 'react';
import styles from './addition-button.module.css';

export const AdditionButton:FunctionComponent<{onClick: ()=> void}> = ({onClick}) =>{
    return(
        <div className={styles.root} onClick={onClick}>
            <img src="/add.png" alt="Add button" />
        </div>
    );
}