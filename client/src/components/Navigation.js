import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PhoneIcon from "@material-ui/icons/Phone";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black",
  },
  nav: {
    backgroundColor: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navlink: {
    color: "white",
    textDecoration: "none",
  },
}));

const NavigationComp = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <PhoneIcon />
          </IconButton>
          <Link className={classes.navlink} to="/">
            <Typography variant="h6" className={classes.title}>
              Phone Catalog
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationComp;
