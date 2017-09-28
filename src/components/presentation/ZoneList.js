import React, { Component } from 'react'
import styles from './styles'

class ZoneList extends Component{

    render(){
        const style = styles.zone;
        const zipCode = this.props.currentZone.zipCodes.map((zipCode, i) => {
            return(

                zipCode + ", "
                
            )
        })

        return (
            <div style={style.container}>
                <h2 style={style.header}>
                    <a style={style.link} href="#">{this.props.currentZone.name}</a>
                </h2>
                <span className="detail">{zipCode}</span><br />
                <span className="detail">{this.props.currentZone.numComments} comments</span>
            </div>
        )
    }
}
export default ZoneList