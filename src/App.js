import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import { Footer } from "react-mdl";
import { FooterSection } from "react-mdl";
import { FooterLinkList } from "react-mdl";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout
          style={{
            background: "url(./Assets/atl_night.webp) center / cover",
          }}
        >
          <Header title="Austin C. Baxley" scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
            </Navigation>
          </Header>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
          <Footer size="mini">
            <FooterSection type="left">
              <FooterLinkList>
                <a
                  href="https://github.com/abaxley2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/abaxley2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto: ausbaxley@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email
                </a>
              </FooterLinkList>
            </FooterSection>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
