import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { Home, ArrowLeft } from 'react-feather';

import { Box, Text } from './atom';

import { useTranslation } from '../translate/I18n';

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <Box>
      <Link to="/">
        <ArrowLeft />
        <Home />
      </Link>
      <Box>
        <Text>{t('common:notFound', { path: location.pathname })}</Text>
      </Box>
    </Box>
  );
};

export default NotFound;
