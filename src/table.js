import React from 'react';
import { Table } from 'semantic-ui-react';

export const PopulationTable = (props) => (
    <div className='populationTable'>
        <h1 className='tableH1'>Population table, age 18-30, year 1990</h1>
        <Table  className='scale-in-hor-center' textAlign='center'  basic='very' celled>
            <Table.Header>
                <Table.Row >
                    <Table.HeaderCell>Age</Table.HeaderCell>
                    <Table.HeaderCell>Male</Table.HeaderCell>
                    <Table.HeaderCell>Female</Table.HeaderCell>
                    <Table.HeaderCell>Total</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {props.population.map(row => (
                    <Table.Row   key={row.age}>
                        <Table.Cell>{row.age}</Table.Cell>
                        <Table.Cell>{row.males}</Table.Cell>
                        <Table.Cell>{row.females}</Table.Cell>
                        <Table.Cell>{row.total}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    </div>
);