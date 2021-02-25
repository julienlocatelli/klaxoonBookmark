import React from 'react';

import { useTranslation } from './translate/I18n';

import { Box, Text } from './components/atom';
import CreateMedia from './media/CreateMedia';

const App = () => {
	const { t } = useTranslation();

	return (
		<Box flex={1} padding={4}>
			<Box
				display="flex"
				alignItems="center"
				width={740}
				padding={3}
				margin="auto"
				border="1px solid"
				borderColor="silverPink"
				borderRadius={2}>
				<Text color="primary">{t('app:mainTitle')}</Text>

				<CreateMedia />
			</Box>
		</Box>
	);
};

export default App;
