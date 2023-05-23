import React, { useState } from 'react';
// import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
// import { Counter } from 'entities/Counter';
// import { Input } from 'shared/ui/Input/Input';

export default function MainPage () {
  const { t } = useTranslation('main');

  const [value, setValue] = useState('');
  const onChange = (value: string) => {
    setValue(value);
  };
  return (
    <div>
      {t('Главная cтраница')}
      {/* <Counter /> */}
      {/* <BugButton /> */}
      {/* <Input value={value} onChange={onChange} placeholder="test main" /> */}
    </div>
  );
}
