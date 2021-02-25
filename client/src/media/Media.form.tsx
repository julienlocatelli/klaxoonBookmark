import React from 'react';

import { Box, Text } from '../components/atom';

const MediaForm: React.FC = ({ title }: { title: string }) => (
  <Box>
    <Text>{title}</Text>
  </Box>
);

export default MediaForm;
