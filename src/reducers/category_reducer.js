const Categoryreducer = (state = { data: "" }, action) => {
    switch (action.type) {
        case "DATA_SUCCESS": return { data: action.payload };
        case "DATA_FAILED": return { data: action.payload };
        default: return state;
    }
}
export default Categoryreducer;