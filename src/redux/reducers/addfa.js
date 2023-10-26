const addFa = [];

const addFav = (state = addFa, action) => {
    switch (action.type) {
        case "ADDFAV" : return [
            ...state,
            action.payload
        ]
        break;

        case "DELFAV" :
            return state = state.filter((x)=>{
                return x.id !== action.payload.id
            })
        break;

        default: return state;
        break;

        
    }
}

export default addFav;