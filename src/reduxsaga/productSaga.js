import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { API_DATA, API_ERROR, DATA_REQUEST } from "../redux/constant";

function* dataRequestCall() {
  try {
    const response = yield call(axios.get, `http://localhost:3005/resume`);

    if (response.status === 200) {
      const data = yield response.data;

      yield put({ type: API_DATA, data });
    } else {
      yield put({ type: API_ERROR, error: "Api request error" });
    }
  } catch (error) {
    yield put({ type: API_ERROR, error: error.message });
  }
}

function* productSaga() {
  yield takeLatest(DATA_REQUEST, dataRequestCall);
}

export default productSaga;
