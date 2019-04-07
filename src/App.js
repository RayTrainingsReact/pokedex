import React, { Component } from 'react';
import PokemonsSearch from "./containers/pokemons-search-container";
import PokemonInfo from "./containers/pokemon-info-container";
import PokemonGrid from "./containers/pokemon-grid-container";
import { Row, Col, Container } from "reactstrap";
import PokemonLogo from "./logo-pokemon.png";

class App extends Component {
  render() {
    return (
      <Container>
        <img
            className="rounded mx-auto d-block"
            alt="Pokemon Logo"
            src={PokemonLogo} />
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
