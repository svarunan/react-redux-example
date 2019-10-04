import music from './music';
import videos from './videos';
import {combineReducers} from 'redux';

const allReducers = combineReducers({music,videos});
export default allReducers;