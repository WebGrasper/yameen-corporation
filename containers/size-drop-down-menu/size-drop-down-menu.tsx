import { FunctionComponent } from 'react';
import styles from './size-drop-down-menu.module.css';
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400"],
});

const SizeDropDownMenu: FunctionComponent<{ sizes: Array<String> }> = ({ sizes }) => {
    return (
        <div className={`${styles.select} ${poppins.className}`}>
            <select>
                <option className={styles.option}>Choose</option>
                {sizes.map((size, index) => (
                    <option key={index} className={styles.option}>{size}</option>
                ))}
            </select>
            <div className={styles.select_arrow}>
            </div>
        </div>
    )
}

export default SizeDropDownMenu;