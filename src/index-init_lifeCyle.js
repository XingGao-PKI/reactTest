import React from 'react'
import ReactDOM from 'react-dom'

var Lifecyle =React.createClass({
    getDefaultProps:function(){
        console.log("Here is the LifeCyle of init React component")
        console.log('1st-step-- getDefaultProps, Get Default Props from parent Node');
        return {
            name :'nodeBook'
        }
    },
    getInitialState:function(){
        console.log('2nd-step-- getInitialState, Get Or Set up component initial or default state');
        return {
            like:0
        }
    },
    addLikes:function(){
        this.setState({
            like :this.state.like+1
        })
    },
    componentWillMount:function(){
        console.log('3rd-step-- componentWillMount, Before Render, you can Change your state, e.g. here, I set the default Like =100')
        this.setState({
            like :this.state.like+100
        })
    }, 
    render:function(){
        console.log('4th-step-- render, Here We go, Render in the Virtual DOM')

        return(
        <div>
            <p><strong>This File is put here to let you understand the Life Cyle of React, Please press F12 to see the log lines</strong></p>
            <h4>Hello {this.props.name},</h4>
            <h4> Your Name is Awesome, there are {this.state.like} Likes</h4>
            <p><button onClick ={this.addLikes}>Like</button></p>
        </div>
        )
    },
    componentDidMount:function(){
        console.log('5th-step-- componentDidMount, after you have render in the Virtual DOM, you could doing someting here')
    }

})

ReactDOM.render(<Lifecyle/>,document.getElementById('root'),function(){
    console.log('6th-step--ReacDOM.render, this is the last Step, to Render Element in the real DOM tree')
})