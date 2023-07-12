import Featured from '../components/Featured';
import Header from '../components/Header';
import HeroSection from '../components/Hero';

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <HeroSection />
      <Featured />
    </div>
  );
};

export default HomePage;
