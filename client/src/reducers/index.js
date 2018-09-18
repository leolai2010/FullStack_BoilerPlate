import { combineReducers } from 'redux';
import CeramicReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';

 const rootReducer = combineReducers({
    ceramics: CeramicReducer,
    form: formReducer
 });

 export default rootReducer;