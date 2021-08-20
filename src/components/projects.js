import React, { Component } from "react";
import { Card } from "react-mdl";
import { CardTitle } from "react-mdl";
import { CardText } from "react-mdl";
import { CardActions } from "react-mdl";
import { Button } from "react-mdl";
import { CardMenu } from "react-mdl";
import { IconButton } from "react-mdl";

class Projects extends Component {
  render() {
    return (
      <div>
        <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover",
            }}
          >
            Welcome
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border>
            <Button colored>Get Started</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
    );
  }
}

export default Projects;
