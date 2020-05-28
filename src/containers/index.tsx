import Login from './login'

import {loginTypes} from '../store/action'
import { all } from 'redux-saga/effects'
import watchSaga from '../store/saga'

const allTypes = [...loginTypes];

export function* rootSaga(){
    yield all([watchSaga(allTypes)])
  }

export {
    Login
}