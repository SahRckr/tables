import React, { Component } from 'react'
import { Container, Grid, Menu, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import InfiniteComponent from './Component/InfiniteComponent'
import PaginatedComponent from './Component/PaginatedComponent'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeItem: 'Infinite'
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  getSegment = (activeItem) => {
    if(activeItem === 'Infinite'){
      return (
        <InfiniteComponent/>
      )
    } else {
      return (
        <PaginatedComponent/>
      )
    }
  }

  render() {
    const { activeItem } = this.state
    return (
      <Container>
        <br />
        <Grid>
          <Grid.Column stretched width={12}>
            {this.getSegment(activeItem)}
          </Grid.Column>

          <Grid.Column width={4}>
            <Menu fluid vertical tabular='right'>
              <Menu.Item name='Infinite' active={activeItem === 'Infinite'} onClick={this.handleItemClick} />
              <Menu.Item name='Paginated' active={activeItem === 'Paginated'} onClick={this.handleItemClick} />
            </Menu>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default App;
