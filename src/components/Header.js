import React from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types'

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

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header;