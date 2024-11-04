import { FunctionComponent } from "react";
import Heading2 from "@/containers/heading-2/heading-2";
import styles from "./product-gallery.module.css";
import ProductSlider from "@/containers/product-slider/product-slider";
import Para1 from "@/containers/para-1/para-1";

const ProductGallery: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <Heading2 value={"Our Products."} animate={true} dark={true}/>
        <Para1 value={"Swipe left"} animate={true} showIcon={true} dark={true}/>
        <ProductSlider animate={true}/>
      </div>
    </div>
  );
};

export default ProductGallery;
