import React, { Component } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import InfiniteComponent from './Component/InfiniteComponent'
import PaginatedComponent from './Component/PaginatedComponent'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: 'Paginated',
      page: 1,
      tableData: []
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  getData = (page) => {
    this.setState({tableData: []})
    const url = page ? 'https://randomuser.me/api/?page='+page+'&results=100' : 'https://randomuser.me/api/?results=5000'
    fetch(url,{method: 'GET'}).then((response)=>response.json())
    .then(response=>{
        this.setState({tableData: response.results})
    })
  }

  updatePage = (e, increment) => {
    e.preventDefault()
    let {page} = this.state
    if(increment){
      page = page + 1
    } else {
      page = e.target.value || page -- 
    }
    this.setState({page})
  }

  getSegment = (activeItem) => {
    if(activeItem === 'Infinite'){
      return (
        <InfiniteComponent 
          tableData={this.state.tableData}
          getData={this.getData}/>
      )
    } else {
      return (
        <PaginatedComponent 
          tableData={this.state.tableData} 
          getData={this.getData} 
          page={this.state.page}
          updatePage={this.updatePage}/>
      )
    }
  }

  render() {
    const { activeItem } = this.state
    return (
      <Container>
        <br />
        <Menu widths={2}>
          <Menu.Item name='Infinite' active={activeItem === 'Infinite'} onClick={this.handleItemClick} />
          <Menu.Item name='Paginated' active={activeItem === 'Paginated'} onClick={this.handleItemClick} />
        </Menu>
        <Container>
          {this.getSegment(activeItem)}         
        </Container>
      </Container>
    )
  }
}

export default App;
