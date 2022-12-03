import React, {useState} from 'react';
import styled from '@emotion/styled';
import {aumentoPlan, aumentoMarca, diferenciaYear} from '../Helper'
import PropTypes from 'prop-types'

const Div = styled.div`
    display:flex;
    padding:1rem;    
`

const Label = styled.label`
    flex:0 0 100px;
    font-weight:bold;
    
`
const Select = styled.select`
    -webkit-appearance: none;
    width:100%;
    padding:5px;
    text-align:center;
    border:solid 2px gray;
    border-radius:10px;
    font-weight: bold;
`
const Input = styled.input` 
    margin: 0 1rem;   
`

const Button = styled.button`
    background-color:rgb(0, 131, 143);
    padding:1rem;
    border-radius:10px;
    color:white;
    font-weight:bold;
    letter-spacing:1px;
    font-family: 'verdana 24px';
    width:100%;
    margin-top:1rem;
    border:none;
    text-transform: uppercase;
    transition: background-color 1s ease; 
    margin-bottom:20px;   

    &:hover{
        background-color:rgb(38, 198, 218);
        cursor:pointer;
    }
`

const Error = styled.div`
    width:95%;
    background-color:red;
    text-transform:uppercase;
    color:white;
    text-align:center;
    padding:1rem;
    font-weight:bold;
    margin-bottom:20px;
`

const Formulario = ({setResumen, setSpinner}) => {

    const [ datos, setDatos ] = useState({
        marca:'',
        year: '',
        plan:''
    })

    const [ errorFormulario, setErrorFormulario ] = useState(false)

    const { marca, year, plan }  = datos

    const obtenerDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const enviarFormulario = (e) => {
        e.preventDefault()

        if(marca.trim() === '' | year.trim() === '' | plan.trim() === ''){
            setErrorFormulario(true)
            return
        }
        setErrorFormulario(false)

        let resultado = 2000

        // Decremento del basico segun año, 3% por año       
       
        resultado -= ((resultado * 3) * diferenciaYear(year)) / 100        
        
        // Incremento de valor - Por Plan: basico +20%, completo +50%
        // Incremento de valor - Por Marca: europeo +30%, americano +15, asiatico +5%        
        resultado = Number(parseFloat(resultado * aumentoPlan(plan) * aumentoMarca(marca))).toFixed(2)
        
        setSpinner(true)

        setTimeout( () => {

            setSpinner(false)

            setResumen({
                cotizacion: resultado,
                datos
            })
            
        }, 3000)
        
    }

    return ( 
       
        <form
            onSubmit={enviarFormulario}       
        >
            {errorFormulario
            ? <Error>Todos los campos son obligatorios</Error>
            : null
            }
            
            <Div>
                <Label>Marca</Label>
                <Select
                    name='marca'
                    value={marca}
                    onChange={obtenerDatos}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="europeo">Europeo</option>
                    <option value="americano">Americano</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Div>

            <Div>
                <Label>Año</Label>
                <Select
                    name='year'
                    value={year}
                    onChange={obtenerDatos}                
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                </Select>            
            </Div>

            <Div>

                <Label>Plan</Label>
                <Input 
                    type='radio'
                    name='plan' 
                    value='basico'
                    checked={plan === 'basico'}
                    onChange={obtenerDatos}
                />Básico

                <Input 
                    type='radio'
                    name='plan' 
                    value='completo'
                    checked={plan === 'completo'}
                    onChange={obtenerDatos}
                />Completo

            </Div>

            <Button 
                type="submit"                 
            >Cotizar</Button>

        </form>
     );
}

Formulario.propTypes = {
    setResumen: PropTypes.func.isRequired,
    setSpinner: PropTypes.func.isRequired
}
 
export default Formulario;