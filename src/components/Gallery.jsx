import React from "react";

import "../styles/style.css";

import Data from "../data/logements.json";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const StyledCardList = Styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
flex-wrap: wrap;
border-radius: 25px;
margin-bottom: 5%;
padding: 4%;
background-color: #F7F7F7;
margin-left: 5%;
margin-right: 5%;
`;

const StyledCardHolder = Styled.div`
height: 340px;
width: 30%;
border-radius: 10px;
color: white;
margin-bottom: 4%;

  @media all and (min-width:769px) and (max-width:992px) {
    width: 46%;
  }

  @media (max-width: 768px) {
    width: 98%;
    margin-bottom: 6%;
`;

const StyledCardTitle = Styled.div`
padding-left: 5%;
margin-bottom: 5%;
width: 55%;
`;

function Gallery() {
  return (
    <StyledCardList>
      {Data.map(logement => (
        <StyledCardHolder key={logement.id}>
          <Link to={"/Fiche/" + logement.id + "/#"}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                height: "340px",
                width: "100%",
                borderRadius: "10px",
                color: "white",
                background: `linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.5) 100%), url(${logement.cover})`,
                backgroundSize: "cover",
                marginBottom: "4%"
              }}
            >
              <StyledCardTitle>{logement.title}</StyledCardTitle>
            </div>
          </Link>
        </StyledCardHolder>
      ))}
    </StyledCardList>
  );
}

export default Gallery;
