import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import theme from '../assets/theme';

import MediaForm from './Media.form';

jest.mock('../translate/I18n.js', () => ({
	useTranslation: () => ({ t: (key) => key })
}));

jest.mock('../components/molecule/form/DatePicker.js', () => () => <div>DatePicker</div>);
jest.mock('../components/molecule/form/TagInput.js', () => () => <div>TagInput</div>);

describe('MediaForm', () => {
	it('should display an error when the url is empty', async () => {
		render(
			<ThemeProvider theme={theme}>
				<MediaForm />
			</ThemeProvider>
		);

		const submitButton = screen.getByLabelText('btn_submit');

		fireEvent.click(submitButton);

		await waitFor(() => screen.getByLabelText('field_url_error'));

		expect(screen.getByLabelText('field_url_error')).toHaveTextContent('validation:form.required');
	});
});
