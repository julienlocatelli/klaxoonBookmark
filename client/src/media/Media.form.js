import React from 'react';
import { string } from 'prop-types';
import { useForm, Controller } from 'react-hook-form';

import { useTranslation } from '../translate/I18n';

import { Box, Text } from '../components/atom';
import TextInput from '../components/molecule/form/TextInput';
import DatePicker from '../components/molecule/form/DatePicker';
import Button from '../components/molecule/Button';

const MediaUrl = Object.freeze({
	flickr: 'https://www.flickr.com',
	vimeo: 'https://vimeo.com'
});

const MediaForm = ({ title }) => {
	const { t } = useTranslation();

	const { register, watch, control, handleSubmit } = useForm({
		defaultValues: { date: new Date() }
	});

	const onSubmit = handleSubmit((data) => console.log('data', data));

	const url = watch('url', '');

	const showPictureMedia = url.includes(MediaUrl.flickr);
	const showVideoMedia = url.includes(MediaUrl.vimeo);

	console.log('showVideoMedia', showVideoMedia, showPictureMedia);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Box py={3}>
				<Box>
					<Text color="cinereous" fontWeight={500} fontSize={1}>
						{title}
					</Text>
				</Box>

				<TextInput
					name="url"
					ref={register}
					label={t('media:form.url')}
					helperText={t('media:form.helper.url')}
				/>

				<TextInput name="title" ref={register} label={t('media:form.title')} />

				<TextInput name="author" ref={register} label={t('media:form.author')} />

				<Controller
					name="date"
					control={control}
					render={({ onChange, value }) => (
						<DatePicker value={value} onChange={onChange} label={t('media:form.date')} />
					)}
				/>

				<Box display="flex" justifyContent="flex-end" pt={3}>
					<Button label="submit" type="submit" />
				</Box>
			</Box>
		</form>
	);
};

MediaForm.propTypes = {
	title: string
};

export default MediaForm;
