export const addMusic = (name) => dispatch =>{
    dispatch( {
        type: "ADD_MUSIC",
        payload: name
    });
}
export const delMusic = (name) =>{
    return {
        type : "DEL_MUSIC",
        payload: name
    };
}
export const addVideos = (name) => dispatch =>{
    dispatch( {
        type: "ADD_VIDEOS",
        payload: name
    });
}
export const delVideos = (name) =>{
    return {
        type : "DEL_VIDEOS",
        payload: name
    };
}