
const videos = (state=[], action) =>{
    switch(action.type){
        case "ADD_VIDEOS":
            console.log("Reducer ADD_MUSIC");
            state.push(action.payload);
            console.log("state ", state);
            return [...state];
        case "DEL_VIDEOS":
            state = state.filter(item=>{
                return item != state[action.payload]
            });       
            return [...state];
        default:
            return state;
    }
}
export default videos;