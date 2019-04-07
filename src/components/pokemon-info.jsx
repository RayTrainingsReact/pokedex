import React, { Component } from "react";
import pokeball from "./../pokeball.png";
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Container,
  Progress
} from "reactstrap";

class PokemonInfo extends Component {
  renderInfo() {
    return (
      <Container>
        <Card>
          <CardTitle className="text-center">
            #{this.props.info.order} - {this.props.info.name}{" "}
          </CardTitle>
          <CardBody>
            <Row>
              <Col>
                <img
                  src={this.props.info.frontDefault}
                  alt={this.props.info.name + " image"}
                />
              </Col>
              <Col>
                {this.props.fightInfo.map(particularInfo => {
                  return (
                    <Row key={particularInfo.label}>
                      <Col>{particularInfo.label}</Col>
                      <Col>
                        <Progress
                          striped
                          color="success"
                          value={particularInfo.value}
                        >
                          {particularInfo.value}%
                        </Progress>
                      </Col>
                    </Row>
                  );
                })}
              </Col>
            </Row>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <Row>
              <Col>
                <b>Height:</b> {this.props.info.height}
              </Col>
              <Col>
                <b>Weight:</b> {this.props.info.weight}
              </Col>
            </Row>
            <Row>
              <Col>
                <b>Catch Rate:</b> {this.props.pokemonSpecies.catchRate}
              </Col>
              <Col>
                <b>Gender Ratio:</b> {this.props.pokemonSpecies.genderRatio}
              </Col>
            </Row>
            <Row>
              <Col>
                <b>Egg Groups:</b> {this.props.pokemonSpecies.eggGroups}
              </Col>
              <Col>
                <b>Hatch Steps:</b> {this.props.pokemonSpecies.hatchSteps}
              </Col>
            </Row>
            <Row>
              <Col>
                <b>Abilities:</b> {this.props.info.abilities}
              </Col>
              <Col>
                <b>EVs:</b> 1 Sp Att
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    );
  }

  renderEmptyState() {
    return (
      <Container className="text-center">
        <h1>Empty State</h1>
        <img src={pokeball} alt="Empty State Pokeball" />
      </Container>
    );
  }

  render() {
    const pokemonInfo =
      this.props.pokemonSelected >= 0
        ? this.renderInfo()
        : this.renderEmptyState();
    return pokemonInfo;
  }
}

export default PokemonInfo;
