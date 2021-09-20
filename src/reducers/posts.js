const initialState = {
    posts: []
}

const reducer = (state = initialState, action) =>{
    console.log("post reducer", action, state);
    return state;
}

export default reducer;