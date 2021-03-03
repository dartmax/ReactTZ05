import {all, fork} from 'redux-saga/effects';
import autocomplete from './autocomplete';


export default function* root() {
  yield all([
    fork(autocomplete),
  ]);
}
