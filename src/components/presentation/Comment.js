import React, { Component } from 'react'
import styles from './styles'

class Comment extends Component {

    render(){
        const style = styles.comment

        return(
            <div>
                <p style={style.body}>
                    {this.props.currentComment.body}
                </p>
                <span style={style.username}>{this.props.currentComment.username}</span>
                <span style={style.slash}>|</span>
                <span style={style.timestamp}>{this.props.currentComment.timestamp}</span>
                <hr />
            </div>
        )
    }

}

export default Comment