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
      </Deck>
    );
  }
}
