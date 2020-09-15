export const initialState = {
    data: []
};

//Reducer -> Listens to the data layer
const reducer = (state = initialState, action) => {
    //Dispatch the action and listens to the action
    console.log(action.data);
    //Action -> type, [payload]
    switch (action.type) {
        case 'DISP_DATA':
            //Listener
            return {
                ...state,
                data: action.data
            }
        default:
            return state;
    }
}

export const getData = state => state.data;
export default reducer;