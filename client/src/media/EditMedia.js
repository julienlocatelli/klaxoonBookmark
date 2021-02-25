import React from 'react';
import { func, shape, string, number } from 'prop-types';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { ArrowLeft } from 'react-feather';

import { useTranslation } from '../translate/I18n';
import useAsyncLoad from '../hook/useAsyncLoad';

import Loader from '../components/molecule/Loader';
import MediaForm from './Media.form';

const EditMedia = ({ media, editMedia, fetchMedia }) => {
  const { t } = useTranslation();

  const { id } = useParams();

  const { isLoading } = useAsyncLoad(() => fetchMedia(id), []);

  if (isLoading) return <Loader />;

  if (!media) {
    return null;
  }

  return (
    <>
      <Link to="/">
        <ArrowLeft size={14} />
      </Link>
      <MediaForm
        media={{ ...media, date: new Date(media.date) }}
        title={t('media:form.editMedia')}
        onSubmit={(media) => editMedia(media)}
      />
    </>
  );
};

EditMedia.propTypes = {
  editMedia: func,
  fetchMedia: func,
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

const mapState = ({
  media: {
    current: { data }
  }
}) => ({ media: data });

const mapDispatch = ({ media: { editMedia, fetchMedia } }) => ({
  fetchMedia,
  editMedia
});

export default connect(mapState, mapDispatch)(EditMedia);
