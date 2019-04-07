import React, { Component } from "react";
import { Field } from "redux-form";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Container,
  InputGroupAddon,
  Alert
} from "reactstrap";

function inputField(inputProps) {
  return <Input {...inputProps.input} />;
}

function submitPerformed(inputFields, props) {
  let { pokemonSearch } = inputFields;
  if (pokemonSearch) {
    props.getPokemon(pokemonSearch.toLowerCase());
  } else {
    props.getPokemonList();
  }
  props.deselectPokemon();
}

function showNotFoundMessage(props) {
  if (props.isPokemonNotFound) {
    return (
      <Alert color="danger">
        Pokemon not found! Perhaps there is a server error or perhaps there is a
        typo somewhere in the name.
      </Alert>
    );
  }
  return null;
}

export default function PokemonsSearch(props) {
  const { handleSubmit } = props;
  return (
    <Container>
      <Form
        onSubmit={handleSubmit(inputFields =>
          submitPerformed(inputFields, props)
        )}
      >
        <FormGroup>
          <InputGroup>
            {showNotFoundMessage(props)}
            <Field component={inputField} name="pokemonSearch" />
            <InputGroupAddon addonType="append">
              <Button>Search</Button>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </Form>
    </Container>
  );
}