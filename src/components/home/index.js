import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Music from '../music/';
import Videos from '../videos/';
import {addMusic, addVideos} from '../../redux/actions/';

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            musicSearch:[]
        };
    }
    searchMusicChange = (event) => {
       let str = event.currentTarget.value;
       let match = this.props.music.filter( (item)=>{
            return item.includes(str)
       })
       if(!str){
        match = [];
       }
       this.setState({musicSearch:match});
    }
    displaySearchMusic = () =>{
        return this.state.musicSearch.map((item, index)=>{
            return <li key={index}>{item}</li>
        })
    }
    displaySearchVideos = () =>{

    }
    addMusic = (event) => {
        this.props.addMusic(event.currentTarget.previousElementSibling.value);
    }
    addVideos = (event)=> {
        this.props.addVideos(event.currentTarget.previousElementSibling.value)
    }
    render(){
        console.log("Home render", this.props)
        return(
            <div>
                <div>
                    <h2>Add</h2>
                    <div>
                        <span>Music</span>
                        <input placeholder="Music add"></input>
                        <button onClick={this.addMusic}>Add</button>
                    </div>
                    <div>
                        <span>Videos</span>
                        <input placeholder="Video add"></input>
                        <button onClick={this.addVideos}>Add</button>
                    </div> 
                </div>
                <hr/>
                <div>
                    <h2>Search</h2>
                    <div>
                        <h4>Music</h4>
                        <input placeholder="Music search" onChange={this.searchMusicChange}></input>
                        <ul>
                            {this.displaySearchMusic()}
                        </ul>
                    </div>                   
                </div>
                <hr/>
                <div>
                    <h2>Album library!</h2>
                    <Music/>
                    <Videos/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        music:state.music
    };
}
const mapDispatchToProps = {addMusic, addVideos}

export default connect(mapStateToProps,mapDispatchToProps)(Home);