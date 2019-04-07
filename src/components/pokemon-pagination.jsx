import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

function renderPaginationNumbers({ actualPage, lastPage, getPokemonList }) {
    const listPagination = [];
    let prevPage = 0;
    let postPage = actualPage + 1;

    if (actualPage > 0) {
      prevPage = actualPage - 1;
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

    for (
      let i = actualPage + 1;
      i < actualPage + 6 && i <= lastPage;
      i++
    ) {
      listPagination.push(
        <PaginationItem key={"pagination-" + i}>
          <PaginationLink onClick={() => getPokemonList(i - 1)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (postPage > lastPage) {
      postPage = lastPage;
    }

    listPagination.push(
      <PaginationItem key="pagination-next">
        <PaginationLink next onClick={() => getPokemonList(postPage)} />
      </PaginationItem>
    );
    listPagination.push(
      <PaginationItem key="pagination-last">
        <PaginationLink
          last
          onClick={() => getPokemonList(lastPage)}
        />
      </PaginationItem>
    );

    return listPagination;
  }

export default function PaginationPokemon(props) {
  const paginationToShow = props.shouldShowPagination ? (
      <Pagination>{renderPaginationNumbers(props)}</Pagination>
    ) : null;
    return paginationToShow;
}
