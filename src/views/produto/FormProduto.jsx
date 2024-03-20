import React, {useState} from "react";
import { Button, Container, Divider, Form, Icon, FormTextArea } from 'semantic-ui-react';
import axios from "axios";
import MenuSistema from '../../MenuSistema';


export default function FormProduto() {

    const [titulo, setTitulo] = useState('');
    const [codigo, setCodigo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valorUnitario, setValorUnitario] = useState('');
    const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState('');
    const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState('');

    function salvar() {

        let ProdutoRequest = {
            titulo: titulo,
            codigo: codigo,
            descricao: descricao,
            foneCelular: valorUnitario,
            tempoEntregaMaximo: tempoEntregaMaximo,
            tempoEntregaMinimo: tempoEntregaMinimo
        }

        axios.post("http://localhost:8081/api/produto", ProdutoRequest)
            .then((response) => {
                console.log('Produto cadastrado com sucesso.')
            })
            .catch((error) => {
                console.log('Erro ao incluir o um produto.')
            })
    }


    return (

        <div>
            <MenuSistema tela={'Produto'} />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group >

                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    maxLength="100"
                                    width={15}
                                    placeholder='Informe o título do produto '
                                    value={titulo}
                                    onChange={e => setTitulo (e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'
                                    width={8}
                                    placeholder='Informe o código do produto'
                                    value={codigo}
                                    onChange={e => setCodigo (e.target.value)}
                                >

                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <FormTextArea
                                    label='About'
                                    placeholder='Informe a descrição do produto'
                                    value={descricao}
                                    onChange={e => setDescricao (e.target.value)}
                                />

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Unitário'
                                    width={6}
                                    value={valorUnitario}
                                    onChange={e => setValorUnitario (e.target.value)}
                                >

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Mínimo em Minutos'
                                    width={6}
                                    placeholder="30"
                                    value={tempoEntregaMinimo}
                                    onChange={e => setTempoEntregaMinimo (e.target.value)}
                                >

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máximo em Minutos'
                                    width={6}
                                    placeholder='40'
                                    value={tempoEntregaMaximo}
                                    onChange={e => setTempoEntregaMaximo (e.target.value)}
                                >

                                </Form.Input>

                            </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Listar
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}
