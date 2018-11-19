import logo from "../logo.svg";
import React from "react";
import "../App.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Button, List, Card, Form, Checkbox, Segment, Divider } from "semantic-ui-react";
import { exampleConstants } from "../actions/example.actions";
import Notification from "../components/example.notificationCreation";
import NotificationsSystem from "reapop";
// 2. import reapop theme
import theme from "reapop-theme-wybo";
//import ExampleComponent from '../components/example.component'
import FlexView from "react-flexview/lib";
import Menu from "../components/menu.components";
import Header from "../components/header.component";

const Example = props => {
  const { text, exampleConstants } = props;

  const Person = [
    { name: "Stan", lastname: "Girard" },
    { name: "Fay", lastname: "Unknown" },
    { name: "Stan", lastname: "Girard" },
    { name: "Stan", lastname: "Girard" },
    { name: "Stan", lastname: "Girard" }
  ];
  const CreateList = Person.map(it => {
    return (
      <List.Item>
        <Card>
          <Card.Header> {it.name}</Card.Header>
          <Card.Content> {it.lastname}</Card.Content>
        </Card>
      </List.Item>
    );
  });
  return (
    <div className="App">
      <Header />
      <FlexView
        height={60}
        hAlignContent="center"
        marginTop={10}
        marginBottom={10}
      >
        <Menu />
      </FlexView>
      <FlexView hAlignContent="center">
        <List>{CreateList}</List>
        
      </FlexView>
      <Divider/>
      <FlexView hAlignContent='center'>
      <Segment color='green'>
          <Form>
            <Form.Field>
              <label>First Name</label>
              <input placeholder="First Name" />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder="Last Name" />
            </Form.Field>
            <Form.Field>
              <Checkbox label="I agree to the Terms and Conditions" />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </Segment>
        </FlexView>
      {/* Add your components here */}
    </div>
  );
};

export default withRouter(
  connect(
    state => ({ text: state.example.example.text }),
    { exampleConstants }
  )(Example)
);
