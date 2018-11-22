import React, { Component } from 'react'
import '../App.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container,
        Divider,
        Dropdown,
        Grid,
        Header,
        Image,
        List,
        Menu,
        Segment,} from 'semantic-ui-react'
import FlexView from 'react-flexview'
import logo from '../logo.svg'



class Example extends Component {
    constructor(props) {
        super(props)
        // this is the constructor
        this.state = {
            text: 'Hello World !'
        } // this is the state of the component, you can add anything you want.
    }
    componentDidMount() {
        // Once the component is mounted, do something
    }

    componentWillUnmount() {
        // Does something right before the component gets unmounted.
    }

    render() {
        // You can add Code here that will be executed at each render
        return (
            <FlexView column height={200}>
                {/*<header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <h1 className='App-title'>TruSeeker</h1>
                </header>*/}
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item as='a' header>
                            <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
                            TRUSeeker
                        </Menu.Item>
                        <Menu.Item as='a'>View Articles</Menu.Item>

                        <Dropdown style={{float:'right'}} item simple text='Dropdown'>
                            <Dropdown.Menu >
                                <Dropdown.Item>List Item</Dropdown.Item>
                                <Dropdown.Item>List Item</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Header>Header Item</Dropdown.Header>
                                <Dropdown.Item>
                                    <i className='dropdown icon' />
                                    <span className='text'>Submenu</span>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>List Item</Dropdown.Item>
                                        <Dropdown.Item>List Item</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Item>
                                <Dropdown.Item>List Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Container>
                </Menu>
            </FlexView>


        )
    }
}

export default withRouter(connect(
    (state) => ({ text: state.example.example.text }), // Here are the variables to which you want to subscribe in the store
    {} // Here are the functions that dispatch an action
)(Example))

