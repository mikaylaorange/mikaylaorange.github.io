import React from "react";
import {
  Card,
  CardContent,
  Button,
  CardMedia,
  Typography,
} from "@material-ui/core";
import "./work-card.css";

class WorkCard extends React.Component {
  render() {
    let button;
    if (this.props.link !== undefined) {
      button = (
        <Button
          style={{ textTransform: "capitalize" }}
          className="button"
          onClick={(e) => {
            e.preventDefault();
            window.open(this.props.link, "_blank");
          }}
        >
          Take a look
        </Button>
      );
    }
    return (
      <Card className="work-card" style={{ backgroundColor: "#FAFAF6" }}>
        <CardMedia
          component="img"
          alt={this.props.title}
          image={this.props.image}
          height="200"
          title={this.props.title}
        />
        <CardContent>
          <Typography
            style={{ color: "rgb(22, 44, 58)" }}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {this.props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.props.blurb}
          </Typography>
          {/* {this.props.technologies.map((lst, key) => (
            <Typography style={{display: "inline-block", marginLeft: "5px"}}>
              {lst + "      "}
            </Typography>
      ))} */}
          <div>{button}</div>
        </CardContent>
      </Card>
    );
  }
}

export default WorkCard;
