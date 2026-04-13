import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BuildVehicle from './components/BuildVehicle';
import Features from './components/Features';
import Products from './components/Products';
import SpecsCompare from './components/SpecsCompare';
import Applications from './components/Applications';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import CustomCursor from './components/CustomCursor';
import { Product } from './data/products';
import { AnimatePresence } from 'motion/react';

const App: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');
            if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.origin === window.location.origin) {
                e.preventDefault();
                const id = anchor.hash.substring(1);
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };
        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    return (
        <div style={{ background: 'white', minHeight: '100vh' }}>
            <CustomCursor />
            <Header />
            <main>
                <Hero />
                <BuildVehicle />
                <Features />
                <Products onProductClick={setSelectedProduct} />
                <SpecsCompare />
                <Applications />
                <About />
                <Contact />
            </main>
            <Footer />
            <AnimatePresence>
                {selectedProduct && (
                    <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default App;