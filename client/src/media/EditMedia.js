import React from 'react';
import { func, shape, string, number } from 'prop-types';
import { connect } from 'react-redux';

import { useTranslation } from '../translate/I18n';

import MediaForm from './Media.form';

const EditMedia = ({ media, editMedia }) => {
  const { t } = useTranslation();

  if (!media) {
    return null;
  }

  return <MediaForm title={t('media:form.editMedia')} onSubmit={(media) => editMedia(media)} />;
};

EditMedia.propTypes = {
  editMedia: func,
  media: shape({
    url: string,
    title: string,
    author: string,
    duration: string | number,
    date: string,
    type: string,
    id: string | number,
    size: shape({
      width: string | number,
      height: string | number
    })
  })
};

const mapDispatch = ({ media: { editMedia } }) => ({
  editMedia
});

export default connect(null, mapDispatch)(EditMedia);
