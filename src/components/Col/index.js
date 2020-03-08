import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

/**
 * noGutters remove paddings in cols
 * Aditional styles as string
 */
const ColStyle = styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;

    ${props => props.xl && css`
        flex: 0 0 50%;
        max-width: 50%;
    `}

    ${props => props.aditionals && css`
        ${props.aditionals}
    `}
`;

export const Col = ({children, noGutters, aditionals, ...rest}) => (
    <ColStyle noGutters={noGutters} aditionals={aditionals} {...rest}>
        {children}
    </ColStyle>
);

Col.propTypes = {
    aditionals: PropTypes.string,
    children: PropTypes.node.isRequired,

};