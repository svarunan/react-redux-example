
const music = (state=[], action) =>{
    switch(action.type){
        case "ADD_MUSIC":
            console.log("Reducer ADD_MUSIC");
            state.push(action.payload);
            console.log("state ", state);
            return [...state];
        case "DEL_MUSIC":
            state = state.filter(item=>{
                return item != state[action.payload]
            });       
            return [...state];
        default:
            return state;
    }
}
export default music;