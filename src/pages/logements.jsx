import Header from "../components/Header";
import Banner from "../components/Layouts/Banner";
import Footer from "../components/Footer";
import Cards from "../components/Layouts/Cards";

export default function Logements() {
  return (
    <>
      <Header />
      <main className="container">
        <Banner />
        <Cards />
      </main>
      <Footer />
    </>
  );
}
