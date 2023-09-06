import React from "react"
import { Container, DivInput, ButtonSearch } from "./styles"
import { BsSearch } from 'react-icons/bs';

export const App = () => {

  return (
      <div>
        <Container>
          <h1>Buscardor de CEP</h1>

        <DivInput>
          <input type="text" placeholder="Digite seu cep..."/>
        </DivInput>

        <ButtonSearch>Search <BsSearch /></ButtonSearch>
        </Container>
      </div>

  )
}

export default App
