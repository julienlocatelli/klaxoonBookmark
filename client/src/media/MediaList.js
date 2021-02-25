import React from 'react';
import { arrayOf, shape, string, number, func, bool } from 'prop-types';
import { connect } from 'react-redux';
import { Edit } from 'react-feather';
import { Link } from 'react-router-dom';

import { useTranslation } from '../translate/I18n';
import useAsyncLoad from '../hook/useAsyncLoad';

import { Box, Text } from '../components/atom';
import Button from '../components/molecule/Button';
import Loader from '../components/molecule/Loader';

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const formatSize = (size) => {
  if (size?.height && size?.width) {
    return `${size.width} x ${size.height}`;
  }

  return '-';
};

const MediaItem = ({ label }) => (
  <Box px={2} py={1}>
    <Text>{label}</Text>
  </Box>
);

MediaItem.propTypes = {
  label: string
};

const MediaHeaderItem = ({ label }) => (
  <Box px={2} py={1}>
    <Text color="cinereous" fontSize={0}>
      {label}
    </Text>
  </Box>
);

MediaHeaderItem.propTypes = {
  label: string
};

const MediaList = ({ medias, fetchAllMedia }) => {
  const { t } = useTranslation();

  const { isLoading } = useAsyncLoad(() => fetchAllMedia(), []);

  if (isLoading) {
    return <Loader />;
  }

  if (!medias.length)
    return (
      <Box>
        <Text>{t('media:list.emptyList')}</Text>
      </Box>
    );

  return (
    <table>
      <thead>
        <tr>
          <td>
            <MediaHeaderItem label={t('media:list.title')} />
          </td>
          <td>
            <MediaHeaderItem label={t('media:list.author')} />
          </td>
          <td>
            <MediaHeaderItem label={t('media:list.date')} />
          </td>
          <td>
            <MediaHeaderItem label={t('media:list.duration')} />
          </td>
          <td>
            <MediaHeaderItem label={t('media:list.size')} />
          </td>
          <td>
            <MediaHeaderItem label={t('media:list.url')} />
          </td>
        </tr>
      </thead>
      <tbody>
        {medias.map((media) => (
          <tr key={media.id}>
            <td>
              <MediaItem label={media.title} />
            </td>
            <td>
              <MediaItem label={media.author} />
            </td>
            <td>
              <MediaItem label={formatDate(media.date)} />
            </td>
            <td>
              <MediaItem label={`${media.duration}s`} />
            </td>
            <td>
              <MediaItem label={formatSize(media.size)} />
            </td>
            <td>
              <Button variant="clear" onClick={() => window.open(media.url, '_blank')}>
                <MediaItem label={media.url} />
              </Button>
            </td>
            <td>
              <Link to={`editMedia/${media.id}`}>
                <Edit size={16} />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

MediaList.propTypes = {
  isFetching: bool,
  fetchAllMedia: func,
  medias: arrayOf(
    shape({
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
  )
};

const mapState = ({
  media: {
    list: { data, isFetching }
  }
}) => ({
  medias: data,
  isFetching
});

const mapDispatch = ({ media: { fetchAllMedia } }) => ({
  fetchAllMedia
});

export default connect(mapState, mapDispatch)(MediaList);
