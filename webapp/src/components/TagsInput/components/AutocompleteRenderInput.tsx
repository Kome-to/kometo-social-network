import React, { useState } from 'react';
import Autosuggest, { ChangeEvent } from 'react-autosuggest';
import { Tag } from '../TagsInput';

export interface AutocompleteRenderInputProps {
  ref: (r: any) => void;
  addTag: (e: Tag) => void;
  value: any;
  onChange: (e: any) => void;
  pathKey?: string;
  getSuggestions?: (value: string) => Promise<Tag[]>;
}

const AutocompleteRenderInput = ({ addTag, pathKey, getSuggestions, ...props }: AutocompleteRenderInputProps) => {
  const [suggestions, setSuggestions] = useState<Tag[]>([]);

  const handleOnChange = (e: React.FormEvent<HTMLElement>, { newValue, method }: ChangeEvent) => {
    if (method === 'enter') {
      e.preventDefault();
    } else {
      props.onChange(e);
    }
  };

  const onSuggestionsFetchRequested = async ({ value }: { value: string }) => {
    if (getSuggestions) {
      const suggestions = await getSuggestions(value);
      setSuggestions(suggestions);
    }
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  return (
    <Autosuggest
      ref={props.ref}
      suggestions={suggestions}
      getSuggestionValue={(suggestion) => (pathKey ? suggestion[pathKey] : suggestion) as string}
      renderSuggestion={(suggestion) => <span>{(pathKey ? suggestion[pathKey] : suggestion) as string}</span>}
      inputProps={{ ...props, onChange: handleOnChange }}
      onSuggestionSelected={(e, { suggestion }) => {
        addTag(suggestion);
      }}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
    />
  );
};

export default AutocompleteRenderInput;
