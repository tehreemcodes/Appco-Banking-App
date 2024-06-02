import "./Home.css";
import image from "../assets/bank2.svg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="home__left">
        <div className="home__title">
          <Typography variant="h2" component="h3">
            Get your transactions sorted through AppCo
          </Typography>
        </div>
        <div className="home__subTitle">
          <Typography variant="h6" component="h6">
            Convenient way to make transactions with just a few clicks! Manage your finances with ease.
          </Typography>
        </div>
        <div className="home__buttons">
          <Link to="/transaction">
            <Button
              className="home__button1"
              variant="outlined"
              size="large"
              color="error"
            >
              View Transactions
            </Button>
          </Link>
          <Link to="/money">
            <Button className="home__button1" variant="outlined" size="large">
              Money Transfer
            </Button>
          </Link>
        </div>
      </div>
      <div className="home__right">
        <div className="home__image">
          <img src="https://i.imgur.com/XSFBoYj.png" alt="Banking" />
        </div>
      </div>
    </div>
  );
};

export default Home;
