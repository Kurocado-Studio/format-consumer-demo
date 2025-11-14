import {
  FormKitConsumerForm,
  type FormKitNodeVariantMap,
  type Question,
  VariantEnum,
  formRendererComposer,
  // eslint-disable-next-line import/named
  useAriaTextField as useFormKitTextNode,
} from '@kurocado-studio/formkit-ui-react-renderer';
import { Input } from '@kurocado-studio/systemhaus-react';
import { get } from 'lodash-es';
import React from 'react';

import { KUROCADO_STUDIO_ORGANIZATION_ID_FORMKIT } from '../config/constants';

const componentOverwrites: FormKitNodeVariantMap = {
  // since we are adding our own custom input using FormKit hooks
  [VariantEnum.TEXT]: UsingMyDesignSystem,
};

const QuestionNodeMapper = formRendererComposer(componentOverwrites);

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
        <QuestionNodeMapper key={indexInCollection} questionNode={question} />
      )}
    </FormKitConsumerForm>
  );
}

function UsingMyDesignSystem(properties: {
  question: Question;
}): React.ReactNode {
  const { question, variant, variants } = properties.question;

  const name = get(variants, [variant, 'id'], 'unknown');

  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useFormKitTextNode({ label: question, name });

  return (
    <>
      <label className={'prose prose-md'} {...labelProps} />
      <Input {...inputProps} />
      <p className='block w-full' {...descriptionProps} />
      <span className='block w-full text-red-700' {...errorMessageProps} />
    </>
  );
}
