import React, { Component } from "react";
import { Card } from "react-mdl";
import { CardTitle } from "react-mdl";
import { CardText } from "react-mdl";
import { CardActions } from "react-mdl";
import { Button } from "react-mdl";
import { CardMenu } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div class="pic">
        <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "600px",
              background: "url(./Assets/Austin.png) center / cover",
            }}
          ></CardTitle>
          <CardText>
            Web Developer and recent graduate from the Full-Stack Coding
            Bootcamp at the Georgia Institute of Technology.
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}></CardMenu>
        </Card>
      </div>
    );
  }
}

export default About;
