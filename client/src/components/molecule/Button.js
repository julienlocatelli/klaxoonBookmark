import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { func, string, element } from 'prop-types';

import { Box, Text } from '../atom';

const StyledButton = styled('button')(
	() => ({
		borderColor: 'transparent',
		borderRadius: 3,
		outline: 'none',
		'&:active': {
			opacity: 0.8
		}
	}),
	variant({
		variants: {
			primary: {
				bg: 'primary'
			},
			clear: {
				bg: 'transparent'
			}
		}
	})
);

const Button = ({ label, onClick, children, variant }) => (
	<StyledButton onClick={onClick} variant={variant}>
		{label ? (
			<Box px={2} py={1}>
				<Text color="white">{label}</Text>
			</Box>
		) : (
			children
		)}
	</StyledButton>
);

Button.defaultProps = {
	variant: 'primary',
	onClick: () => null
};

Button.propTypes = {
	label: string,
	onClick: func,
	children: element,
	variant: string
};

export default Button;
