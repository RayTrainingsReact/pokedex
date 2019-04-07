import React, { Component } from 'react';
import PokemonsSearch from "./components/pokemons-search";
import PokemonInfo from "./components/pokemon-info";
import PokemonGrid from "./components/pokemon-grid";
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
