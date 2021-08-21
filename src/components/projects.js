import React, { Component } from "react";
import { Card } from "react-mdl";
import { CardTitle } from "react-mdl";
import { CardText } from "react-mdl";
import { CardActions } from "react-mdl";
import { Button } from "react-mdl";
import { CardMenu } from "react-mdl";

class Projects extends Component {
  render() {
    return (
      <div class="cards">
        <div class="card">
          <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background: "url(./Assets/GetMoneySmart.png) center / cover",
              }}
            ></CardTitle>
            <CardText>
              <h1>Get Money Smart</h1>
              This was my second collaborative project. This application is
              Educational online banking application that allows students to
              manage their virtual finances including bank accounts and credit
              cards. Features include ability to open new account, transfer
              money between bank accounts, and make payment on credit card.
              Tooltips and educational modals with descriptive comments are
              added to assist students in learning about finance.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/mlward639/Get_Money_Smart"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colored>GitHub Link</Button>
              </a>
              <a
                href="https://polar-river-76787.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colored>Live Link</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
        </div>
        <div class="card">
          <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background: "url(./Assets/MarketFinder.png) center / cover",
              }}
            ></CardTitle>
            <CardText>
              <h1>Market Finder</h1>
              This was my first project, and is a functional webpage that uses
              server-side APIs to find local farmers markets in your area by
              Zip-Code. This application demonstrates how to setup a basic HTML
              page with CSS and deploy it.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/abaxley2/Market-Finder"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colored>GitHub Link</Button>
              </a>
              <a
                href="https://abaxley2.github.io/Market-Finder/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colored>Live Link</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
        </div>
        <div class="card">
          <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "url(./Assets/WorkOutTracker.png) center / cover",
              }}
            ></CardTitle>
            <CardText>
              <h1>Fitness Tracker</h1>
              This application is a demo of my abilities to use Mongoose object
              modeling to create a functional workout tracker. This application
              starts with a homepage that allows the user to select between
              beginning a workout and adding to an already started one. It then
              feeds the data for the user's workout into a database to track it
              and provide a dashboard where two graphs appear and present
              previous workout information.
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/abaxley2/Workout-Tracker"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colored>GitHub Link</Button>
              </a>
              <a
                href="https://peaceful-dawn-46696.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colored>Live Link</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
        </div>
        <div class="card">
          <Card shadow={0} style={{ width: "512px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: "url(./Assets/Regex.png) center / cover",
              }}
            ></CardTitle>
            <CardText>
              <h1>Regex Tutorial</h1>
              This is a GitHib Gist that demonstrates my understanding of how to
              use Regex in a functional setting. It also demonstrates a fluent
              knowledge of Markdown.
            </CardText>
            <CardActions border>
              <a
                href="https://gist.github.com/abaxley2/a796040212cdac792dc67c286ba42a41"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colored>GitHub Gist</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
        </div>
      </div>
    );
  }
}

export default Projects;
