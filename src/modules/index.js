import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import service, { serviceSaga } from "./service";

const rootReducer = combineReducers({
    auth,
    loading,
    service,
})

export function* rootSaga() {
    yield all([authSaga(), serviceSaga()]);
}

export default rootReducer;