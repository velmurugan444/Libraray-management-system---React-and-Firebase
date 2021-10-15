import { combineReducers } from 'redux';
import Addstudentreducer from './addstudent_reducer';
import Adminreducer from './adminReducer';
import Categoryreducer from './category_reducer';
import Studentreducer from './studentReducer';

const reducers = combineReducers({
    admin: Adminreducer,
    student: Studentreducer,
    addstudent: Addstudentreducer,
    category: Categoryreducer,
})
export default reducers;