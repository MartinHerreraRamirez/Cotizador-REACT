import React from 'react'
import styled from '@emotion/styled';
import { primeraMayuscula } from '../Helper'

const ContenedorCotizacion = styled.div`
    display: flex;
    flex-direction: column;
    max-width:600px;
    font-size: 2rem;    
    text-align: center;
    margin: 0 auto;
    font-weight:bold;
    background-color: rgb(0, 131, 143);  
    padding:10px;
    color:white;  
    letter-spacing: 0.5px;
    border-radius:10px;
    border: solid 1px gray;
`

const TituloCotizacion = styled.div`
    padding:1rem;
    font-family: "Verdana 27px";
    text-decoration: underline;
`

const ResumenCotizacion = styled.div`
   font-family: 'verdana 27px';
   font-size: 20px;
   padding:0.5rem;
`

const Resumen = ({cotizacion, datos, titulo}) => {  
    
    const { marca, plan, year} = datos
    
    return ( 
        <ContenedorCotizacion>
            <TituloCotizacion>{titulo}</TituloCotizacion>            
            <ResumenCotizacion>Marca: {primeraMayuscula(marca)}</ResumenCotizacion>            
            <ResumenCotizacion>Plan: {primeraMayuscula(plan)}</ResumenCotizacion>  
            <ResumenCotizacion>Año: {year}</ResumenCotizacion>
            <ResumenCotizacion>Cotizacion: $ {cotizacion}</ResumenCotizacion>
                        
        </ContenedorCotizacion>
     );
}
 
export default Resumen;