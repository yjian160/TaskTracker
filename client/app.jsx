import React from 'react';
import ReactDOM from 'react-dom';

import store from './redux/stores/store.jsx';
import {Provider} from 'react-redux';
import TaskTrackerContainer from './redux/containers/TaskManagerContainer.jsx';

ReactDOM.render(
<Provider store={store}><TaskTrackerContainer /></Provider>, document.getElementById('app'))