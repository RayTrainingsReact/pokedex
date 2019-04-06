import React, { Component } from 'react';
import PokemonsSearch from "./components/pokemons-search";
import PokemonInfo from "./components/pokemon-info";
import PokemonGrid from "./components/pokemon-grid";
import { Row, Col, Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Container>
        <img
            className="rounded mx-auto d-block"
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" />
        <Row>
          <Col>
            <PokemonInfo />
          </Col>
          <Col>
            <Row>
              <Col>
                <PokemonsSearch />
              </Col>
            </Row>
            <Row>
              <Col>
                <PokemonGrid />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
