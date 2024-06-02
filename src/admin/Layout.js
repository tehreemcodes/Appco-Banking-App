import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "./Layout.css";
const Layout = () => {
  return (
    <div>
      <AppBar position="fixed" elevation={0} color="">
        <Toolbar className="app_items">
          <Link to="/">
            <Typography className="logo"><img width="100" height="50" src="https://i.imgur.com/CAdig9X.png"/></Typography>
          </Link>

          <div className="appbar__right">
          <Link to="/login">
              <Typography className="appbar__rightChild">
                Sign In
              </Typography>
            </Link>
            <Link to="/register">
              <Typography className="appbar__rightChild">
                Sign Up
              </Typography>
            </Link>
            <Link to="/transaction">
              <Typography className="appbar__rightChild">
                Transaction History
              </Typography>
            </Link>
            <Link to="/customers">
              <Typography className="appbar__rightChild">
                View All Customers
              </Typography>
            </Link>
            <Link to="/money">
              <Typography className="appbar__rightChild">
                Money Transfer
              </Typography>
            </Link>
            <Link to="/contact">
              <Typography className="appbar__rightChild">
                Contact Us
              </Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Layout;
