import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table, Modal, Header } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';


export default function ListEntregador() {

    const [lista, setLista] = useState([]);
    const [openModal, setOpenModal] = useState(false);
   const [idRemover, setIdRemover] = useState();


    useEffect(() => {
        carregarLista();
    }, [])

    function carregarLista() {

        axios.get("http://localhost:8081/api/entregador")
            .then((response) => {
                setLista(response.data)
            })
    }
    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }

        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    }

    function confirmaRemover(id) {
        setOpenModal(true)
        setIdRemover(id)
    }
 
    async function remover() {

        await axios.delete('http://localhost:8081/api/entregador/' + idRemover)
        .then((response) => {
  
            console.log('Entregador removido com sucesso.')
  
            axios.get("http://localhost:8081/api/entregador")
            .then((response) => {
                setLista(response.data)
            })
        })
        .catch((error) => {
            console.log('Erro ao remover um Entregador.')
        })
        setOpenModal(false)
    }
 
    return (
        <div >
            <MenuSistema tela={'entregador'} />
            <div style={{ marginTop: '3%'}} textAlign='justified'  >

                <Container style={{ width: '90%', maxWidth: '90%' }} textAlign='justified'  >

                    <h2> Entregador </h2>
                    <Divider />

                    <div style={{ marginTop: '4%' }}>
                        <Button
                            label='Novo'
                            circular
                            color='orange'
                            icon='clipboard outline'
                            floated='right'
                            as={Link}
                            to='/form-entregador'
                           
                        />
                        <br /><br /><br />

                        <div style={{ overflow: 'auto', maxWidth: '100%'  }}>

                        <Table   color='orange' sortable celled >

                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell textAlign='center'>Nome</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>CPF</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>RG</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Data de Nascimento</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Fone Celular</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Fone Fixo</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Entregas Realizadas</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Valor Frete</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Rua</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Numero</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Bairro</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Cidade</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Cep</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Uf</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Complemento</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>ativo</Table.HeaderCell>
                                    <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body >

                                {lista.map(entregador => (

                                    <Table.Row key={entregador.id}>
                                        <Table.Cell style={{ whiteSpace: 'nowra' }}>{entregador.nome}</Table.Cell>
                                        <Table.Cell style={{ whiteSpace: 'nowra' }}>{entregador.cpf}</Table.Cell>
                                        <Table.Cell style={{ whiteSpace: 'nowra' }}>{entregador.rg}</Table.Cell>
                                        <Table.Cell style={{ whiteSpace: 'nowra' }}>{formatarData(entregador.dataNascimento)}</Table.Cell>
                                        <Table.Cell style={{ whiteSpace: 'nowra' }}>{entregador.foneCelular}</Table.Cell>
                                        <Table.Cell style={{ whiteSpace: 'nowra' }}>{entregador.foneFixo}</Table.Cell>
                                        <Table.Cell style={{ whiteSpace: 'nowra' }}>{entregador.qtdEntregasRealizadas}</Table.Cell>
                                        <Table.Cell style={{ whiteSpace: 'nowra' }}>{entregador.valorFrete}</Table.Cell>
                                        <Table.Cell style={{ whiteSpace: 'nowra' }}>{entregador.enderecoRua}</Table.Cell>
                                        <Table.Cell style={{ whiteSpace: 'nowra' }}>{entregador.enderecoNumero}</Table.Cell>
                                        <Table.Cell style={{ whiteSpace: 'nowra' }}>{entregador.enderecoBairro}</Table.Cell>
                                        <Table.Cell style={{ whiteSpace: 'nowra' }}>{entregador.enderecoCidade}</Table.Cell>
                                        <Table.Cell style={{ whiteSpace: 'nowra' }}>{entregador.enderecoCep}</Table.Cell>
                                        <Table.Cell style={{ whiteSpace: 'nowra' }}>{entregador.enderecoUf}</Table.Cell>
                                        <Table.Cell style={{ whiteSpace: 'nowra' }}>{entregador.enderecoComplemento}</Table.Cell>
                                        <Table.Cell style={{ whiteSpace: 'nowra' }}>{entregador.ativo}</Table.Cell>
                                        <Table.Cell textAlign='center' >
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <Button
                                                inverted
                                                circular
                                                color='green'
                                                title='Clique aqui para editar os dados deste entregador'
                                                icon>
                                                 <Link to="/form-entregador" state={{id: entregador.id}} style={{color: 'green'}}> <Icon name='edit' /> </Link>

                                            </Button> &nbsp;
                                            <Button
                                                inverted
                                                circular
                                                color='red'
                                                title='Clique aqui para remover este entregador'
                                                icon
                                                onClick={e => confirmaRemover(entregador.id)}>
                                                <Icon name='trash' />
                                            </Button>
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}

                            </Table.Body>
                        </Table>
                        </div>
                    </div>
                </Container>
            </div>
            <Modal
               basic
               onClose={() => setOpenModal(false)}
               onOpen={() => setOpenModal(true)}
               open={openModal}
         >
               <Header icon>
                   <Icon name='trash' />
                   <div style={{marginTop: '5%'}}> Tem certeza que deseja remover esse registro? </div>
               </Header>
               <Modal.Actions>
                   <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                       <Icon name='remove' /> Não
                   </Button>
                   <Button color='green' inverted onClick={() => remover()}>
                       <Icon name='checkmark' /> Sim
                   </Button>
               </Modal.Actions>
         </Modal>

        </div>
    )
}
