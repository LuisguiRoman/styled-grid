import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

/**
 * noGutters remove paddings in cols
 * Aditional styles as string
 */
const RowStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;

    ${props => props.noGutters && css`
        margin-right: 0;
        margin-left: 0;
        & > *,
        & > div{
            padding-right: 0;
            padding-left: 0;
        }
    `}

    ${props => props.aditionals && css`
        ${props.aditionals}
    `}
`;

export const Row = ({children, noGutters, aditionals}) => (
    <RowStyle noGutters={noGutters} aditionals={aditionals}>
        {children}
    </RowStyle>
);

Row.propTypes = {
    aditionals: PropTypes.string,
    noGutters: PropTypes.bool,
    children: PropTypes.node.isRequired
};