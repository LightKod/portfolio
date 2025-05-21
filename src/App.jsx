import MainSection_NightSky from "./sections/MainSection_NightSky";
import MainSectionCity from "./sections/MainSection_City";
import TimelineSection from "./sections/TimelineSection";
import AchivementSection from "./sections/AchivementSection";
import ContactSection from "./sections/ContactSection";
import MusicToggleButton from "./components/MusicToggleButton";

function App() {
  return (
    <div className="min-h-screen">
      <MainSectionCity />
      <TimelineSection />
      <AchivementSection />
      <ContactSection />
      <MusicToggleButton />
    </div>
  );
}

export default App;
