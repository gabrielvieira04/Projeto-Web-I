import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const CardAtleta = ({ atleta, adicionarFavorito }) => {
  const latestTeam = atleta.teams && atleta.teams[0].team;

  return (
    <Card style={{ width: "100%", margin: "10px", maxWidth: "600px" }}>
      <Row noGutters>
        <Col xs={8}>
          <Card.Body>
            <Card.Title>{atleta.name}</Card.Title>
            <Card.Text>Equipe: {latestTeam.name}</Card.Text>
            <Button variant="primary" onClick={() => adicionarFavorito(atleta)}>
              Adicionar aos favoritos
            </Button>
          </Card.Body>
        </Col>
        <Col xs={4} className="d-flex align-items-center justify-content-center">
          <Card.Img
            src={atleta.image}
            alt={atleta.name}
            style={{ width: "100%", height: "auto", borderRadius: "50%" }}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default CardAtleta;
