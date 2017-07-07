import React from 'react'
import ReactDOM from 'react-dom'
import './app.css'


var Likebutton =React.createClass({
    componentWillReceiveProps:function(nextPorops){       
        // console.log(nextPorops)
        // console.log("this only exist in child componet, During the Page runing ")
    },
    getInitialState:function(){
        return {
            liked:false
        }
    },
    handleClick:function(){
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
    },
    render:function(){
        // console.log("Child component Rendering")
         if(!this.state.liked)
            return (           
                <div><button onClick ={this.handleClick} className="mybutton">Like</button></div>
            )
        else{
            return(
                <div><button onClick ={this.handleClick} className="mybutton">disLike</button></div>
            )
        }
    }
    
})
var Lifecyle =React.createClass({
    getDefaultProps:function(){
        // console.log("Here is the LifeCyle of init React component")
        // console.log('1st-step-- getDefaultProps, Get Default Props from parent Node');
        return {
            name :'nodeBook'
        }
    },
    getInitialState:function(){
        // console.log('2nd-step-- getInitialState, Get Or Set up component initial or default state');
        return {
            like:0
        }
    },
    addLikes:function(){
        this.setState({
            like :this.state.like+1
        });
    },
    removeLikes:function(){
        this.setState({
            like :this.state.like-1
        });
    },
    componentWillMount:function(){
        //console.log('3rd-step-- componentWillMount, Before Render, you can Change your state, e.g. here, I set the default Like =100');
        this.setState({
            like :this.state.like+100
        })
    }, 
    render:function(){
       // console.log('4th-step-- render, Here We go, Render in the Virtual DOM');
       // console.log("Rendering Rendering");
        return(
        <div>
            <p><strong>This File is put here to let you understand the Life Cyle of React, Please press F12 to see the log lines</strong></p>
            <h2>Here I have create a Child component, to involve other lifecyle functions</h2>
            <h4>Hello {this.props.name},</h4>
            <h4> Your Name is Awesome, there are {this.state.like} Likes</h4>
            <Likebutton likeHandle={this.addLikes} unLike={this.removeLikes}/>
        </div>
        )
    },
    componentDidMount:function(){
       // console.log('5th-step-- componentDidMount, after you have render in the Virtual DOM, you could doing someting here')
    },
    shouldComponentUpdate:function(nextPorops,nextState){ 
       // console.log("During the Page Runing, this is the 1st step. which checked the state and props, just checking, can not modify them"); 
        //this step is always used to check up the Username or other things 
        return nextPorops.name===this.props.name;
    },
    componentWillUpdate:function(){
        // console.log("During the Page Runing, this is the 2nd step, this component will update")
    },
    componentDidUpdate:function(){
         //console.log("During the Page Runing, this is the 4th step, this component has updated")
    },
    componentWillUnmount:function(){
       // console.log("this componet is being Destroyed")
    }
})
ReactDOM.render(<Lifecyle/>,document.getElementById('root'),function(){
    //console.log('6th-step--ReacDOM.render, this is the last Step, to Render Element in the real DOM tree')
})