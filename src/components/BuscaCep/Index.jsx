import { useState, useEffect } from "react"

export 
const BuscaCep = ({ cep, handleEnderecoCep }) => {
  const buscarEndereco = (e) => {
    e.preventDefault()
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        const endereco = {
          logradouro: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
          estado: data.uf,
        };
        handleEnderecoCep(endereco);
      })
      .catch((error) => {
        console.error('Erro ao buscar o endereço:', error);
      });
  };

  return (
    <div style={{backgroundColor:'white', display:'inline-block'}}>
      <button className="baseBtn cadastrar" onClick={buscarEndereco}>Buscar Endereço</button>
    </div>
  );
};