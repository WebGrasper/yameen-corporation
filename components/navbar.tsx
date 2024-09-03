"use client"

import { FunctionComponent, useState } from "react";
import styles from '@/styles/navbar.module.css';
import Logo from "./logo";
import Link from "next/link";
import { Abril_Fatface } from "next/font/google";
const cormorant_garamond = Abril_Fatface({ subsets: ["latin"], weight: [ "400"] });

const Navbar: FunctionComponent = () => {

    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

    return (
        <nav className={styles.root} >
            <div className={styles.navbar}>
                <div className={styles.container}>
                    <Logo />
                </div>
                <div className={styles.container}>
                    <ul>
                        <li onMouseEnter={()=> setIsMenuVisible(true)}
                            onMouseLeave={()=> setIsMenuVisible(false)}>
                            Collections
                            <ul className={`${styles.megaDropDownMenu} ${isMenuVisible ? styles.show : ""}`}>
                                <li className={cormorant_garamond.className}>Black Metal Wall Art</li>
                                <li className={cormorant_garamond.className}>Outdoor Metal Wall Art</li>
                                <li className={cormorant_garamond.className}>Large Metal Wall Art</li>
                                <li className={cormorant_garamond.className}>Abstract Metal Wall Art</li>
                                <li className={cormorant_garamond.className}>Coastal Metal Wall Art</li>
                                <li className={cormorant_garamond.className}>Metal Wall Art</li>
                                <li className={cormorant_garamond.className}>Abstract Metal Tree Wall Art</li>
                            </ul>
                        </li>
                        <li><Link href={'#'}>About us</Link></li>
                        <li><Link href={'#'}>Contact us</Link></li>
                    </ul>
                </div>
                <div className={styles.container}></div>
            </div>
        </nav>
    )
}

export default Navbar;