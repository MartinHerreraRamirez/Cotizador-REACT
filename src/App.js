import React, {useState} from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Spinner from './components/Spinner'
import styled from '@emotion/styled';


const ContenedorPrincipal = styled.div`
  max-width:600px;
  margin: 0 auto;
`

const ContenedorHeader = styled.div`
  background-color: rgb(38, 198, 218);  
  padding:10px;
  color:white;  
`

const ContenedorFormulario = styled.div`
    background-color:white; 
    padding:3rem;      
`

function App() {

  const [resumen, setResumen ] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      plan: '',
      year: ''
    }
  })

  const [ spinner, setSpinner ] = useState(false)

  const { cotizacion , datos } = resumen

  return (
    <ContenedorPrincipal>
      <ContenedorHeader>
        <Header 
          titulo='Cotizador de Seguros'
        />

      
      </ContenedorHeader>

      <ContenedorFormulario>

        <Formulario
          setResumen={setResumen}
          setSpinner={setSpinner}
        />

        {spinner
        ? <Spinner /> 
        : null
        }        
        
        {cotizacion && !spinner
        ? 
          <Resumen 
          titulo='Resumen Cotizacion'
          cotizacion={cotizacion}      
          datos={datos}
          />
        : null
        }

      </ContenedorFormulario>
      
    </ContenedorPrincipal>
  );
}

export default App;
