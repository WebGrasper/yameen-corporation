"use client";
import { useEffect, useState } from 'react';
import styles from './image-slider.module.css';

const ImageSlider = () => {
    const [counter, setCounter] = useState<number>(0);
    const [activeFullImage, setActiveFullImage] = useState<boolean>(false);

    const images = [
        "https://ik.imagekit.io/ancorporation/Test%20resources/brass-camel.webp?updatedAt=1728314126048",
        "https://ik.imagekit.io/ancorporation/Test%20resources/brass-bowl.webp?updatedAt=1728314125738",
        "https://ik.imagekit.io/ancorporation/Test%20resources/brass-tortoise-urli.webp?updatedAt=1728314125956",
    ];

    /* Stopped calculating left dynamically, and doing it statically using css.*/

    // useEffect(() => {
    //     const slides = document.querySelectorAll(`.${styles.slideContainer}`);
    //     slides.forEach((slide, index) => {
    //         (slide as HTMLElement).style.left = `${index * 100}%`;
    //     });
    // }, []);

    useEffect(() => {
        (() => {
            const slides = document.querySelectorAll(`.${styles.slideContainer}`);
            slides.forEach(
                (slide, index) => {
                    (slide as HTMLElement).style.transform = `translateX(-${counter * 100}%)`;
                }
            )
        })();
    }, [counter]);

    const handlePrevious = () => {
        if (counter > 0) {
            setCounter(prev => prev - 1);
        }
    };

    const handleNext = () => {
        if (counter < images.length - 1) {
            setCounter(prev => prev + 1);
        }
    };

    return (
        <div className={`${styles.root} ${activeFullImage ? styles.rootActive : ''}`}>
            {activeFullImage && <img src="/close-dark.png" alt="close button" className={styles.closeButton} onClick={() => setActiveFullImage(false)} />}
            {images.map((src, index) => (
                <div
                    className={`${styles.slideContainer} ${styles[`slide${index + 1}`]}`}
                    key={index}
                >
                    <img
                        src={src}
                        alt=""
                        loading="lazy"
                        onClick={() => setActiveFullImage(true)}
                        className={`${styles.slide} ${activeFullImage ? styles.slideActive : ''}`}
                    />
                </div>
            ))}
            <img src="/left-arrow-filled-dark.png" alt="left button" className={`${styles.leftButton} ${activeFullImage ? styles.leftButtonActive : ''} ${(counter <= 0) ? styles.disableButton : ''}`} onClick={handlePrevious} />
            <img src="/right-arrow-filled-dark.png" alt="right button" className={`${styles.rightButton} ${activeFullImage ? styles.rightButtonActive : ''} ${(counter >= images.length - 1) ? styles.disableButton : ''}`} onClick={handleNext} />
        </div>
    );
}

export default ImageSlider;