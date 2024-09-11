import { FunctionComponent } from "react";
import styles from './usp.module.css';
import Image from "next/image";
import { Frank_Ruhl_Libre } from "next/font/google";

const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ["latin"],
  weight: ["800"],
});

const USP: FunctionComponent<{src: string, alt: string, heading: string, description: string}> = ({
    src,
    alt,
    heading,
    description
}) =>{

    return(
        <div className={styles.root} >
            <Image src={src} alt={alt} width={60} height={60} loading="lazy" className={styles.icon}/>
            <div className={styles.content}>
                <h3 className={frankRuhlLibre.className}>{heading}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default USP;