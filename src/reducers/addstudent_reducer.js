const Addstudentreducer = (state = { data: "" }, action) => {
    switch (action.type) {
        case "INSERT_SUCCESS": return { data: action.payload };
        case "INSERT_FAILED": return { data: action.payload };
        default: return state;
    }
}
export default Addstudentreducer;