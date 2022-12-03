import React from 'react'
import styled from '@emotion/styled';

const TituloHeader = styled.header`
    font-size: 2rem;
    font-family: "Verdana 27px";
    text-align: center;
    margin: 0px;
    font-weight:bold;
`

const Header = ({titulo}) => {
    return ( 
        <TituloHeader>{titulo}</TituloHeader>
     );
}
 
export default Header;