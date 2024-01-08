import React from "react";
import Header from "../components/Header";
import Mission from "../components/Mission";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Header />
      <Mission />
    </div>
  );
};

export default Home;
