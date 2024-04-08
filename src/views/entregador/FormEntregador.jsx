import React, { useState, useEffect } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, FormInput, FormSelect, FormRadio } from 'semantic-ui-react';
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import MenuSistema from '../../MenuSistema';

export default function FormEntregador() {

    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRg] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [foneFixo, setFoneFixo] = useState();
    const [qtdEntregasRealizadas, setQtdEntregasRealizadas] = useState();
    const [valorFrete, setValorFrete] = useState();
    const [enderecoRua, setEnderecoRua] = useState();
    const [enderecoNumero, setEnderecoNumero] = useState();
    const [enderecoBairro, setEnderecoBairro] = useState();
    const [enderecoCidade, setEnderecoCidade] = useState();
    const [enderecoCep, setEnderecoCep] = useState();
    const [enderecoUf, setEnderecoUf] = useState();
    const [enderecoComplemento, setEnderecoComplemento] = useState();
    const [ativo, setAtivo] = useState();

    const Estados = [
        { key: 'ac', text: 'Acre', value: 'ac' },
        { key: 'al', text: 'Alagoas', value: 'al' },
        { key: 'ap', text: 'Amapá', value: 'ap' },
        { key: 'am', text: 'Amazonas', value: 'am' },
        { key: 'ba', text: 'Bahia', value: 'ba' },
        { key: 'ce', text: 'Ceará', value: 'ce' },
        { key: 'df', text: 'Distrito Federal', value: 'df' },
        { key: 'es', text: 'Espírito Santo', value: 'es' },
        { key: 'go', text: 'Goiás', value: 'go' },
        { key: 'ma', text: 'Maranhão', value: 'ma' },
        { key: 'mt', text: 'Mato Grosso', value: 'mt' },
        { key: 'ms', text: 'Mato Grosso do Sul', value: 'ms' },
        { key: 'mg', text: 'Minas Gerais', value: 'mg' },
        { key: 'pa', text: 'Pará', value: 'pa' },
        { key: 'pb', text: 'Paraíba', value: 'pb' },
        { key: 'pr', text: 'Paraná', value: 'pr' },
        { key: 'pe', text: 'Pernambuco', value: 'pe' },
        { key: 'pi', text: 'Piauí', value: 'pi' },
        { key: 'rj', text: 'Rio de Janeiro', value: 'rj' },
        { key: 'rn', text: 'Rio Grande do Norte', value: 'rn' },
        { key: 'rs', text: 'Rio Grande do Sul', value: 'rs' },
        { key: 'ro', text: 'Rondônia', value: 'ro' },
        { key: 'rr', text: 'Roraima', value: 'rr' },
        { key: 'sc', text: 'Santa Catarina', value: 'sc' },
        { key: 'sp', text: 'São Paulo', value: 'sp' },
        { key: 'se', text: 'Sergipe', value: 'se' },
        { key: 'to', text: 'Tocantins', value: 'to' },
    ];

    const [value, setValue] = useState("");
    const handleChange = (e, { value }) => { setValue(value); };
    const { state } = useLocation();
    const [idEntregador, setIdEntregador] = useState();

    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8081/api/entregador/" + state.id)
                .then((response) => {
                    setIdEntregador(response.data.id)
                    setNome(response.data.nome)
                    setCpf(response.data.cpf)
                    setRg(response.data.rg)
                    setDataNascimento(formatarData(response.data.dataNascimento))
                    setFoneCelular(response.data.foneCelular)
                    setFoneFixo(response.data.foneFixo)
                    setQtdEntregasRealizadas(response.data.qtdEntregasRealizadas)
                    setValorFrete(response.data.valorFrete)
                    setEnderecoRua(response.data.enderecoRua)
                    setEnderecoNumero(response.data.enderecoNumero)
                    setEnderecoBairro(response.data.enderecoBairro)
                    setEnderecoCidade(response.data.enderecoCidade)
                    setEnderecoCep(response.data.enderecoCep)
                    setEnderecoUf(response.data.enderecoUf)
                    setEnderecoComplemento(response.data.enderecoComplemento)
                    setAtivo(response.data.ativo)
                })
        }
    }, [state])

    function salvar() {

        let EntregadorRequest = {
            nome: nome,
            cpf: cpf,
            rg: rg,
            dataNascimento: dataNascimento,
            foneCelular: foneCelular,
            foneFixo: foneFixo,
            qtdEntregasRealizadas: qtdEntregasRealizadas,
            valorFrete: valorFrete,
            enderecoRua: enderecoRua,
            enderecoNumero: enderecoNumero,
            enderecoBairro: enderecoBairro,
            enderecoCidade: enderecoCidade,
            enderecoCep: enderecoCep,
            enderecoUf: enderecoUf,
            enderecoComplemento: enderecoComplemento,
            ativo: ativo,
        }

        
        if (idEntregador != null) { //Alteração:

            axios.put("http://localhost:8081/api/entregador/" + idEntregador, EntregadorRequest)
                .then((response) => { console.log('Entregador alterado com sucesso.') })
                .catch((error) => { console.log('Erro ao alterar um Entregador.') })

        } else { //Cadastro:

            axios.post("http://localhost:8081/api/entregador", EntregadorRequest)
            .then((response) => {
                console.log('Entregador cadastrado com sucesso.')
            })
            .catch((error) => {
                console.log('Erro ao incluir o um Entregador.')
            })
        }
        
    }


    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
            return ''
        }

        let arrayData = dataParam.split('-');
        return arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0];
    }


    return (

        <div>
            <MenuSistema tela={'entregador'} />
            <div style={{ marginTop: '3%' }}>
                <Container textAlign="justified">
                {idEntregador === undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    {idEntregador != undefined &&
                        <h2> <span style={{ color: 'darkgray' }}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }
                    <Divider></Divider>
                    <div>
                        <Form>
                            <Form.Group>

                                <FormInput
                                    label='Nome'
                                    fluid
                                    required
                                    maxLength='100'
                                    width={15}
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                >
                                </FormInput>

                                <FormInput
                                    label='CPF'
                                    required
                                    width={6}
                                    maxLength='11'
                                    >
                                    <InputMask
                                        required
                                        value={cpf}
                                        onChange={e => setCpf(e.target.value)}
                                        mask={'999.999.999-99'}>
                                    </InputMask>
                                </FormInput>

                                <FormInput
                                    label='RG'
                                    width={6}
                                    value={rg}
                                    onChange={e => setRg(e.target.value)}
                                >
                                </FormInput>
                            </Form.Group>

                            <Form.Group>
                                <FormInput
                                    label='DT Nascimento'

                                    width={3}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={dataNascimento}
                                        onChange={e => setDataNascimento(e.target.value)}
                                    />

                                </FormInput>

                                <FormInput
                                    label='Fone Celular'
                                    required
                                    fluid
                                    width={4}
                                >
                                    <InputMask
                                        mask="(99) 99999.9999"
                                        value={foneCelular}
                                        onChange={e => setFoneCelular(e.target.value)}
                                    />

                                </FormInput>

                                <FormInput
                                    label='Fone Fixo'
                                    fluid
                                    width={4}
                                    
                                >
                                    <InputMask 
											mask="(99) 9999.9999"
											value={foneFixo}
											onChange={e => setFoneFixo(e.target.value)}
										/>

                                </FormInput>
                                <FormInput
                                    label='DT QTD Entregas Realizadas'
                                    fluid
                                    width={3}
                                    value={qtdEntregasRealizadas}
                                    onChange={e => setQtdEntregasRealizadas(e.target.value)}
                                >

                                </FormInput>
                                <FormInput
                                    label='Valor Por Frete '
                                    fluid
                                    width={3}
                                    value={valorFrete}
                                    onChange={e => setValorFrete(e.target.value)}
                                >
                                </FormInput>

                            </Form.Group>

                            <Form.Group>
                                <FormInput
                                    label='Rua'
                                    width={15}
                                    value={enderecoRua}
                                    onChange={e => setEnderecoRua(e.target.value)}
                                >
                                </FormInput>
                                <FormInput
                                    label='Número'
                                    value={enderecoNumero}
                                    onChange={e => setEnderecoNumero(e.target.value)}
                                >
                                </FormInput>
                            </Form.Group>

                            <Form.Group>
                                <FormInput
                                    label='Bairro'
                                    width={7}
                                    value={enderecoBairro}
                                    onChange={e => setEnderecoBairro(e.target.value)}
                                >

                                </FormInput>
                                <FormInput
                                    label='Cidade'
                                    width={7}
                                    value={enderecoCidade}
                                    onChange={e => setEnderecoCidade(e.target.value)}
                                >
                                </FormInput>
                                <FormInput
                                    label='CEP'
                                    width={3}
                                    value={enderecoCep}
                                    onChange={e => setEnderecoCep(e.target.value)}
                                >
                                </FormInput>
                            </Form.Group>

                            <FormSelect

                                label='UF'
                                options={Estados}
                                placeholder="selecione"
                                width={16}
                                value={enderecoUf}
                                onChange={e => setEnderecoUf(e.target.value)}
                            >
                            </FormSelect>

                            <FormInput
                                label='Complemento'
                                value={enderecoComplemento}
                                onChange={e => setEnderecoComplemento(e.target.value)}
                            >
                            </FormInput>

                            <Form.Group inline>
                                <label style={{ backgroundColor: 'branco' }}>Ativo</label>

                                <FormRadio
                                    label='Sim'
                                    value={'sim'}
                                    checked={value === 'sim'}
                                    onChange={handleChange}
                                //onChange={e => setAtivo(e.target.value)}

                                />

                                <FormRadio
                                    label='Não'
                                    value={'não'}
                                    checked={value === 'não'}
                                    onChange={handleChange}

                                />


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
                                to={'/list-entregador'}
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
            </div >
        </div >

    );

}