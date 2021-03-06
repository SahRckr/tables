import React, { Component } from 'react'
import TableComponent from './Table'
import {Loader, Button, Input} from 'semantic-ui-react' 

class PaginatedComponent extends Component {
    constructor(props){
        super(props)
        this.state= {
            inputPage : null
        }
    }

    componentWillMount = () => {
        this.props.getData(this.props.page)
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.page!==this.props.page){
            nextProps.getData(nextProps.page)
        }
    }

    render = () => {
        const {tableData, page} = this.props
        return (
            <div>
                <Input 
                    type='number' 
                    min={1}
                    placeholder='Enter Page Number' 
                    onChange={e=>this.setState({inputPage: e.target.value})} 
                    action={
                        <Button 
                            color='teal' 
                            onClick={(e)=>this.props.updatePage(e, null, this.state.inputPage)}>Go</Button>} 
                />
                <Button.Group floated="right">
                    <Button secondary disabled={!(page>1)} content='Previous' icon='left arrow' labelPosition='left' onClick={(e)=>this.props.updatePage(e)}/>
                    <Button.Or text={page}/>
                    <Button primary content='Next' icon='right arrow' labelPosition='right' onClick={(e)=>this.props.updatePage(e, true)}/>
                </Button.Group>
                <br/>
                {tableData.length ? <TableComponent tableData={tableData}/> : <Loader active inline='centered'/>}
            </div>
        )
    }
}

export default PaginatedComponent
