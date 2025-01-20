import styled from "styled-components";

type Props = {
    direcion?: string;
    justify?: string
    align?: string
    wrap?: string
    width?: string
    gap?: string
    margin?: string
};


export const FlexWrapper = styled.div<Props>`
    width: ${props => props.width || ''};
    display: flex;
    flex-direction: ${props => props.direcion || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stretch'};
    flex-wrap: ${props => props.wrap || 'nowrap'};
    gap: ${props => props.gap || ''};
    margin-top: ${props => props.margin || '0px'};
`