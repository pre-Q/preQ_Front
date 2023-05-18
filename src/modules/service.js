import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, { createRequestActionType } from "../lib/createRequestSaga";
import * as serviceAPI from '../lib/api/service';

const [SAVE_QUESTION, SAVE_QUESTION_SUCCESS, SAVE_QUESTION_FAILURE] = createRequestActionType(
    'service/SAVE_QUESTION',
);
const [GET_QUESTION, GET_QUESTION_SUCCESS, GET_QUESTION_FAILURE] = createRequestActionType(
    'service/GET_QUESTION',
);
const [GET_ANSWER, GET_ANSWER_SUCCESS, GET_ANSWER_FAILURE] = createRequestActionType(
    'service/GET_ANSWER',
);


export const saveQuestion = createAction(SAVE_QUESTION, ({ question, answer }) => ({
    question,
    answer,
}));

export const getQuestion = createAction(GET_QUESTION);

export const getAnswer = createAction(GET_ANSWER, ({ cletterId }) => ({
    cletterId
}));

// 지원 문항, 문항 답변 저장
const saveQuestionSaga = createRequestSaga(SAVE_QUESTION, serviceAPI.saveCoverLetter);
// 지원 문항 리스트 가져오기
const getQuestionSaga = createRequestSaga(GET_QUESTION, serviceAPI.getCoverLetter);
// 예측 질문 리스트 가져오기
const getAnswerSaga = createRequestSaga(GET_ANSWER, serviceAPI.getPreQ);


export function* serviceSaga() {
    yield takeLatest(SAVE_QUESTION, saveQuestionSaga)
    yield takeLatest(GET_QUESTION, getQuestionSaga)
    yield takeLatest(GET_ANSWER, getAnswerSaga)
}

const initialState = {
    questions: null,
    questionsError: null,
    answers: null,
    answersError: null,
    saving: null,
    savingError: null,
};

const service = handleActions(
    {
        // 지원서 문항 및 답변 저장
        [SAVE_QUESTION_SUCCESS]: (state, { payload: saving }) => ({
            ...state,
            saving,
            savingError: null,
        }),
        [SAVE_QUESTION_FAILURE]: (state, { payload: error }) => ({
            ...state,
            savingError: error,
        }),
        // 지원서 문항 리스트 조회
        [GET_QUESTION_SUCCESS]: (state, { payload: questions }) => ({
            ...state,
            questions,
            questionsError: null,
        }),
        [GET_QUESTION_FAILURE]: (state, { payload: error }) => ({
            ...state,
            questionsError: error,
        }),
        // 예측 질문 조회
        [GET_ANSWER_SUCCESS]: (state, { payload: answers }) => ({
            ...state,
            answers,
            answersError: null,
        }),
        [GET_ANSWER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            answersError: error
        })
    },
    initialState
);

export default service;