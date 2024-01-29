import React, { Component } from 'react';
import { rowData } from './appData';

const ProductContext = React.createContext();

export default class Context extends Component {

     state = {
        Alldata : rowData
     }
    render () {
        console.log(Alldata);
        return (
            <div> 

            </div>
        )
    }
}