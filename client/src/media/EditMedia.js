import React from 'react';
import { func, shape, string, number, instanceOf } from 'prop-types';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ArrowLeft } from 'react-feather';

import { useTranslation } from '../translate/I18n';
import useAsyncLoad from '../hook/useAsyncLoad';

import Button from '../components/molecule/Button';
import Loader from '../components/molecule/Loader';
import MediaForm from './Media.form';

const EditMedia = ({ media, editMedia, fetchMedia }) => {
  const { t } = useTranslation();

  const { id } = useParams();
  const history = useHistory();

  const { isLoading } = useAsyncLoad(() => fetchMedia(id), []);

  if (isLoading) return <Loader />;

  const handleSubmit = (updatedMedia) => {
    editMedia({ ...updatedMedia, id: media.id });
    toast.success(t('media:updated'));
  };

  return (
    <>
      <Button variant="clear" onClick={() => history.replace('/')}>
        <ArrowLeft size={14} />
      </Button>
      {media && (
        <MediaForm
          media={{ ...media, date: new Date(media.date) }}
          title={t('media:form.editMedia')}
          onSubmit={handleSubmit}
        />
      )}
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
    date: string | instanceOf(Date),
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
