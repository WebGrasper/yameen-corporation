import { FunctionComponent } from "react";
import styles from './logo.module.css';

const Logo: FunctionComponent = () =>{
    return(
        <div className={styles.root}>
            <div className={styles.brandName}>
                <p>Yameen</p>
                <p>Corporation</p>
            </div>
        </div>
    )
}

export default Logo;