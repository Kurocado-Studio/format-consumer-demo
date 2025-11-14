import {
  FormKitConsumerForm,
  type FormKitNodeVariantMap,
  type Question,
  VariantEnum,
  formRendererComposer,
  useFormKitTextNode,
} from '@kurocado-studio/formkit-ui-react-renderer';
import { Input as InputFieldFromMyDesignSystem } from '@kurocado-studio/systemhaus-react';
import React from 'react';

import { KUROCADO_STUDIO_ORGANIZATION_ID_FORMKIT } from '../config/constants';

function UsingMyDesignSystem(properties: {
  question: Question;
}): React.ReactNode {
  const { question } = properties;

  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useFormKitTextNode({ question });

  return (
    <>
      <label className={'prose prose-md'} {...labelProps} />
      <InputFieldFromMyDesignSystem {...inputProps} />
      <p className='block w-full' {...descriptionProps} />
      <span className='block w-full text-red-700' {...errorMessageProps} />
    </>
  );
}

const componentOverwrites: FormKitNodeVariantMap = {
  // since we are adding our own custom input using FormKit hooks
  [VariantEnum.TEXT]: UsingMyDesignSystem,
};

const MyFormKitQuestionNodeMapper = formRendererComposer(componentOverwrites);

export function MyFormKitRenderer(properties: {
  formId: string;
}): React.ReactNode {
  return (
    <FormKitConsumerForm
      key={properties.formId}
      organizationId={KUROCADO_STUDIO_ORGANIZATION_ID_FORMKIT}
      formId={properties.formId}
    >
      {({ question, indexInCollection }) => (
        <MyFormKitQuestionNodeMapper
          key={indexInCollection}
          questionNode={question}
        />
      )}
    </FormKitConsumerForm>
  );
}
