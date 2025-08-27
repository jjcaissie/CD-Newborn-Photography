
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/CD-Newborn-Photography/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/CD-Newborn-Photography/home",
    "route": "/CD-Newborn-Photography"
  },
  {
    "renderMode": 2,
    "route": "/CD-Newborn-Photography/home"
  },
  {
    "renderMode": 2,
    "route": "/CD-Newborn-Photography/about"
  },
  {
    "renderMode": 2,
    "route": "/CD-Newborn-Photography/contact"
  },
  {
    "renderMode": 2,
    "route": "/CD-Newborn-Photography/details"
  },
  {
    "renderMode": 2,
    "route": "/CD-Newborn-Photography/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 41995, hash: '22a13972de4762bca6418af031beb2cec5bbb51f26483d428208405ce99f522f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 24554, hash: '7bea5cbc4deb4a396a2a255634062786b6d7371fde87b76286a362113a482845', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 48064, hash: 'ace5d2a7ff59a86150d4f9d1771f5758f717ee4b231c46d2be43578823f95530', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 47716, hash: 'cadebff9594ee09015c250c93b6cd70c3cc46179578cae6406803905772cc0b6', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'details/index.html': {size: 48997, hash: '56577c2ab196de50c47e872d3ef952a3321e27a564ed08ad66162e2eb0af6dd6', text: () => import('./assets-chunks/details_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 49178, hash: 'b404ceb767b6587aea1422f02bab5dc2829a31aefa9b444eafa3b7afa56d54df', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 111764, hash: '66cf932202b0cbfb1512baa86a1cff85308656493311198c9d2996912109672e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-P3HTH36L.css': {size: 18571, hash: '/fybaPS/IXs', text: () => import('./assets-chunks/styles-P3HTH36L_css.mjs').then(m => m.default)}
  },
};
