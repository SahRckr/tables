import React, { Component } from 'react'
import { Table, Header, Image } from 'semantic-ui-react'

const capitalizedStyle = {
    textTransform : 'capitalize'
}

const TableComponent = ({ tableData }) => (
    <Table basic='very' celled collapsing>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Address</Table.HeaderCell>
                <Table.HeaderCell textAlign='right'>Notes</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {
                tableData.map(tableElement=>{
                    const {picture, name, location, email, login} = tableElement
                    return (
                        <Table.Row key={login.username+email}>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image src={picture.thumbnail} shape='rounded' size='mini' />
                                    <Header.Content style={capitalizedStyle}>
                                        {name.title}. {name.first} {name.last}
                                        <Header.Subheader>
                                            {email}
                                        </Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>

                            <Table.Cell>
                                {location.street}, {location.city}, {location.state}, {location.postcode}
                            </Table.Cell>

                        </Table.Row>
                    )
                })
            }
        </Table.Body>
    </Table>
)

export default TableComponent