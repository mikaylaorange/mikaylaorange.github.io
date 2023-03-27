// import firestoreRef from "../firebase";
import React, { useState, useEffect } from "react";
import { Button, Box, Grid } from "@material-ui/core";
import WorkCard from "../Components/work-card";
import { work_info } from "../work_info";
import "./work.css";

export default function Work() {
  const images = [
    require("../images/second.png"),
    require("../images/ep.png"),
    require("../images/ia.png"),
    require("../images/iycw_mock.png"),
    require("../images/maps.png"),
  ];
  const [workList, setWorkList] = useState([]);
  const languages = [
    { name: "Python", image: require("../images/language-images/python.png") },
    { name: "C", image: require("../images/language-images/c.png") },
    { name: "C++", image: require("../images/language-images/cpp.png") },
    { name: "React", image: require("../images/language-images/react.png") },
    {
      name: "Angular",
      image: require("../images/language-images/angular.png"),
    },
    {
      name: "Javascript",
      image: require("../images/language-images/javascript.png"),
    },
    { name: "HTML/CSS", image: require("../images/language-images/html.png") },
    {
      name: "Typescript",
      image: require("../images/language-images/typescript.png"),
    },
    {
      name: "PostgreSQL",
      image: require("../images/language-images/postgresql.png"),
    },
  ];

  useEffect(() => {
    let workArr = [];
    async function getCards() {
      setWorkList(work_info);
    }
    getCards();
  }, []);

  function Languages() {
    return (
      <React.Fragment>
        {languages.map((language, key) => (
          <Grid item xs={4}>
            <img
              className="language-image"
              src={language.image}
              alt={language.name}
            />
            <h4
              style={{
                fontFamily: "Josefin Sans",
                color: "rgb(219, 169, 136)",
              }}
            >
              {language.name}
            </h4>
          </Grid>
        ))}
      </React.Fragment>
    );
  }

  return (
    <div className="component">
      <h3 id="work" className="quote-rm">
        "I hope you know your limits well, but don't stay within those limits.
        Overcome them each day."
      </h3>
      <h4
        className="speaker"
        onClick={(e) => {
          e.preventDefault();
          window.open("https://www.youtube.com/watch?v=gdZLi9oWNZg");
        }}
        style={{ cursor: "pointer" }}
      >
        -Namjoon Kim
      </h4>
      <h1 className="headers">What I've worked with</h1>
      <div>
        <Grid container spacing={0}>
          <Grid container item spacing={3}>
            <Languages />
          </Grid>
        </Grid>
      </div>
      <h1 className="headers">What I've worked on</h1>
      <div className="horizontal-list">
        {workList.map((lst, key) => (
          <WorkCard
            key={key}
            image={images[key]}
            title={lst.title}
            link={lst.link}
            blurb={lst.blurb}
            // technologies={lst[3]}
          />
        ))}
      </div>
      <div style={{ marginTop: "10px" }}>
        <Box>
          <Button
            variant="outlined"
            className="button"
            style={{
              fontFamily: "Josefin Sans",
              textTransform: "capitalize",
              color: "rgb(217, 124, 80)",
              borderColor: "rgb(217, 124, 80)",
            }}
          >
            <a
              href={require("../mikayla_orange_resume.pdf")}
              target="blank_"
              className="button"
              style={{
                textTransform: "capitalize",
                textDecoration: "none",
                fontFamily: "Josefin Sans",
                color: "rgb(217, 124, 80)",
              }}
            >
              Check out my résumé
            </a>
          </Button>
        </Box>
        <Box pt={5}>
          <Button
            variant="outlined"
            className="button"
            style={{
              fontFamily: "Josefin Sans",
              textTransform: "capitalize",
              color: "rgb(217, 124, 80)",
              borderColor: "rgb(217, 124, 80)",
            }}
            onClick={(e) => {
              e.preventDefault();
              window.open("https://github.com/mikaylaorange");
            }}
          >
            Check out my GitHub
          </Button>
        </Box>
      </div>
    </div>
  );
}
