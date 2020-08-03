export default {
    setConsName(state, consName) {
        state.consName = consName;
    },
    setType(state, type) {
        state.type = type;
    },
    setErrorCode(state, error) {
        state.error = error;
    },
    setData(state, data) {
        state[state.type] = data;
    }
}