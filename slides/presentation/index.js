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
            How to name database rows which represent human beings?
          </Text>
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
