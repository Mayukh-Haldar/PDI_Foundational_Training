import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ListingSection from "./components/listing/ListingSection";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <ListingSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
