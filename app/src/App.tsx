import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Airlines from './sections/Airlines';
import Railway from './sections/Railway';
import BusServices from './sections/BusServices';
import OtherTransport from './sections/OtherTransport';
import RoutePlanner from './sections/RoutePlanner';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <div id="airlines">
          <Airlines />
        </div>
        <div id="railway">
          <Railway />
        </div>
        <div id="bus">
          <BusServices />
        </div>
        <div id="other">
          <OtherTransport />
        </div>
        <RoutePlanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
