import React, { useState } from 'react';
import { arrayOf, string, func } from 'prop-types';
import { X as Delete } from 'react-feather';

import { useTranslation } from '../../../translate/I18n';

import { Box, Text } from '../../atom';
import Button from '../Button';
import TextInput from './TextInput';

const TagInput = ({ label, tags, onChange }) => {
  const { t } = useTranslation();

  const [tagValue, setTagValue] = useState('');

  const hasTags = !!tags.length;

  //add the tag on the list on press Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      const newTag = e.target.value.trim();

      //if already in the tags list
      const isAlreadyExists = tags.find((tag) => tag === newTag);

      if (!isAlreadyExists && newTag) {
        onChange([...tags, newTag]);
        setTagValue('');
      }
    }
  };

  return (
    <Box>
      <TextInput
        label={label}
        value={tagValue}
        onChange={(e) => setTagValue(e.target.value)}
        onKeyPress={handleKeyPress}
        helperText={!hasTags ? t('common:form.helper.tagInput') : ''}
      />
      {hasTags && (
        <Box>
          {tags.map((tag, index) => (
            <Box
              key={index}
              bg="primary"
              display="inline-flex"
              alignItems="center"
              px={2}
              py={1}
              mr={2}
              mt={1}
            >
              <Text fontSize={0} color="white">
                {tag}
              </Text>
              <Button
                variant="clear"
                onClick={() => {
                  onChange(tags.filter((currentTag) => tag !== currentTag));
                }}
              >
                <Delete size={16} color="white" />
              </Button>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

TagInput.defaultProps = {
  tags: []
};

TagInput.propTypes = {
  label: string,
  tags: arrayOf(string),
  onChange: func
};

export default TagInput;
