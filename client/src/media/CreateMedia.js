import React, { useState, useContext } from 'react';
import { func } from 'prop-types';
import { PlusCircle } from 'react-feather';
import { connect } from 'react-redux';

import { useTranslation } from '../translate/I18n';

import { ThemeContext } from 'styled-components';

import Button from '../components/molecule/Button';
import Modal from '../components/molecule/Modal';

import MediaForm from './Media.form';

const CreateMedia = ({ createMedia }) => {
  const [showModal, setModal] = useState(false);

  const { colors } = useContext(ThemeContext);

  const { t } = useTranslation();

  const handleSubmit = async (media) => {
    await createMedia(media);
    setModal(false);
  };

  return (
    <>
      <Button variant="clear" onClick={() => setModal(true)}>
        <PlusCircle color={colors.primary} />
      </Button>
      <Modal show={showModal} onClose={() => setModal(false)}>
        <MediaForm title={t('media:form.mainTitle')} onSubmit={handleSubmit} />
      </Modal>
    </>
  );
};

CreateMedia.propTypes = {
  createMedia: func
};

const mapDispatch = ({ media: { createMedia } }) => ({
  createMedia
});

export default connect(null, mapDispatch)(CreateMedia);
