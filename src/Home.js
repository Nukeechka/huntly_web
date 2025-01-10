import Companies from "./Companies";
import Hero from "./Hero";
import PopularChoice from "./PopularChoice";
import ExploreByCategory from "./ExploreByCategory";
import TopCompanies from "./TopCompanies";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Companies />
      <PopularChoice />
      <ExploreByCategory />
      <TopCompanies />
      <Footer />
    </div>
  );
}

export default Home;
