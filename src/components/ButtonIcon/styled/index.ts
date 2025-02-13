import styled from 'styled-components/native';
import {
    COLOR_BRAND,
    COLOR_SUCCESS,
    COLOR_GRAY_TRANSPARENT_2,
    COLOR_WHITE,
} from '../../../styles/colors';
import { ButtonIconVariant, ButtonIconSize } from '../../types';

interface Props {
    disabled?: boolean;
    variant?: ButtonIconVariant;
    size?: ButtonIconSize;
}

export const Button = styled.TouchableOpacity<Props>`
    background: transparent;
    border: 0;
    border-radius: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0;
    text-decoration: none;
    overflow: visible;
    text-transform: none;

    ${props =>
        props.variant === 'neutral' &&
        `
            background-color: ${COLOR_WHITE};
            border: 1px solid ${COLOR_GRAY_TRANSPARENT_2};
        `};
    ${props =>
        props.variant === 'brand' &&
        `
            background-color: ${COLOR_BRAND};
            border: 1px solid ${COLOR_BRAND};
        `};
    ${props =>
        props.variant === 'success' &&
        `
            background-color: ${COLOR_SUCCESS};
            border: 1px solid ${COLOR_SUCCESS};
        `};
    ${props =>
        props.disabled &&
        `
            background-color: ${COLOR_GRAY_TRANSPARENT_2};
            border: 1px solid transparent;
        `};
    ${props =>
        props.size === 'xx-small' &&
        `
            width: 20;
            height: 20;
        `};
    ${props =>
        props.size === 'x-small' &&
        `
            width: 32;
            height: 32;
        `};
    ${props =>
        props.size === 'small' &&
        `
            width: 40;
            height: 40;
        `};
    ${props =>
        props.size === 'medium' &&
        `
            width: 48;
            height: 48;
        `};
    ${props =>
        props.size === 'large' &&
        `
            width: 64;
            height: 64;
        `};
`;
