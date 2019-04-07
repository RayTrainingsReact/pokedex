import React, {Component} from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import {connect} from "react-redux";
import cleanPokemonList from './../redux/actions/clean-pokemon-list';
import getPokemonList from './../redux/actions/get-pokemon-list';
import selectPokemon from './../redux/actions/select-pokemon';

class PaginationPokemon extends Component {
  renderPaginationNumbers() {
    const {getPokemonList} = this.props;
    
    let listPagination = [];
    let prevPage = 0;
    let postPage = this.props.actualPage + 1;
    
    if(this.props.actualPage > 0){
      prevPage = this.props.actualPage - 1;
    }

    listPagination.push(
      <PaginationItem key="pagination-first">
        <PaginationLink first onClick={() => getPokemonList()} />
      </PaginationItem> 
    );
    
    listPagination.push(
      <PaginationItem key="pagination-previous">
        <PaginationLink previous onClick={() => getPokemonList(prevPage)} />
      </PaginationItem> 
    );
            
    for(let i = this.props.actualPage + 1; i < this.props.actualPage + 6 && i <= this.props.lastPage; i++){
      listPagination.push(
        <PaginationItem key={"pagination-" + i }>
          <PaginationLink onClick={() => getPokemonList(i - 1)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );  
    }

    if(postPage > this.props.lastPage){
      postPage = this.props.lastPage
    }    
    
    listPagination.push(
      <PaginationItem key="pagination-next">
        <PaginationLink next onClick={() => getPokemonList(postPage)} />
      </PaginationItem> 
    );
    listPagination.push(
      <PaginationItem key="pagination-last">
        <PaginationLink last onClick={() => getPokemonList(this.props.lastPage)} />
      </PaginationItem> 
    );

    return listPagination;
  }

  render() {
    const paginationToShow = (this.props.shouldShowPagination) 
      ? <Pagination>{this.renderPaginationNumbers()}</Pagination>
      : null; 
    return paginationToShow;
  }
}

function mapStateToProps(state) {
  return {...state.pagination};
}

function mapDispatchToProps(dispatch) {
  return {
    getPokemonList: (offset = 0) => {
      dispatch(selectPokemon(-1));
      dispatch(cleanPokemonList());
      dispatch(getPokemonList(offset));
    } 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationPokemon);