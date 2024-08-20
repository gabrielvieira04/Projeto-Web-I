import React from "react";
import { Card, Row } from "react-bootstrap";

const PainelFavoritos = ({ favoritos }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Pilotos Favoritados</h2>
      <Row>
        {favoritos.map((atleta, index) => (
          <Card key={index} style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={atleta.photo} />
            <Card.Body>
              <Card.Title>{atleta.name}</Card.Title>
              <Card.Title>{atleta.age}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
  );
};

export default PainelFavoritos;
