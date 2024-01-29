import React, { Component } from 'react'
import {rowData} from './appData';

const ProductContext= React.createContext();

class ProductProvider  extends Component {

state = {
    Alldata : rowData
}
    render () {
        console.log(this.state.Alldata);
        return (
            <div> 
<ProductContext.Provider value= {{...this.state}} >
{this.props.children}

</ProductContext.Provider>
            </div>
        ) 
    }
}


const ProductConsumer = ProductContext.consumer ();

export {Product, ProductConsumer}