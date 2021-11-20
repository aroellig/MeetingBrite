import { combineReducers } from 'redux';


import sessionReducer from './sessions_reducer';
import errors_reducer from './errors_reducer';
import entitiesReducer from './entities_reducer'


const rootReducer = combineReducers({
  session: sessionReducer,
 errors: errors_reducer,
entities: entitiesReducer
})

export default rootReducer;
