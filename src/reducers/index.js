import { conbineReducers } from 'redux';

import events from './events';
import operaionLogs from './operationLogs';

export default conbineReducers({ events, operaionLogs });
