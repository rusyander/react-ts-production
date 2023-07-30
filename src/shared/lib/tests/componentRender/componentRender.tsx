import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
const theme = 'dark';
export interface ComponentRenderProps {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  // asyncReducers?: Record<string, Reducer>;
  asyncReducers?: any;
}

interface TestProviderProps {
  children?: ReactNode;
  options?: ComponentRenderProps;
}

export function TestProvider(props: TestProviderProps) {
  const { children, options = {} } = props;
  const { initialState, asyncReducers, route = '/' } = options;
  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>
          {/* <div className={`'app' ${theme}`}>{children}</div> */}
          <ThemeProvider>
            <div className={`'app' ${theme}`}>{children}</div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
}

export function componentRender(
  component: ReactNode,
  options: ComponentRenderProps = {}
) {
  const { route = '/', initialState, asyncReducers } = options;
  return render(
    // <MemoryRouter initialEntries={[route]}>
    //   <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
    //     <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
    //   </StoreProvider>
    // </MemoryRouter>
    <TestProvider options={options}>{component}</TestProvider>
  );
}
