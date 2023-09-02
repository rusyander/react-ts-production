import { lazy } from 'react';

// export const AboutPageAsync = lazy(
//   () =>
//     new Promise((resolve) =>
//       import("./AboutPage")
//     )
// );

export const SettingPageAsync = lazy(async () => await import('./SettingPage'));
