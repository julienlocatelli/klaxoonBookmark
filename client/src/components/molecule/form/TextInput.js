import React, { forwardRef } from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import { Box, Text } from '../../atom';

const StyledTextInput = styled('input')(({ theme: { colors, space } }) => ({
	color: colors.secondary,
	padding: space[1],
	outline: 'none',
	border: '1px solid',
	borderColor: colors.light,
	borderRadius: 2,
	maxWidth: '100%',
	width: '100%',
	fontSize: 14,
	'&:focus': {
		outline: 'none',
		borderColor: colors.silverPink
	}
}));

const TextInput = forwardRef(({ label, helperText, name, error, ...rest }, ref) => {
	return (
		<Box py={2}>
			<Box display="flex" flexDirection="row" alignItems="center">
				{label && (
					<Box width={50}>
						<Text fontSize={1} color="secondary">
							{label}
						</Text>
					</Box>
				)}
				<Box flex={1} ml={1}>
					<StyledTextInput name={name} placeholder={label} ref={ref} {...rest} />
				</Box>
			</Box>

			{helperText && (
				<Box>
					<Text color="primary" fontSize={0}>
						{helperText}
					</Text>
				</Box>
			)}

			{error && (
				<Box>
					<Text color="danger" fontSize={0}>
						{error}
					</Text>
				</Box>
			)}
		</Box>
	);
});

TextInput.defaultProps = {
	type: 'text'
};

TextInput.propTypes = {
	label: string,
	helperText: string,
	name: string,
	error: string
};

export default TextInput;
