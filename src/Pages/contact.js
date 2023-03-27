import React from "react";
import { Button } from "@material-ui/core";
import "./contact.css";

function Mailto({ email, subject, body, ...props }) {
  return (
    <a
      className="button"
      style={{
        textTransform: "capitalize",
        textDecoration: "none",
        fontFamily: "Josefin Sans",
        color: "rgb(217, 124, 80)",
      }}
      href={`mailto:${email}?subject=${
        encodeURIComponent(subject) || ""
      }&body=${encodeURIComponent(body) || ""}`}
      target="blank_"
    >
      {props.children}
    </a>
  );
}
export default function Contact() {
  return (
    <div style={{ paddingBottom: "150px", overflowX: "hidden" }} id="contact">
      <h2 className="chat">Let's Chat!</h2>
      <div className="subheader-div">
        <p className="subheader">
          If you ever want to talk about working together, podcasts or what the
          best song from Hamilton is (*cough* Non-stop *cough*), feel free to
          reach out!
        </p>
      </div>
      <Button
        style={{
          fontFamily: "Josefin Sans",
          textTransform: "capitalize",
          color: "rgb(217, 124, 80)",
          borderColor: "rgb(217, 124, 80)",
        }}
        variant="outlined"
        className="button"
      >
        <Mailto
          email="mikayladorange@gmail.com"
          subject="Hi Mikayla!"
          body="I'm here from your website!"
        >
          Say Hi :)
        </Mailto>
      </Button>
    </div>
  );
}
