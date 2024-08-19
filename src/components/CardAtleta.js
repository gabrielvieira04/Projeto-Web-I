import React from "react";
import { Card, Button } from "react-bootstrap";

const CardAtleta = ({ atleta, adicionarFavorito }) => {
  const latestTeam = atleta.teams && atleta.teams[0].team;

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={atleta.image} />
      <Card.Body>
        <Card.Title>{atleta.name}</Card.Title>
        <Card.Text>Equipe: {latestTeam.name}</Card.Text>

        <Button variant="primary" onClick={() => adicionarFavorito(atleta)}>
          Adicionar aos favoritos
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardAtleta;
