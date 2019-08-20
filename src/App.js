import React, { Component } from 'react';

import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import { inject, observer } from 'mobx-react';

export default
@inject('store')
@observer
class App extends Component {
  componentDidMount() {
    this.props.store.todoStore.getTodo();
  }
  render() {
    return (
      <>
        <TodoListTemplate form={<Form />}>
          <TodoItemList />
        </TodoListTemplate>
      </>
    );
  }
}
