import React, { Component } from 'react'
import TableComponent from './Table'

class InfiniteComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            tableData : []
        }
    }

    componentWillMount = () => {
        fetch('https://randomuser.me/api/?results=5000',{method: 'GET'}).then((response)=>response.json())
            .then(response=>{
                this.setState({tableData: response.results})
            })
    }

    render = () => {
        const {tableData} = this.state
        return (
            <div>
                { tableData.length && <TableComponent tableData={tableData}/>}
            </div>
        )
    }
}

export default InfiniteComponent
