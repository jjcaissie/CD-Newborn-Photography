
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/angular-app/home",
    "route": "/angular-app"
  },
  {
    "renderMode": 2,
    "route": "/angular-app/home"
  },
  {
    "renderMode": 2,
    "route": "/angular-app/about"
  },
  {
    "renderMode": 2,
    "route": "/angular-app/contact"
  },
  {
    "renderMode": 2,
    "route": "/angular-app/details"
  },
  {
    "renderMode": 2,
    "route": "/angular-app/portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 41984, hash: 'b916a88f97c655cc998a8970b24d6e80a6777edb25a33871f67f352f80c05f20', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 24543, hash: '21c1d65237d65d3c996c870d0713f14fbd71235c8220e4f04389a884d68322c7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 48053, hash: 'a70efe9b6129ae216a8687e83c8b441fae2ce5d7dbc34aa4a705414fefee9195', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 47705, hash: 'f682948b662692743da3d7476541d283e04be67b595e23aaec1846fd151d30ce', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'details/index.html': {size: 48986, hash: 'a9ea69330caf7e3db7aec7f3b20d01fa309ff9cec27f074211557621a1230a5f', text: () => import('./assets-chunks/details_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 49167, hash: '3da987d4c9fc453199c4a8eacaf2cc0c5883e0a8ba03a7f979475d5f2955d5a7', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 111753, hash: '35366b7eb17817be6fdcfc4bd35cda22ac4f5eb517ff6c4a5c180428ef5372bf', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-P3HTH36L.css': {size: 18571, hash: '/fybaPS/IXs', text: () => import('./assets-chunks/styles-P3HTH36L_css.mjs').then(m => m.default)}
  },
};
