import React, { useState, useContext } from 'react';
import { PlusCircle } from 'react-feather';

import { useTranslation } from '../translate/I18n';

import { ThemeContext } from 'styled-components';

import Button from '../components/molecule/Button';
import Modal from '../components/molecule/Modal';

import MediaForm from './Media.form';

const CreateMedia = () => {
	const [showModal, setModal] = useState(false);

	const { colors } = useContext(ThemeContext);

	const { t } = useTranslation();

	return (
		<>
			<Button variant="clear" onClick={() => setModal(true)}>
				<PlusCircle color={colors.primary} />
			</Button>
			<Modal show={showModal} onClose={() => setModal(false)}>
				<MediaForm title={t('media:form.mainTitle')} />
			</Modal>
		</>
	);
};

export default CreateMedia;
