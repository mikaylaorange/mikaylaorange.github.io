import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import { Button } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import Burger from "./burger";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    flexGrow: 1,
  },
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    // target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackToTop(props) {
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  const handleAboutClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#about"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  const handleWorkClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#work"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  const handleContactClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#contact"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar style={{ backgroundColor: "rgb(22, 44, 58)" }}>
        <Toolbar>
          <Typography
            variant="h6"
            style={{
              color: "rgb(217, 124, 80)",
              fontFamily: "Josefin Sans",
              marginRight: "840px",
              cursor: "pointer",
            }}
            onClick={handleClick}
          >
            Mikayla Orange
          </Typography>
          <Button
            style={{
              fontFamily: "Josefin Sans",
              borderRadius: "25px",
              textTransform: "capitalize",
              color: "rgb(217, 124, 80)",
            }}
            onClick={handleAboutClick}
          >
            About
          </Button>
          <Button
            style={{
              fontFamily: "Josefin Sans",
              borderRadius: "25px",
              textTransform: "capitalize",
              color: "rgb(217, 124, 80)",
            }}
            onClick={handleWorkClick}
          >
            Work
          </Button>
          <Button
            style={{
              fontFamily: "Josefin Sans",
              backgroundColor: "rgb(217, 124, 80)",
              borderRadius: "25px",
              textTransform: "capitalize",
              color: "rgb(22, 44, 58)",
              padding: "10px 20px",
            }}
            onClick={handleContactClick}
          >
            Contact
          </Button>
          <Burger />
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab
          style={{
            background: "rgb(217, 124, 80)",
            height: "30px",
            width: "120px",
            borderRadius: "15px",
            textTransform: "capitalize",
            color: "rgb(22, 44, 58)",
            fontFamily: "Josefin Sans",
          }}
          size="medium"
          aria-label="scroll back to top"
        >
          Back To Top
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
