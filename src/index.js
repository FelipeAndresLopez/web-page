import React from 'react';
import ReactDOM from 'react-dom';

import App from '@app/App';

import 'normalize.css';
import '@app/styles.css';
import '@app/media-query.css';
import '@libs/flexboxgrid.css';

const container = document.getElementById('app');

ReactDOM.render(<App />, container);
