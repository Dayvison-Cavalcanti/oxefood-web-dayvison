import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon, FormInput, FormSelect, FormRadio } from 'semantic-ui-react';


export default function FormEntregador() {

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


    return (

        <div>
            <div style={{ marginTop: '3%' }}>
                <Container textAlign="justified">
                    <h2> <span> Produto &nbsp; <Icon name="angle double right" size="small" >  </Icon> </span> Cadastro </h2>

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
                                        mask={'999.999.999-99'}>
                                    </InputMask>
                                </FormInput>

                                <FormInput
                                    label='RG'
                                    width={6}
                                >
                                </FormInput>
                            </Form.Group>

                            <Form.Group>
                                <FormInput
                                    label='DT Nascimento'
                                    placeholder='Ex: 01/01/0101'
                                    width={3}
                                >

                                </FormInput>
                                <FormInput
                                    label='Fone Celular'
                                    required
                                    fluid
                                    width={4}

                                >

                                </FormInput>
                                <FormInput
                                    label='Fone Fixo'
                                    fluid
                                    width={4}
                                >

                                </FormInput>
                                <FormInput
                                    label='DT QTD Entregas Realizadas'
                                    fluid
                                    width={3}
                                >

                                </FormInput>
                                <FormInput
                                    label='Valor Por Frete '
                                    fluid
                                    width={3}
                                >
                                </FormInput>

                            </Form.Group>

                            <Form.Group>
                                <FormInput
                                    label='Rua'
                                    width={15}

                                >
                                </FormInput>
                                <FormInput
                                    label='Número'

                                >
                                </FormInput>
                            </Form.Group>

                            <Form.Group>
                                <FormInput
                                    label='Bairro'
                                    width={7}
                                >

                                </FormInput>
                                <FormInput
                                    label='Cidade'
                                    width={7}
                                >
                                </FormInput>
                                <FormInput
                                    label='CEP'
                                    width={3}

                                >
                                </FormInput>
                            </Form.Group>



                            <FormSelect

                                label='UF'
                                options={Estados}
                                placeholder="selecione"
                                width='18'
                            >
                            </FormSelect>

                            <FormInput
                                label='Complemento'

                            >
                            </FormInput>

                            <Form.Group inline>
                                <label style={{ backgroundColor: 'branco' }}>Ativo</label>

                                <FormRadio
                                    label='Sim'
                                    value={'sim'}
                                    checked={value === 'sim'}
                                    onChange={handleChange}

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