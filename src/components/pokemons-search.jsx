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

class PokemonsSearch extends Component {
  inputField(inputProps) {
    return <Input {...inputProps.input} />;
  }

  submitPerformed = inputFields => {
    let { pokemonSearch } = inputFields;
    if (pokemonSearch) {
      this.props.getPokemon(pokemonSearch.toLowerCase());
    } else {
      this.props.getPokemonList();
    }
    this.props.deselectPokemon();
  };

  showNotFoundMessage() {
    if (this.props.isPokemonNotFound) {
      return (
        <Alert color="danger">
          Pokemon not found! Perhaps there is a server error or perhaps there is
          a typo somewhere in the name.
        </Alert>
      );
    }
    return null;
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Container>
        <Form onSubmit={handleSubmit(this.submitPerformed)}>
          <FormGroup>
            <InputGroup>
              {this.showNotFoundMessage()}
              <Field component={this.inputField} name="pokemonSearch" />
              <InputGroupAddon addonType="append">
                <Button>Search</Button>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

export default PokemonsSearch;
