import React, { useState } from "react";
import axios from "axios";
import CardAtleta from "./componentes/CardAtleta";
import PainelFavoritos from "./componentes/PainelFavoritos";
import { Container, Form, Button, Row } from "react-bootstrap";

function App() {
  const [atletas, setAtletas] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const buscarAtletas = async () => {
    try {
      const response = await axios.get(
        "https://v1.formula-1.api-sports.io/drivers",
        {
          headers: {
            "x-apisports-key": "ce5d352d10d3f1eea47de248b153832c",
          },
          params: {
            name: searchQuery,
          },
        }
      );
      setAtletas(response.data.response);
    } catch (error) {
      console.error("Erro ao buscar atletas:", error);
    }
  };

  const adicionarFavorito = (atleta) => {
    setFavoritos([...favoritos, atleta]);
  };

  return (
    <Container>
      <h1 className="my-4">Pesquisa de Atletas</h1>
      <Form>
        <Form.Group controlId="formSearch">
          <Form.Control
            type="text"
            placeholder="Digite o nome do atleta"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={buscarAtletas}>
          Buscar
        </Button>
      </Form>
      <Row>
        {atletas.map((atleta, index) => (
          <CardAtleta
            key={index}
            atleta={atleta}
            adicionarFavorito={adicionarFavorito}
          />
        ))}
      </Row>
      <PainelFavoritos favoritos={favoritos} />
    </Container>
  );
}

export default App;
