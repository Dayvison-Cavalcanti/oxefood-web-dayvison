import { Segment } from 'semantic-ui-react';
import './App.css';
import FormCliente from './views/cliente/FormCliente';
import FormProduto from './views/produto/FormProduto';
import FormEntregador from './views/entregador/FormEntregador';
import Rotas from './Rotas';

function App() {

 return (

   <div className="App">
    
    <Rotas />

     <div style={{marginTop: '6%'}}>
       <Segment vertical color='grey' size='tiny' textAlign='center'>
         &copy; 2024 - Projeto WEB IV - IFPE Jaboatão dos Guararapes
       </Segment>
     </div>

   </div>
 );
}

export default App;
