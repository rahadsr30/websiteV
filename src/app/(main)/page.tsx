// import Blog from "./blog";
import Hero from "./hero";
import HowWeWork from "./howWeWork";
import Industry from "./industry";
import Machine from "./machine";
// import News from "./news";
import Plugin from "./plugin";
import Pricing from "./pricing";
import Vision from "./vision";
import WhoWeAre from "./whoWeAre";

export default function Home() {
  return (
    <>
      <Hero />
      <Industry />
      <Machine />
      <Plugin />
      <HowWeWork />
      <WhoWeAre />
      <Pricing />
      {/* <Blog />
        <News /> */}
      <Vision />
    </>
  );
}
