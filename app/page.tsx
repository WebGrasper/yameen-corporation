import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/hero-section/hero-section";
import USPSection from "@/components/usp-section/usp-section";

export default function Home() {
  return (
    <main className={styles.root}>
      <HeroSection />
      <USPSection />
    </main>
  );
}
