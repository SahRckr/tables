import React, { Component } from 'react'
import TableComponent from './Table'
import {Loader} from 'semantic-ui-react' 

class InfiniteComponent extends Component {

    componentWillMount = () => {
        this.props.getData()
    }

    render = () => {
        const {tableData} = this.props
        return tableData.length ? <TableComponent tableData={tableData}/> : <Loader active inline='centered'/>       
    }
}

export default InfiniteComponent
