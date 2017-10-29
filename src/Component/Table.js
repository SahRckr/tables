import React, { Component } from 'react'
import { Table, Header, Image, Icon, Flag } from 'semantic-ui-react'

const capitalizedStyle = {
    textTransform: 'capitalize'
}

const dateFormater = (a) => `${a.getDate()}-${a.getMonth()}-${a.getFullYear()}`

const TableComponent = ({ tableData }) => (
    <Table celled stackable compact='very'>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Bio</Table.HeaderCell>
                <Table.HeaderCell>Addresses</Table.HeaderCell>
                <Table.HeaderCell>Contact</Table.HeaderCell>
                <Table.HeaderCell>Ages</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {
                tableData.map(tableElement => {
                    const { picture, name, location, email, login, gender, phone, cell, nat, dob, registered } = tableElement
                    return (
                        <Table.Row key={login.username + email}>
                            <Table.Cell collapsing>
                                <Header as='h4' image>
                                    <Image src={picture.thumbnail} shape='rounded' size='mini' />
                                    <Header.Content style={capitalizedStyle}>
                                        <Flag name={nat.toLowerCase()}/> <Icon name={gender} /> {name.title}. {name.first} {name.last}
                                        <Header.Subheader>
                                            {login.username}
                                        </Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>

                            <Table.Cell collapsing>
                                <Header as='h4'>
                                    <Header.Content>
                                        <Header.Subheader><b>Postal:&nbsp;&nbsp;</b>{location.street}, {location.city}, {location.state}, {location.postcode}</Header.Subheader>
                                        <Header.Subheader><b>Email:&nbsp;&nbsp;&nbsp;</b>{email}</Header.Subheader>
                                    </Header.Content>
                                </Header>
                                
                            </Table.Cell>

                            <Table.Cell>
                                <Header as='h4'>
                                    <Header.Content>
                                        <Header.Subheader>{phone}</Header.Subheader>
                                        <Header.Subheader>{cell}</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>
                                <Header as='h4'>
                                    <Header.Content>
                                        <Header.Subheader>{`DOB: ${dateFormater(new Date(dob))}`}</Header.Subheader>
                                        <Header.Subheader>{`User Age: ${dateFormater(new Date(registered))}`}</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>

                        </Table.Row>
                    )
                })
            }
        </Table.Body>
    </Table>
)

export default TableComponent