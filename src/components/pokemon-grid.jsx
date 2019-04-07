import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";

import { zeroPad } from "./../utils/pokemon-info-utils";
import PokemonPagination from "./../containers/pokemon-pagination-container";

class PokemonGrid extends Component {
  componentDidMount() {
    this.props.getPokemonList();
  }

  renderPokemons() {
    return this.props.pokemons.map((pokemon, arrayIndex) => {
      return (
        <Col
          key={pokemon.order}
          onClick={() => {
            this.props.selectPokemon(pokemon, arrayIndex);
          }}
        >
          <Container>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{zeroPad(pokemon.order)}</p>
            <p>{pokemon.name}</p>
          </Container>
        </Col>
      );
    });
  }

  render() {
    return (
      <Container className="text-center">
        <Row>{this.renderPokemons()}</Row>
        <Row>
          <Col>
            <PokemonPagination />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PokemonGrid;
