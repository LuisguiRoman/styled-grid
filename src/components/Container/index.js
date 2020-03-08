import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

/**
 * No max width if fluild is true
 * Aditional styles as string
 */
const ContainerStyle = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    ${props => !props.fluid && css`
        max-width: 1200px;
    `}

    ${props => props.aditionals && css`
        ${props.aditionals}
    `}
`;

export const Container = ({children, fluid, aditionals}) => (
    <ContainerStyle fluid={fluid} aditionals={aditionals}>
        {children}
    </ContainerStyle>
);

Container.propTypes = {
    fluid: PropTypes.bool,
    aditionals: PropTypes.string,
    children: PropTypes.node.isRequired
};

