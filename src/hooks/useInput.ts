import { useState, useCallback, ChangeEvent } from 'react';
import { InputProps } from '../type';

export const useInput = (initialValue: string): InputProps => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  }, []);

  return { value, onChange };
};
