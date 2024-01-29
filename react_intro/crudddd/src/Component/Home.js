import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Table, Button } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <div className='container'>
                <h3>CRUD Operations</h3>
                <ProductConsumer>
                    {(value) => {
                        return(
                            <Table size="sm" variant="dark" striped bordered hover> </Table>
                            
                            
                        )
                            
                        
                    }}
                </ProductConsumer>
            </div>
        );
    }
}