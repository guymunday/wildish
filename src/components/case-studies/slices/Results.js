import * as React from "react";
import styled from "styled-components";

const ResultsStyles = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: flex-end;
  text-align: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    .results-thumb {
      margin: 20px 0;
    }
  }
  .results-thumb {
    flex: 1;
    max-width: 250px;
    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    h3 {
      font-size: 3rem;
      margin-top: 10px;
    }
  }
`;

export default function Results({ results }) {
  return (
    <>
      <div style={{ textAlign: "center", padding: "100px 30px" }}>
        <h2>Results</h2>
        <ResultsStyles>
          {results?.results?.map((r, i) => {
            return (
              <div key={i} className="results-thumb">
                <img src={r?.image?.localFile?.publicURL} alt="" />
                <h3>{r?.number}</h3>
                <p>{r?.text}</p>
              </div>
            );
          })}
        </ResultsStyles>
      </div>
    </>
  );
}
