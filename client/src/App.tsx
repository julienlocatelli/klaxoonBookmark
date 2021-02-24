import React from 'react';

import Box from './components/atom/Box';
import Text from './components/atom/Text';

const App: React.FC = () => (
  <Box flex={1} padding={4}>
    <Box
      width={740}
      padding={3}
      margin="auto"
      border="1px solid"
      borderColor="silverPink"
      borderRadius={3}
      bg="light"
    >
      <Text color="primary">Bookmark Media</Text>
    </Box>
  </Box>
);

export default App;
