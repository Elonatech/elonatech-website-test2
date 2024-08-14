import { Helmet } from "react-helmet-async";
import Carousel from "../carousel/carousel";
import Main from "../main/main";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Elonatech Nigeria Limited - Tech Solutions, Digital Solution and Sales
        </title>
        <meta
          name="description"
          content="Top-Notch Technology Service Provider, The IT Solutions and Corporate Consultant Company ,
       Website and App Solutions,  Flexible, Scalable IT Solutions, FREE Consultation on the Best Digital Marketing Strategy "
        />
        <link rel="canonical" href="https://elonatech.com.ng/" />
        <meta
          name="keywords"
          content="
          Elonatech, 
          Top-Notch Technology Service Provider, Website and App Solutions, FREE Consultation, Best Digital Marketing Strategy, 
          Laptops, Computers, office equipments, Office Products, Hardware, Graphics Designer, Digitial Marketer, Network Engineer, Routers,
          Get What you need to run your Business,
          We help you Outsell, Outperform and Outlast your Competitors,
          Because your Business Works when your Hardware Works,
          Installing, Implementing and Maintaining Networks for Businesses,
          Best Digital Marketing Strategy for your Business,
          Your One-Stop IT Solutions Provider,
          Your Reliable IT Partner,
          We Focus on Getting it Done,
          The IT Solutions and Corporate Consultant Company,
          Experience Innovative Solutions,
          Tech Solutions, Digital Solutions and Sales
          "
        />
      </Helmet>
      <Carousel />
      <Main />
    </>
  );
};

export default Home;
