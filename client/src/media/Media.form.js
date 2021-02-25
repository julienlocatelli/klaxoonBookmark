import React, { useEffect } from 'react';
import { func, string, shape, number, instanceOf } from 'prop-types';
import { useForm, Controller } from 'react-hook-form';

import { useTranslation } from '../translate/I18n';

import { Box, Text } from '../components/atom';
import { TextInput, DatePicker, TagInput } from '../components/molecule/form';
import '../components/molecule/form/DatePicker';
import Button from '../components/molecule/Button';

const MediaUrl = Object.freeze({
  vimeo: 'vimeo.com',
  flickr: 'flickr.com'
});

const isNotNullAndNumber = (value) => {
  if (value) {
    return parseInt(value) || typeof value !== 'number';
  }

  return true;
};

const makeSizeValidation = (t, isPictureMedia) => (value) => {
  if (!isNotNullAndNumber(value)) {
    return t('validation:form.shouldBeNumber');
  }

  if (isPictureMedia && !value) {
    return t('media:form.requiredSize');
  }
};

const MediaForm = ({ title, media, onSubmit }) => {
  const { t } = useTranslation();

  const { register, watch, control, errors, handleSubmit, setValue } = useForm({
    defaultValues: media
  });

  // hidden field
  useEffect(() => {
    register('type');
  }, []);

  const url = watch('url', '');

  const isVideoMedia = url.includes(MediaUrl.vimeo);
  const isPictureMedia = url.includes(MediaUrl.flickr);

  const mediaType = (() => {
    if (isPictureMedia) return 'picture';
    if (isVideoMedia) return 'video';

    return '';
  })();

  setValue('type', mediaType);

  const sizeValidation = makeSizeValidation(t, isPictureMedia);

  const sizeError = ((errors) => {
    if (typeof errors.size === 'object') {
      const firstAttribute = Object.keys(errors.size)[0];
      return errors.size[firstAttribute].message;
    }
  })(errors);

  return (
    <>
      <Box py={3}>
        <Box>
          <Text color="cinereous" fontWeight={500} fontSize={2}>
            {title}
          </Text>
        </Box>

        <TextInput
          name="url"
          ref={register({
            required: t('validation:form.required')
          })}
          label={`${t('media:form.url')}*`}
          helperText={t('media:form.helper.url')}
          error={errors?.url?.message}
        />

        <TextInput
          name="title"
          ref={register({
            required: t('validation:form.required')
          })}
          label={`${t('media:form.title')}*`}
          error={errors?.title?.message}
        />

        <TextInput name="author" ref={register} label={t('media:form.author')} />

        <Controller
          name="date"
          ref={register({ required: t('validation:form.required') })}
          control={control}
          render={({ onChange, value }) => (
            <DatePicker value={value} onChange={onChange} label={t('media:form.date')} />
          )}
        />

        <Text color="cinereous" fontSize={0}>
          {t('media:form.size')}
        </Text>

        <TextInput
          name="size.width"
          type="number"
          ref={register({
            validate: sizeValidation
          })}
          label={t('media:form.width')}
        />

        <TextInput
          name="size.height"
          type="number"
          ref={register({
            validate: sizeValidation
          })}
          label={t('media:form.height')}
        />
        {sizeError && (
          <Text color="danger" fontSize={0}>
            {sizeError}
          </Text>
        )}

        {/* EXTRA FIELD FOR VIDEO */}
        {isVideoMedia && (
          <>
            <Text color="cinereous" fontSize={0}>
              {t('media:form.extraField')}
            </Text>
            <TextInput
              name="duration"
              type="number"
              ref={register({
                validate: (value) => {
                  if (!isNotNullAndNumber(value)) {
                    return t('validation:form.shouldBeNumber');
                  }
                }
              })}
              error={errors?.duration?.message}
              label={`${t('media:form.duration')}*`}
            />
          </>
        )}

        <Controller
          name="tags"
          control={control}
          render={({ onChange, value }) => (
            <TagInput label={t('media:form.tags')} tags={value} onChange={onChange} />
          )}
        />

        <Box display="flex" justifyContent="flex-end" pt={3}>
          <Button label="submit" aria-label="btn_submit" onClick={handleSubmit(onSubmit)} />
        </Box>
      </Box>
    </>
  );
};

MediaForm.defaultProps = {
  media: {
    url: '',
    title: '',
    author: '',
    duration: '',
    date: new Date(),
    type: '',
    tags: [],
    size: {
      width: '',
      height: ''
    }
  }
};

MediaForm.propTypes = {
  title: string,
  onSubmit: func,
  media: shape({
    url: string,
    title: string,
    author: string,
    duration: string | number,
    date: instanceOf(Date),
    type: string,
    id: string | number,
    size: shape({
      width: string | number,
      height: string | number
    })
  })
};

export default MediaForm;
