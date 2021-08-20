import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout
          style={{
            background: "src=(./Assets/atl_night.jpg) center / cover",
          }}
        >
          <Header title="Austin Baxley" scroll>
            <Navigation>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/resume">Resume</Link>
            </Navigation>
          </Header>
          <Drawer title="Austin Baxley">
            <Navigation>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/resume">Resume</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
