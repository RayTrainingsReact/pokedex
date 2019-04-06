import React, { Component } from "react";
import axios from "axios";
import { Card, CardBody, CardTitle, Row, Col, Container, Progress } from "reactstrap";

class PokemonInfo extends Component {
  state = {};
  componentDidMount() {
    const BASE_URL = "https://pokeapi.co/api/v2";
    axios
      .get(`${BASE_URL}/pokemon/bulbasaur`)
      .then(response => {
        this.setState({
          height: response.data.height / 10 + "m",
          weight: response.data.weight / 10 + "kg",
          abilities: response.data.abilities.map(
            ability => ability.ability.name
          ),
          frontDefault: response.data.sprites.front_default,
          name: response.data.name,
          order: response.data.order
        });
      })
      .catch(error => console.log(error));
    axios
      .get(`${BASE_URL}/pokemon-species/bulbasaur/`)
      .then(response => {
        let genderRatio;
        if (response.data.gender_rate >= 0) {
          const female = (response.data.gender_rate / 8) * 100;
          const male = 100 - female;
          genderRatio = "F " + female + " M " + male;
        } else {
          genderRatio = "genderless";
        }
        this.setState({
          eggGroups: response.data.egg_groups.map(egg_group => egg_group.name),
          hatchSteps: (response.data["hatch_counter"] + 1) * 255,
          genderRatio
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container>
        <Card>
          <CardTitle className="text-center">#{this.state.order} - {this.state.name} </CardTitle>
          <CardBody>
            <Row>
              <Col>
                <img 
                src={this.state.frontDefault}  
              />
              </Col>
              <Col>
                HP <Progress striped color="success" value="50">50%</Progress>
                Attack <Progress striped color="success" value="27">27%</Progress>
                Defense <Progress striped color="success" value="47">47%</Progress>
                Speed <Progress striped color="success" value="87">87%</Progress>
                Sp Atk <Progress striped color="success" value="32">32%</Progress>
                Sp Def <Progress striped color="success" value="60">60%</Progress>
              </Col>
            </Row>
          </CardBody>
        </Card>

        <Card>
        <CardBody>
          <Row>
            <Col><b>Height:</b> {this.state.height}</Col>
            <Col><b>Weight:</b> {this.state.weight}</Col>
          </Row>
          <Row>
            <Col><b>Catch Rate:</b> 0%</Col>
            <Col><b>Gender Ratio:</b> {this.state.genderRatio}</Col>
          </Row>
          <Row>
            <Col><b>Egg Groups:</b> {this.state.eggGroups}</Col>
            <Col><b>Hatch Steps:</b> {this.state.hatchSteps}</Col>
          </Row>
          <Row>
            <Col><b>Abilities:</b> {this.state.abilities}</Col>
            <Col><b>EVs:</b> 1 Sp Att</Col>
          </Row>
        </CardBody>
      </Card>
      </Container>
      
    );
  }
}

export default PokemonInfo;
