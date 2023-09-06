import React, { useState } from "react"
import { Container, DivInput, ButtonSearch, DivMain } from "./styles"
import api from './services/api';

export const App = () => {

  const [ input, setInput ] = useState('');
  const [ cep, setCep ] = useState({});

  const handleSearch = async () => {
    if(input === ''){
      alert('Digite o cep!')
      return;
    }

    try{
      const response = await api.get(`${input}/json`)
      setCep(response.data);
      setInput('');

    } catch{
      alert('Erro, cep inválido');
      setInput('');
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
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </DivMain>
        </Container>

        

      </div>

  )
}

export default App
