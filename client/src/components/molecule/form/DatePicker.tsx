import React from 'react';
import RDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Box, Text } from '../../atom';

type DatePickerProps = {
  label: string;
  date: Date;
  onChange: () => void;
};

const DatePicker: React.FC = ({ label, date, onChange }: DatePickerProps) => (
  <Box display="flex" flexDirection="row">
    <Box width={50}>
      <Text fontSize={1} color="secondary">
        {label}
      </Text>
    </Box>
    <Box>
      <RDatePicker selected={date} onChange={onChange} />
    </Box>
  </Box>
);

export default DatePicker;
