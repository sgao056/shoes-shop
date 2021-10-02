import React, { Component } from 'react'
import {CSSTransition,TransitionGroup} from 'react-transition-group' 
import Toolbox from './Toolbox'
import Product from './Product'
import axios from '../common/axios'
import Panel from  './Panel'
import AddInventory from './AddInventory'

export default class Products extends Component {
    state = {
        products: [],
        productsCopy:[]
    }
    
    componentDidMount(){
        axios.get('/products').then(response=>{
            this.setState({
                products: response.data,
                productsCopy: response.data
            })
        })
    }

    search = (text)=>{
        let _products = [...this.state.productsCopy]
        _products = _products.filter(p=>{
            const matchArray = p.name.match(new RegExp(text,'gi'))
            return !!matchArray
        })
        this.setState({
            products:_products
        })
    }

    ToAdd = ()=>{
        Panel.open({
            component: AddInventory,
            callback:data=>{
                if(data){
                    this.addData(data)
                }
            }
        })
    }

    addData = product => {
        var _products=[...this.state.products]
        _products.push(product)
        var _productsCopy=[...this.state.productsCopy]
        _products.push(product)
        this.setState({
            products: _products,
            productsCopy: _productsCopy
        })
    }

    updateData = product => {
        var _products=[...this.state.products]
        var _index = _products.findIndex(p=>p.id===product.id)
        _products.splice(_index,1,product)
        var _productsCopy=[...this.state.products]
        var _indexCopy = _products.findIndex(p=>p.id===product.id)
        _products.splice(_indexCopy,1,product)
        this.setState({
            products: _products,
            productsCopy: _productsCopy
        })
    }

    deleteData = id => {
        var _products = this.state.products.filter(p => p.id !== id)
        var _productsCopy = this.state.productsCopy.filter(p => p.id !== id)
        this.setState({
            products: _products,
            productsCopy: _productsCopy
        })
    }

    render() {
        return (
            <div>
                <Toolbox search={this.search}/>
                <div className='products'>
                    <div className="columns is-multiline is-desktop">
                        <TransitionGroup component={null}>
                            {
                                this.state.products.map(p=>{
                                    return (
                                        <CSSTransition classNames='product-fade' timeout={{enter:300, exit:300}} key={p.id}>
                                            <div className="column is-3" key={p.id}>
                                                <Product product={p} updateData={this.updateData} deleteData={this.deleteData}/>
                                            </div>
                                        </CSSTransition>
                                    )
                                })
                            }
                        </TransitionGroup>
                    </div>
                    <button className="button is-primary add-btn" onClick={this.ToAdd}>Add</button>
                </div>
            </div>
        )
    }
}

