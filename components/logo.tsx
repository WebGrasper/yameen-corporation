import Image from "next/image";
import { FunctionComponent } from "react";
import logo from '@/public/logo.png';
import styles from '@/styles/logo.module.css';

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