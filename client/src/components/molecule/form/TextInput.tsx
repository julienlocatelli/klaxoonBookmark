import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { Box, Text } from '../../atom';

const StyledTextInput = styled('input')(({ theme: { colors, space } }) => ({
  color: colors.secondary,
  padding: space[1],
  outline: 'none',
  border: '1px solid',
  borderColor: 'transparent',
  borderRadius: 2,
  maxWidth: '100%',
  width: '100%',
  fontSize: 14,
  '&:focus': {
    outline: 'none',
    borderColor: colors.silverPink
  }
}));

type TextInputProps = {
  label?: string;
  helperText?: string;
  name?: string;
  value?: string | number;
  error?: string;
};

const TextInput: React.FC = forwardRef<HTMLSelectElement, TextInputProps>(
  ({ label, helperText, name, error, ...rest }, ref) => {
    return (
      <Box py={2}>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Box width={50}>
            <Text fontSize={1} color="secondary">
              {label}
            </Text>
          </Box>
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
  }
);

TextInput.defaultProps = {
  type: 'text'
};

export default TextInput;
