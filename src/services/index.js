import { getData } from './request';

export default async(store) => {
    const consName = store.state.consName,
        type = store.state.type,
        data = await getData(consName, type);

    if (data.error_code) {
        store.commit('setErrorCode', data.error_code);
    }

    store.commit('setData', data)
}