import React from "react";
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

function renderInfo(props) {
  return (
    <Container>
      <Card>
        <CardTitle className="text-center">
          <h1>
            #{props.info.order} -{" "}
            <span className="capitalize">{props.info.name}</span>
          </h1>
        </CardTitle>
        <CardBody>
          <Row>
            <Col>
              <img
                src={props.info.frontDefault}
                alt={props.info.name + " image"}
              />
            </Col>
            <Col>
              {props.fightInfo.map(particularInfo => {
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
        <CardTitle>
          <h2>Profile</h2>
        </CardTitle>
        <CardBody>
          <Row>
            <Col>
              <b>Height:</b> {props.info.height}
            </Col>
            <Col>
              <b>Weight:</b> {props.info.weight}
            </Col>
          </Row>
          <Row>
            <Col>
              <b>Catch Rate:</b> {props.pokemonSpecies.catchRate}
            </Col>
            <Col>
              <b>Gender Ratio:</b> {props.pokemonSpecies.genderRatio}
            </Col>
          </Row>
          <Row>
            <Col>
              <b>Egg Groups:</b> {props.pokemonSpecies.eggGroups}
            </Col>
            <Col>
              <b>Hatch Steps:</b> {props.pokemonSpecies.hatchSteps}
            </Col>
          </Row>
          <Row>
            <Col>
              <b>Abilities:</b> {props.info.abilities}
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

function renderEmptyState(props) {
  return (
    <Container className="text-center">
      <h1>Empty State</h1>
      <img src={pokeball} alt="Empty State Pokeball" />
    </Container>
  );
}

export default function PokemonInfo(props) {
  const pokemonInfo =
    props.pokemonSelected >= 0 ? renderInfo(props) : renderEmptyState();
  return pokemonInfo;
}
