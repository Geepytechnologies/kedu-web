import React from "react";
import Header from "../components/Header";
import Mission from "../components/Mission";
import Footer from "../components/Footer";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Header />
      <Mission />
      <Footer />
    </div>
  );
};

export default Home;
