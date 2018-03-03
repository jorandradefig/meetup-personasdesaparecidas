// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Link
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#00719e",
  tertiary: "#fee934",
  quarternary: "#343a40"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Personas Desaparecidas
          </Heading>
          <Link
            href="https://personasdesaparecidas.org.mx"
            target="_blank"
            margin="10px 0 0"
            textColor="tertiary"
            textSize="40px"
            bold
          >
            https://personasdesaparecidas.org.mx
          </Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} lineHeight={1} textColor="tertiary">
            Stack
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://angular.io/"
                target="_blank"
                textColor="primary"
                textSize="50px"
                bold
              >
                Angular
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://expressjs.com/"
                target="_blank"
                textColor="primary"
                textSize="50px"
                bold
              >
                Express
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.mongodb.com/"
                target="_blank"
                textColor="primary"
                textSize="50px"
                bold
              >
                MongoDB
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.postgresql.org/"
                target="_blank"
                textColor="primary"
                textSize="50px"
                bold
              >
                PostgreSQL
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.python.org/"
                target="_blank"
                textColor="primary"
                textSize="50px"
                bold
              >
                Python
              </Link>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} lineHeight={1} textColor="tertiary">
            Problem
          </Heading>
          <Text margin="10px 0 0" textColor="primary" textSize="40px" size={1} bold>
            How to name RNPED database rows which represent human beings?
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} lineHeight={1} textColor="tertiary">
            Steps
          </Heading>
          <List>
            <ListItem textSize="28px">
              Scrape registree records from IMSS and SEDESOL databases
            </ListItem>
            <ListItem textSize="28px">
              Build unique names dictionary
            </ListItem>
            <ListItem textSize="28px">
              Fetch RNPED against names dictionary
            </ListItem>
            <ListItem textSize="28px">
              Process fetched registree records names dictionary
            </ListItem>
            <ListItem textSize="28px">
              Build names for RNPED registree records
            </ListItem>
            <ListItem textSize="28px">
              Save named registree records to database
            </ListItem>
            <ListItem textSize="28px">
              Build Web API
            </ListItem>
            <ListItem textSize="28px">
              Build Web App
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} lineHeight={1} textColor="tertiary">
            Web App
          </Heading>
          <List>
            <ListItem textSize="30px">
              CLI
            </ListItem>
            <ListItem textSize="30px">
              Router
            </ListItem>
            <ListItem textSize="30px">
              HTTP Client
            </ListItem>
            <ListItem textSize="30px">
              Observables
            </ListItem>
            <ListItem textSize="30px">
              Components
            </ListItem>
            <ListItem textSize="30px">
              Services
            </ListItem>
            <ListItem textSize="30px">
              Pipes
            </ListItem>
            <ListItem textSize="30px">
              Manifest
            </ListItem>
            <ListItem textSize="30px">
              Service Worker
            </ListItem>
            <ListItem textSize="30px">
              Bootstrap
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} lineHeight={1} textColor="tertiary" textSize="70px">
            Important Lessons
          </Heading>
          <List>
            <ListItem textSize="20px">
              Don't trust third-party libraries too much, use the official solutions whenever possible
            </ListItem>
            <ListItem textSize="20px">
              Take advantage of the App lifecycle to release memory
            </ListItem>
            <ListItem textSize="20px">
              Observables are not for everything, combine them with Promises
            </ListItem>
            <ListItem textSize="20px">
              Master the call-site concept for `this` usage through component Classes
            </ListItem>
            <ListItem textSize="20px">
              Service Workers save a lot of resources
            </ListItem>
            <ListItem textSize="20px">
              ID Tracking, loop performace, services, lyfecyle, etc. matter a lot when handling too much data in the DOM
            </ListItem>
            <ListItem textSize="20px">
              Reuse as much as possible since the beginning
            </ListItem>
            <ListItem textSize="20px">
              Tests help but bugs are inevitable
            </ListItem>
            <ListItem textSize="20px">
              Save one global state with services and manipulate data through them
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} lineHeight={1} textColor="tertiary" fit>
            Thanks
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Link
            href="http://jorandradefig.com/"
            target="_blank"
            textColor="tertiary"
            textSize="70px"
            bold
          >
            @jorandradefig
          </Link>
        </Slide>
      </Deck>
    );
  }
}
