import styles from "./page.module.css";
import HeroSection from "@/components/hero-section/hero-section";
import USPSection from "@/components/usp-section/usp-section";
import ProductGallery from "@/components/product-gallery/product-gallery";
import CollectionsSection from "@/components/collections-section/collections-section";
import Footer from "@/components/footer/footer";


export default function Home() {
  return (
    <main className={styles.root}>
      <HeroSection />
      <USPSection />
      <ProductGallery />
      <CollectionsSection />
      <Footer />
    </main>
  );
}
