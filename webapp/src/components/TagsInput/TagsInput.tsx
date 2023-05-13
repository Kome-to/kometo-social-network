import React, { useState } from 'react';
import TagsInput from 'react-tagsinput';
import classNames from 'classnames';
import AutocompleteRenderInput from './components/AutocompleteRenderInput';

import 'react-tagsinput/react-tagsinput.css';
import './TagsInput.scss';

export interface TagInputProps {
  placeholder?: string;
  label?: string;
  error?: any;
  className?: string;
  dataId?: string;
  pathKey?: string;
  maxTags?: number;
  disabled?: boolean;

  onChange?: (e: Tag[]) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  getSuggestions?: (value: string) => Promise<Tag[]>;
}

export interface Tag {
  [key: string]: string;
}

const TagsInputComponent = ({
  getSuggestions,
  placeholder,
  label,
  error,
  className,
  onChange,
  onBlur,
  onFocus,
  pathKey,
  maxTags = -1,
  disabled,
}: TagInputProps) => {
  const [tags, setTags] = useState<Tag[]>([]);

  const classes = classNames('react-tagsinput', className, {
    'react-tagsinput--has-error': !!error,
    'react-tagsinput--has-label': !!label,
  });

  const handleChange = (tags: Tag[]) => {
    // Tag must have an identifier constraint (ID)
    const filterTags = tags.filter((tag: Tag) => tag.id);
    setTags(filterTags);
    if (onChange) {
      onChange(filterTags);
    }
  };

  return (
    <div>
      {label && <div className="tags-input__label">{label}</div>}
      <TagsInput
        className={classes}
        renderInput={(props) => <AutocompleteRenderInput pathKey={pathKey} getSuggestions={getSuggestions} {...props} />}
        tagDisplayProp={pathKey}
        inputProps={{
          placeholder,
          onBlur,
          onFocus,
        }}
        maxTags={maxTags}
        disabled={disabled}
        value={tags}
        onChange={handleChange}
      />
      {error && <span className="tag_input__error">{error}</span>}
    </div>
  );
};

export default TagsInputComponent;
