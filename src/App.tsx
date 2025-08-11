import React from 'react';

function App() {
  const [selecionado, setSelecionado] = React.useState({
    cliente: '',
    idade: 0,
    compras: [{ nome: '', preco: '' }],
    ativa: false,
  });

  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };

  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };
  setTimeout(() => {
    setSelecionado(selecionado.cliente === 'Mario' ? luana : mario);
  }, 10);
  return (
    <>
      <div style={{ display: 'flex', gap: '16px', flexDirection: 'row' }}>
        <button onClick={() => setSelecionado(mario)}>Mario</button>
        <button onClick={() => setSelecionado(luana)}>Luana</button>
      </div>
      <p>Nome: {selecionado.cliente}</p>
      <p>Idade: {selecionado.idade}</p>
      <p style={{ color: selecionado.ativa ? 'green' : 'red' }}>
        Situação: {selecionado.ativa ? 'Ativa' : 'Inativa'}
      </p>
      <p>
        Total gasto: R${' '}
        {selecionado.compras
          .map((el) => Number(el.preco.replace('R$ ', '')))
          .reduce((el, acc) => el + acc, 0)}
      </p>
      <h1
        style={
          selecionado.compras
            .map((el) => Number(el.preco.replace('R$ ', '')))
            .reduce((el, acc) => el + acc, 0) > 10000
            ? { color: 'red', display: 'block' }
            : { display: 'none' }
        }
      >
        TA GASTANDO MUITO
      </h1>
    </>
  );
}

export default App;
