import React, { useState } from "react"
import { Container, DivInput, ButtonSearch, DivMain } from "./styles"
import api from './services/api';

export const App = () => {

  const [ input, setInput ] = useState('')

  const handleSearch = async () => {
    if(input === ''){
      alert('Digite o cep')
      return;
    }

    try{
      const response = await api.get(`${input}/json`)
      console.log(response)
    } catch{
      alert('Erro, cep inválido')
      setInput('')
    }
  }

  return (
      <div>
        <Container>
          <h1>Buscardor de CEP</h1>

        <DivInput>
          <input 
          type="text" 
          placeholder="Digite seu cep..." 
          value={input}
          onChange={ (event) => setInput(event.target.value)}
          />
        </DivInput>

        <ButtonSearch onClick={handleSearch} >Search</ButtonSearch>
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
