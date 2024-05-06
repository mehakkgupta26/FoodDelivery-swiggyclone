
import Shimmering_ui from "./Shimmering_ui";
import Useonlinestatus from "../utlis/Useonlinestatus";
import { AuthContext } from "../utlis/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
 
const {isLoggedIn} = useContext(AuthContext)

  //online status
  const x = Useonlinestatus()

  const nav = useNavigate()
  
  if (x === false) 
  return (
  <div>
    <h4 className="internetStatus"> you are offline !! </h4>
    <Shimmering_ui />
  </div>
  );


//code for protexted route
  // if(!isLoggedIn){
  //   return(
  //   nav("/Login")
  //   )
  // }

  return (
    <div>
      <div className="about-page">
        <div className="about-page">
          <div className="logo">
            <img src="https://png.pngtree.com/png-clipart/20190413/ourmid/pngtree-cartoon-hamburg-fries-design-material-png-image_861555.jpg" alt="Food Ville Logo" />
            <h1>Food Ville</h1>
          </div>
          <div className="content">
            <h2>About Us</h2>
            <p>
              Welcome to Food Ville, your ultimate destination for delightful
              food experiences! We are committed to bringing you the finest
              cuisines from around the world, delivered right to your doorstep.
            </p>
            <p>
              At Food Ville, we believe in the power of good food to bring
              people together. Our mission is to make every meal a memorable one
              by offering a diverse selection of dishes crafted with passion and
              care.
            </p>
            <p>
              Explore our menu, place your order, and embark on a culinary
              journey with Food Ville today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
