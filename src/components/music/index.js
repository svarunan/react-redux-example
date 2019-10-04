import React from 'react';
import {connect} from 'react-redux';
import {delMusic} from '../../redux/actions'

class Music extends React.Component{
    del(index){
        this.props.delMusic(index);
    }
    displayLib(){
        if(this.props.music.length == 0){
            return;
        }
        return this.props.music.map( (item, index)=>{
            return (
            <li key={index} onClick={()=>{this.del(index)}}>
                {item}
            </li>
            );
        })
    }
    render(){
        console.log("Music render", this.props);
        return (
            <div>
                Music Total list
                <ul>
                    {this.displayLib()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        music:state.music
    };
}

export default connect(mapStateToProps, {
    delMusic:delMusic
})(Music);
