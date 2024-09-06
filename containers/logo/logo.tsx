import { FunctionComponent } from "react";
import { Frank_Ruhl_Libre } from "next/font/google";
import styles from './logo.module.css';

const frankRuhlLibre = Frank_Ruhl_Libre({ subsets: ["latin"], weight: [ "800"] });

const Logo: FunctionComponent = () =>{
    return(
        <div className={styles.root}>
            <div className={`${styles.brandName} ${frankRuhlLibre.className}`}>
                <p>Yameen</p>
                <p>Corporation</p>
            </div>
        </div>
    )
}

export default Logo;