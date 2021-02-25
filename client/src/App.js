import React from 'react';

import { useTranslation } from './translate/I18n';

import Box from './components/atom/Box';
import Text from './components/atom/Text';
import MediaForm from './media/Media.form';

const App = () => {
	const { t } = useTranslation();

	return (
		<Box flex={1} padding={4}>
			<Box
				width={740}
				padding={3}
				margin="auto"
				border="1px solid"
				borderColor="silverPink"
				borderRadius={2}>
				<Text color="primary">{t('app:mainTitle')}</Text>

				<Box>
					<MediaForm title={t('media:form.mainTitle')} />
				</Box>
			</Box>
		</Box>
	);
};

export default App;
