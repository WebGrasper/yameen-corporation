import { FunctionComponent } from "react";
import styles from './product-card.module.css';
import { Frank_Ruhl_Libre } from "next/font/google";

const frankRuhlLibre = Frank_Ruhl_Libre({
    subsets: ["latin"],
    weight: ["800"],
})

export const ProductCard: FunctionComponent<{ imageURL: string, alt?: string, index: number }> = ({ imageURL, alt, index }) => {
    return (
        <div className={styles.card} key={index}>
            <div className={styles.images}>
                <img
                    src={imageURL}
                    alt={alt}
                />
            </div>
            <div className={styles.content}>
                <h4 className={`${styles.title} ${frankRuhlLibre.className}`}>
                    Pure Brass Traditional Kerala Oil Lamp villaku - 16 Inches
                </h4>
                <div className={styles.price}>
                    <ins className={styles.discountedPrice}>$49.99</ins>
                    <del className={styles.mainPrice}>$59.99</del>
                </div>
            </div>
        </div>
    )
}