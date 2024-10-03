import { FunctionComponent } from "react";
import Heading2 from "@/containers/heading-2/heading-2";
import styles from "./collections-section.module.css";
import Para1 from "@/containers/para-1/para-1";
import CollectionsCard from "@/containers/collections-card/collections-card";

const CollectionsSection: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <Heading2 value={"See What We Offer."} animate={true}/>
        <Para1 value={"View Our Collection"} animate={true} showIcon={false}/>
        <CollectionsCard animate={false}/>
      </div>
    </div>
  );
};

export default CollectionsSection;
