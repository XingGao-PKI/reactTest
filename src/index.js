import React from 'react'
import ReactDOM from 'react-dom'
import './app.css'


class Likebutton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            liked: props.liked||false
        }
        this.handleClick =this.handleClick.bind(this)
    }

    handleClick(){
        if(this.state.liked){
            this.props.unLike();
            this.setState({
                liked:false
            })
        }else{
            this.props.likeHandle();
            this.setState({
                liked:true
            })
        }
    }
    render(){
         if(!this.state.liked)
            return (           
                <div><button onClick ={this.handleClick} className="mybutton">Like</button></div>
            )
        else{
            return(
                <div><button onClick ={this.handleClick} className="mybutton">unLike</button></div>
            )
        }
    }
}
class Lifecyle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            like:0
        }
        this.addLikes=this.addLikes.bind(this);
        this.removeLikes =this.removeLikes.bind(this);
    } 
    addLikes(){
        this.setState({
            like :this.state.like+1
        });
    }
    removeLikes(){
        this.setState({
            like :this.state.like-1
        });
    }
    render(){    
        return(
        <div>
            <p><strong>This File is put here to let you understand the Life Cyle of React, Please press F12 to see the log lines</strong></p>
            <h2>Here I have create a Child component, to involve other lifecyle functions</h2>
            <h4>Hello {this.props.name},</h4>
            <h4> Your Name is Awesome, there are {this.state.like} Likes</h4>
            <Likebutton likeHandle={this.addLikes} unLike={this.removeLikes}/>
        </div>
        )
    }
}
ReactDOM.render(<Lifecyle name ="nodeBook"/>,document.getElementById('root'),function(){
    //console.log('6th-step--ReacDOM.render, this is the last Step, to Render Element in the real DOM tree')
})