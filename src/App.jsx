import React from "react"
import { Container, DivInput, ButtonSearch, DivMain } from "./styles"

export const App = () => {

  return (
      <div>
        <Container>
          <h1>Buscardor de CEP</h1>

        <DivInput>
          <input type="text" placeholder="Digite seu cep..."/>
        </DivInput>

        <ButtonSearch>Search</ButtonSearch>
        <DivMain>
          <h2>CEP: 18044000</h2>
          <span>Rua Teste</span>
          <span>Complemento: Algum complemento</span>
          <span>Vila Rosa</span>
          <span>Sorocaba - SP</span>
        </DivMain>
        </Container>

        

      </div>

  )
}

export default App
