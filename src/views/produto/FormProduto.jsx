import React, { useState, useEffect } from "react";
import { Button, Container, Divider, Form, Icon, FormTextArea } from 'semantic-ui-react';
import axios from "axios";
import MenuSistema from '../../MenuSistema';
import { Link, useLocation } from "react-router-dom";


export default function FormProduto() {

    const [titulo, setTitulo] = useState();
    const [codigo, setCodigo] = useState();
    const [descricao, setDescricao] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [tempoEntregaMinimo, setTempoEntregaMinimo] = useState();
    const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();

    const { state } = useLocation();
    const [idProduto, setIdProduto] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8081/api/produto/" + state.id)
                .then((response) => {
                    setIdProduto(response.data.id)
                    setTitulo(response.data.titulo)
                    setCodigo(response.data.codigo)
                    setDescricao(response.data.descricao)
                    setValorUnitario(response.data.valorUnitario)
                    setTempoEntregaMaximo(response.data.tempoEntregaMaximo)
                    setTempoEntregaMinimo(response.data.tempoEntregaMinimo)
                })
        }
    }, [state])

    function salvar() {

        let ProdutoRequest = {
            titulo: titulo,
            codigo: codigo,
            descricao: descricao,
            valorUnitario: valorUnitario,
            tempoEntregaMaximo: tempoEntregaMaximo,
            tempoEntregaMinimo: tempoEntregaMinimo
        }

        if (idProduto != null) { //Alteração:

            axios.put("http://localhost:8081/api/produto/" + idProduto, ProdutoRequest)
                .then((response) => { console.log('Produto alterado com sucesso.') })
                .catch((error) => { console.log('Erro ao alter um Produto.') })

        } else { //Cadastro:

            axios.post("http://localhost:8081/api/produto", ProdutoRequest)
            .then((response) => {
                console.log('Produto cadastrado com sucesso.')
            })
            .catch((error) => {
                console.log('Erro ao incluir o um produto.')
            })
        }
        
    }


    return (

        <div>
            <MenuSistema tela={'produto'} />
            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                {idProduto === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idProduto != undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }
                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group >

                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    maxLength="300"
                                    width={15}
                                    placeholder='Informe o título do produto '
                                    value={titulo}
                                    onChange={e => setTitulo(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'
                                    width={8}
                                    placeholder='Informe o código do produto'
                                    value={codigo}
                                    onChange={e => setCodigo(e.target.value)}
                                >

                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.TextArea
                                    label='Descrição'
                                    placeholder='Informe a descrição do produto'
                                    value={descricao}
                                    onChange={e => setDescricao(e.target.value)}
                                />

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Unitário'
                                    width={6}
                                    value={valorUnitario}
                                    onChange={e => setValorUnitario(e.target.value)}
                                >

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Mínimo em Minutos'
                                    width={6}
                                    placeholder="30"
                                    value={tempoEntregaMinimo}
                                    onChange={e => setTempoEntregaMinimo(e.target.value)}
                                >

                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máximo em Minutos'
                                    width={6}
                                    placeholder='40'
                                    value={tempoEntregaMaximo}
                                    onChange={e => setTempoEntregaMaximo(e.target.value)}
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
                                as={Link}
                                to={'/list-produto'}
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
