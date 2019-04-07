import React, { Component } from "react";
import axios from "axios";
import {connect} from "react-redux";
import pokeball from "./../pokeball.png";
import { Card, CardBody, CardTitle, Row, Col, Container, Progress } from "reactstrap";

class PokemonInfo extends Component {
  renderInfo() {
    return (
      <Container>
        <Card>
          <CardTitle className="text-center">#{this.props.info.order} - {this.props.info.name} </CardTitle>
          <CardBody>
            <Row>
              <Col>
                <img 
                src={this.props.info.frontDefault}  
              />
              </Col>
              <Col>
                HP <Progress striped color="success" value={this.props.info.hp}>{this.props.info.hp}%</Progress>
                Attack <Progress striped color="success" value={this.props.info.attack}>{this.props.info.attack}%</Progress>
                Defense <Progress striped color="success" value={this.props.info.deffense}>{this.props.info.deffense}%</Progress>
                Speed <Progress striped color="success" value={this.props.info.speed}>{this.props.info.speed}%</Progress>
                Sp Atk <Progress striped color="success" value={this.props.info.spAttack}>{this.props.info.spAttack}%</Progress>
                Sp Def <Progress striped color="success" value={this.props.info.spDef}>{this.props.info.spDef}%</Progress>
              </Col>
            </Row>
          </CardBody>
        </Card>

        <Card>
        <CardBody>
          <Row>  
            <Col><b>Height:</b> {this.props.info.height}</Col>
            <Col><b>Weight:</b> {this.props.info.weight}</Col>
          </Row>
          <Row>
            <Col><b>Catch Rate:</b> 0%</Col>
            <Col><b>Gender Ratio:</b> {this.props.pokemonSpecies.genderRatio}</Col>
          </Row>
          <Row>
            <Col><b>Egg Groups:</b> {this.props.pokemonSpecies.eggGroups}</Col>
            <Col><b>Hatch Steps:</b> {this.props.pokemonSpecies.hatchSteps}</Col>
          </Row>
          <Row>
            <Col><b>Abilities:</b> {this.props.info.abilities}</Col>
            <Col><b>EVs:</b> 1 Sp Att</Col>
          </Row>
        </CardBody>
      </Card>
      </Container>
    );
  }

  renderEmptyState() {
    return(
        <Container className="text-center">
            <h1>Empty State</h1>
            <img src={pokeball} />
        </Container>
    );
  }

  render() {
    const pokemonInfo = (this.props.pokemonSelected >= 0) 
                      ? this.renderInfo() 
                      : this.renderEmptyState();  
    return pokemonInfo;
  }
    
}

function mapStateToProps(state){
  const newProps = {
    pokemonSelected: state.pokemonSelected,
    pokemonSpecies: {
      eggGroups: "",
      hatchSteps: "",
      genderRatio: ""
    }
  };

  if(state.pokemonSelected >= 0){
    let pokemonSelected = state.pokemonsReducer.pokemons[state.pokemonSelected];
    newProps.info = {
      height: pokemonSelected.height / 10 + "m",
      weight: pokemonSelected.weight / 10 + "kg",
      abilities: pokemonSelected.abilities.map(
        ability => ability.ability.name
      ),
      frontDefault: pokemonSelected.sprites.front_default,
      name: pokemonSelected.name,
      order: pokemonSelected.order,
      hp: 50,
      attack: 27,
      deffense: 47,
      speed: 87,
      spAttack: 32,
      spDef: 60 
    };
  }
  if(state.pokemonSpecies.gender_rate) {
    let genderRatio;
    if (state.pokemonSpecies.gender_rate >= 0) {
      const female = (state.pokemonSpecies.gender_rate / 8) * 100;
      const male = 100 - female;
      genderRatio = "F " + female + " M " + male;
    } else {
      genderRatio = "genderless";
    }
    newProps.pokemonSpecies = {
      eggGroups: state.pokemonSpecies.egg_groups.map(egg_group => egg_group.name),
      hatchSteps: (state.pokemonSpecies.hatch_counter + 1) * 255,
      genderRatio
    };
  }
  return newProps;
}

export default connect(mapStateToProps)(PokemonInfo);
