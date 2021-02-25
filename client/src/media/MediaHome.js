import React from 'react';

import { useTranslation } from '../translate/I18n';

import { Box, Text } from '../components/atom';
import CreateMedia from './CreateMedia';
import MediaList from './MediaList';

const Media = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box display="flex" alignItems="center">
        <Text color="primary">{t('app:mainTitle')}</Text>
        <CreateMedia />
      </Box>

      <MediaList />
    </>
  );
};

export default Media;
