import React from "react";
import { connect } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import cookie from 'cookie'
// import { Link } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
// import Button from '@mui/material/Button';

export function MenuAppBar(props) {
  const { userLoggedIn, setUserLoggedIn } = props;
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const navigate = useNavigate()

  const linkStyle = {
    textDecoration: "none", 
    color: "inherit", 
    flexGrow: 1, 
    cursor: "pointer", 
    fontWeight: 'bold', 
    fontSize: '1rem'
  }

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    document.cookie = cookie.serialize('loggedIn', null, {maxAge:0})
    document.cookie = cookie.serialize("token", null)
    setUserLoggedIn(false) 
    // navigate('/')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#f6359d" }}>
        <Toolbar style={{ display: "flex", minHeight: '56px', padding: '0 8px', justifyContent: "space-between" }}>
        {/* <Toolbar sx={{ }}> */}
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ ...linkStyle}}
              >
                Home
              </Typography>
            </Link>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ ...linkStyle}}
              >
                Products
              </Typography>
            </Link>
            <Link
              to="/cart"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{ ...linkStyle }}
              >
                Cart
              </Typography>
            </Link>
          </div>
          <div>
            {userLoggedIn ? (
              <Link to= '/' onClick={handleLogout} style={{ textDecoration: "none", color: "inherit" }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ ...linkStyle }}
                >
                  Logout
                </Typography>
              </Link>
            ) : (
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, cursor: "pointer" }}
                >
                  Login
                </Typography>
              </Link>
            )}
          </div>

          {/* {auth && (
            <div style={{marginLeft: 'auto'}}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My Cart</MenuItem>
              </Menu>
            </div>
          )} */}

          {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuAppBar);
