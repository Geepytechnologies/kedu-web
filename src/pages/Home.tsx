import React from "react";
import Header from "../components/Header";
import Mission from "../components/Mission";
import Footer from "../components/Footer";
import Ai from "../components/Ai";
import Pitchcards from "../components/Pitchcards";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Header />
      {/* pitchcards */}
      <Pitchcards />
      <Ai />
      <Mission />
      <Footer />
    </div>
  );
};

export default Home;
