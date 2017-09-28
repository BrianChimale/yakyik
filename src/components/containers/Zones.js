import React, { Component } from 'react'
import ZoneList from '../presentation/ZoneList'
import styles from './styles'
import superagent from 'superagent'

class Zones extends Component {

    constructor(){
        super()
        this.state = {
            zones:{
                name: '',
                zipCodes: '',
                numComments: 15
            },
            list: []
        }
    }

    //Override this method to make API requests in it to
    componentDidMount(){
        console.log('componentDidMount: ');

        //superagent makes the API requests from the backend
        superagent
        .get('/api/zone')
        .query(null)
        .set('Accept', '/application/json')
        .end((err, response) => {

            if(err){
                alert('ERROR: ' +err);
                return
            }

            //responce.body contains the required data from the database
            console.log(JSON.stringify(response.body.results))
            //retrieve the results from the body
            let results = response.body.results
            this.setState({
                list: results
            })

        });
    }

    updateName(event){
        let updatedZone = Object.assign({}, this.state.zones);
        updatedZone[event.target.id] = event.target.value;
        this.setState({
            zones: updatedZone
        })
    }

    updateZipCode(event){
        let updatedZones = Object.assign({}, this.state.zones);
        updatedZones[event.target.id] =  event.target.value;
        this.setState({
            zones: updatedZones
        })
    }

    addZone(){
        let updatedList = Object.assign([], this.state.list);
        updatedList.push(this.state.zones);
        this.setState({
            list: updatedList
        })
    }

    render(){
/*

        const firstZone = {name:'Zone 1', zipCode:'10012', numComments:10}
        const secondZone = {name:'Zone 2', zipCode:'10034', numComments:20}
        const thirdZone = {name:'Zone 3', zipCode:'10056', numComments:30}
        const fourthZone = {name:'Zone 4', zipCode:'10078', numComments:40}

        return (
            <div>
                <ol>
                    <li><ZoneList zone={firstZone} /></li>
                    <li><ZoneList zone={secondZone} /></li>
                    <li><ZoneList zone={thirdZone} /></li>
                    <li><ZoneList zone={fourthZone} /></li>
                </ol>
            </div>
        )

*/
//The ES5 equivalent of the below ES6 line is:
//      const listItems = this.state.list.map(function(zone, i){})
        const listItems = this.state.list.map((zone, i) => {
            return (
                <li key={i}><ZoneList currentZone={zone} /></li>
            )
        })
        const style = styles.zones

        return (
            <div>
                <ol>
                    {listItems}
                </ol>
                <div style={style.zonesBox}>
                    <input id="name" onChange={this.updateName.bind(this)} className="form-control" type="text" placeholder="Zone Name" /><br />
                    <input id="zipCode" onChange={this.updateZipCode.bind(this)} className="form-control" type="number" placeholder="Zip Codes" /><br />
                    <button onClick={this.addZone.bind(this)} className="btn btn-danger">Add Zone</ button>
                </div>
            </div>
        )

    }

}

export default Zones