import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import FeaturedMugs from "./components/FeaturedMugs";
import SmallCard from "./components/SmallCard";
import PremOffer from "./components/Card/PremOffer";
import PageDivider from "./components/Others/PageDivider";
import StoryCard from "./components/StoryCard";
import Footer from './components/Footer'

function App() {
  return (
    <div className="body">
      <Navbar />
      <Main />
      <FeaturedMugs />
      <SmallCard />
      <PremOffer />
      <PageDivider />
      <StoryCard />
      <Footer />
    </div>
  );
}

export default App;
