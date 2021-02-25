import React from 'react';
import styled from 'styled-components';

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

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC = ({ label, onClick }: ButtonProps) => (
  <StyledButton onClick={onClick}>
    <Box px={2} py={1}>
      <Text color="light">{label}</Text>
    </Box>
  </StyledButton>
);

Button.defaultProps = {
  onClick: () => null
};

export default Button;
