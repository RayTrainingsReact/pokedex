import React, { Component } from "react";
import { connect } from "react-redux";
import {Field, reduxForm} from "redux-form";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Container,
  InputGroupAddon
} from "reactstrap";
import getPokemon from './../redux/actions/get-pokemon';
import selectPokemon from './../redux/actions/select-pokemon';

class PokemonsSearch extends Component {
  inputField(inputProps) {
    return (
      <Input
        {...inputProps.input} />
    );
  }

  submitPerformed = (inputFields) => {
    let {pokemonSearch} = inputFields;
    pokemonSearch = pokemonSearch ? pokemonSearch: "";
    this.props.getPokemon(pokemonSearch);
    this.props.deselectPokemon();
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <Container>
          <Form
            onSubmit={handleSubmit(this.submitPerformed)}
          >
            <FormGroup>
              <InputGroup>
                <Field 
                  component={this.inputField} 
                  name="pokemonSearch" />
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

PokemonsSearch = reduxForm({
  form: "pokemon-search"
})(PokemonsSearch);

function mapDispatchToProps(dispatch) {
  return {
    getPokemon: (pokemonToFind) => dispatch(getPokemon(pokemonToFind)),
    deselectPokemon: () => dispatch(selectPokemon(-1)) 
  };
}

export default connect(null, mapDispatchToProps)(PokemonsSearch);
