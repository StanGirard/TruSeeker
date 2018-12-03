import React, { Component } from 'react'
import '../App.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import FlexView from 'react-flexview'



class MenuTest extends Component {
    constructor(props) {
        super(props);
         // this is the constructor
        this.state = {
            activeItem: ''
            
        }


        // this is the state of the component, you can add anything you want.
    }
    componentDidMount() {
        // Once the component is mounted, do something
        if(this.props.user!==null){
            this.setState({user:this.props.user})
        }

    }

    componentWillUnmount() {
        // Does something right before the component gets unmounted.
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name }, this.props.history.push( name))

    render() {
        // You can add Code here that will be executed at each render
        return (
            <Menu>
                <Menu.Item
                    name='/'
                    active={this.state.activeItem === '/'}
                    onClick={this.handleItemClick}
                >
                    All News
        </Menu.Item>

            <Menu.Item
                    name='/create'
                    active={this.state.activeItem === '/create'}
                    onClick={this.handleItemClick}
                >
                    Add News
        </Menu.Item>
        <Menu.Item
                    name='/register'
                    active={this.state.activeItem === '/register'}
                    onClick={this.handleItemClick}
                >
                    Register
        </Menu.Item>
                <Menu.Item
                    name='/fay'
                    active={this.state.activeItem === '/fay'}
                    onClick={this.handleItemClick}
                >
                    Login
        </Menu.Item>
        

                <Menu.Item name='/nadia' active={this.state.activeItem === '/nadia'} onClick={this.handleItemClick}>
                    Nadia
        </Menu.Item>

                <Menu.Item
                    name='/louis'
                    active={this.state.activeItem === '/louis'}
                    onClick={this.handleItemClick}
                >
                    Louis
        </Menu.Item>
               
                <Menu.Item
                    name='/stan'
                    active={this.state.activeItem === '/stan'}
                    onClick={this.handleItemClick}
                >
                    Stan
        </Menu.Item>
            </Menu>

        )
    }
}

export default withRouter(connect(
    (state) => ({ text: state.example.example.text }), // Here are the variables to which you want to subscribe in the store
    {} // Here are the functions that dispatch an action
)(MenuTest))

