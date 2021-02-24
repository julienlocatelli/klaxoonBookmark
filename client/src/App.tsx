import React from 'react';

import Box from './components/atom/Box';
import Text from './components/atom/Text';
import { useTranslation } from './translate/I18n';

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
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
        <Text color="primary">{t('app:mainTitle')}</Text>
      </Box>
    </Box>
  );
};

export default App;
