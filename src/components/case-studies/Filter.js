import * as React from "react";
import styled from "styled-components";

const FilterStyles = styled.div`
  color: var(--white);
  padding: 50px 30px 30px 30px;
  .filter-button {
    margin: 0 5px;
    background: none;
    outline: none;
    border: none;
    font-size: inherit;
  }
`;

export default function Filter({ tags, tagFilter, handleClick }) {
  return (
    <>
      <FilterStyles>
        Show:
        <button
          className="filter-button"
          onClick={() => handleClick("all")}
          style={{ color: tagFilter === "all" ? "white" : "gray" }}
        >
          All
        </button>
        {tags?.map((t, i) => {
          if (t?.node?.case_studies?.nodes.length > 0) {
            return (
              <button
                className="filter-button"
                key={i}
                onClick={() => handleClick(t?.node?.name)}
                style={{
                  color: tagFilter === t?.node?.name ? "white" : "gray",
                }}
              >
                {t?.node?.name.charAt(0).toUpperCase() + t?.node?.name.slice(1)}
              </button>
            );
          }
        })}
      </FilterStyles>
    </>
  );
}
