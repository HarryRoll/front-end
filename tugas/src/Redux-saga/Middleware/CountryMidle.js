import {call,put} from 'redux-saga/effects'
import apiCountry from '../../api/countriesApi'
import { GetCountrySuccess,GetCountryFailed, DelCountrySuccess, DelCountryFailed, AddCountrySuccess, AddCountryFailed } from '../Action/CountryAction'

function* handleGetCountry(){
    try {
        const result = yield call(apiCountry.list)
        yield put(GetCountrySuccess(result))
    } catch (error) {
        yield put(GetCountryFailed(error))
    }
}

function* handleDelCountry(action){
    const{payload} = action
    try {
        const result = yield call(apiCountry.deleted,payload)
        yield put(DelCountrySuccess(payload))
    } catch (error) {
        yield put(DelCountryFailed(error))
    }
}

function* handleAddCountry(action){
    const {payload} = action
    try {
        const result = yield call(apiCountry.create,payload)
        yield put(AddCountrySuccess(result.data))
    } catch (error) {
        yield put(AddCountryFailed(error))
    }
}

export {
    handleGetCountry,
    handleDelCountry,
    handleAddCountry
}