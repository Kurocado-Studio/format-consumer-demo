import { Question } from '@kurocado-studio/formkit-ui-react-renderer';
import { get } from 'lodash-es';
import React from 'react';

import { MyLibraryInputUsingFormKitHooks } from './MyLibraryInputUsingFormKitHooks';

export function MappedToFormKitTextFieldNode(properties: {
  question: Question;
}): React.ReactNode {
  const { question, variant, variants, description } = properties.question;

  const name = get(variants, [variant, 'id'], 'unknown');
  const required = get(variants, [variant, 'required'], false);

  return (
    <MyLibraryInputUsingFormKitHooks
      required={required}
      name={name}
      label={question}
      description={description}
    />
  );
}
