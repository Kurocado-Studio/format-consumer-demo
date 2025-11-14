import { useAriaTextField } from '@kurocado-studio/formkit-ui-react-renderer';
import { Input } from '@kurocado-studio/systemhaus-react';
import React from 'react';

export function MyLibraryInputUsingFormKitHooks(
  properties: {
    name: string;
    label?: string;
    description?: string;
  } & Partial<HTMLElementTagNameMap['input']>   ,
): React.ReactNode {
  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useAriaTextField(properties);

  return (
    <>
      <label className={'prose prose-md'} {...labelProps} />
      <Input {...inputProps} />
      <p className='block w-full' {...descriptionProps} />
      <span className='block w-full text-red-700' {...errorMessageProps} />
    </>
  );
}
