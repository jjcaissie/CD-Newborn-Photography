
export default {
  basePath: '/CD-Newborn-Photography',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
