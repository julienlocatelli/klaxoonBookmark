import React from 'react';
import styled from 'styled-components';
import { func, string } from 'prop-types';

import { Box, Text } from '../atom';

const StyledButton = styled('button')(({ theme: { colors } }) => ({
	borderColor: 'transparent',
	backgroundColor: colors.primary,
	borderRadius: 3,
	outline: 'none',
	'&:active': {
		opacity: 0.8
	}
}));

const Button = ({ label, onClick }) => (
	<StyledButton onClick={onClick}>
		<Box px={2} py={1}>
			<Text color="white">{label}</Text>
		</Box>
	</StyledButton>
);

Button.defaultProps = {
	onClick: () => null
};

Button.propTypes = {
	label: string,
	onClick: func
};

export default Button;
