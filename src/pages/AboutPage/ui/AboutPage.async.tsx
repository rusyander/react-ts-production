import { lazy } from 'react'

// export const AboutPageAsync = lazy(
//   () =>
//     new Promise((resolve) =>
//       import("./AboutPage")
//     )
// );

export const AboutPageAsync = lazy(async () => await import('./AboutPage'))
