import { Card } from '@kurocado-studio/systemhaus-react';
import React from 'react';

import { MyFormKitRenderer } from './components/FormKitFormRenderer';
import { KUROCADO_STUDIO_DEMO_LONG_FORM_ID } from './config/constants';
import { themeOptions } from './config/themeOptions';

export function Demo() {
  const [formId, setFormId] = React.useState<string>(
    KUROCADO_STUDIO_DEMO_LONG_FORM_ID,
  );

  const handleFormIdOptionChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setFormId(value);
  };

  return (
    <Card className='mx-auto max-w-screen-lg'>
      <Card.Header>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div className='relative mt-2 inline-block'>
          <select
            value={formId}
            onChange={handleFormIdOptionChange}
            className='focus:shadow-outline prose prose-sm block w-full appearance-none rounded rounded-full border border-gray-200 bg-white px-4 py-2 pr-8 leading-tight hover:border-gray-400 focus:outline-none'
          >
            {themeOptions.map((formOption) => (
              <option key={formOption.value} value={formOption.value}>
                {formOption.label}
              </option>
            ))}
          </select>
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
            <svg
              className='h-4 w-4 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
            </svg>
          </div>
        </div>
      </Card.Header>
      <Card.Body className='space-y-4'>
        <MyFormKitRenderer formId={formId} />
        <button
          disabled
          className='mt-8 cursor-not-allowed rounded rounded-full bg-blue-500 px-4 py-2 font-bold text-white opacity-50'
        >
          Validate (coming soon)
        </button>
      </Card.Body>
      <Card.Footer>
        Created with <a href='https://kurocado.studio'>Kurocado Studio</a>
      </Card.Footer>
    </Card>
  );
}
