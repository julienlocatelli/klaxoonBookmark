import React from 'react';
import { string, func } from 'prop-types';
import RDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import Box from '../../atom/Box';
import TextInput from './TextInput';

const DatePicker = ({ label, value, onChange }) => (
	<Box>
		<RDatePicker
			dateFormat="dd/MM/yyyy"
			selected={value}
			onChange={onChange}
			customInput={<TextInput label={label} value={value} />}
		/>
	</Box>
);

DatePicker.propTypes = {
	label: string,
	value: string,
	onChange: func
};

export default DatePicker;
