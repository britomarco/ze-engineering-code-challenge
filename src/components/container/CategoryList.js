import React, { Component } from 'react'
import Categories from '../static/Categories'
import { getCategories } from '../../api/category-api'

export default class CategoryList extends Component {

    constructor(props) {
        super(props);
        this.state = { categories: [] }
    }

    render() {
        return (
            <Categories categories={this.state.categories} onClick={this.props.onClick} />
        );
    }

    fetchCategories = () => {
        getCategories().then(categories => this.setState({ categories: categories }))
    }

    componentDidMount() {
        this.fetchCategories()
    }
}
