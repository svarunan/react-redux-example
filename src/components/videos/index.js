import React from 'react';
import {connect} from 'react-redux';
import {delVideos} from '../../redux/actions'
class Videos extends React.Component{
    del(index){
        this.props.delVideos(index);
    }  
    displayLib(){
        if(this.props.videos.length == 0){
            return;
        }
        return this.props.videos.map( (item, index)=>{
            return (
            <li key={index} onClick={()=>{this.del(index)}}>
                {item}
            </li>
            );
        })
    }
    render(){
        console.log("Videos render", this.props);
        return (
            <div>
                Videos Total list
                <ul>
                    {this.displayLib()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        videos:state.videos
    };
}

export default connect(mapStateToProps, {delVideos:delVideos})(Videos);
