import NavBar from "../components/layout/NavBar";
import HeroSection from "../components/crypto/HeroSection";
import CryptoTickerSection from "../components/crypto/CryptoTickerSection";
import GridSection from "../components/crypto/GridSection";
import Footer from "../components/layout/Footer";
import LearnMoreSection from "../components/crypto/LearnMoreSection";
import HomeSignUpSection from "../components/crypto/HomeSignUpSection";


const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header / Navigation (always visible) */}
      <header>
        <NavBar />
      </header>

      {/* Main content */}
      <main className="flex-1">
        {/* Hero section with email input and CTA */}
        <section aria-labelledby="hero-heading">
          <HeroSection />
        </section>

        {/* Crypto ticker and highlights */}
        <section aria-labelledby="ticker-heading" className="mt-6">
          <CryptoTickerSection />
        </section>

        <section>
          <GridSection />
        </section>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
