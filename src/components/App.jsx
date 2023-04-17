import { nanoid } from 'nanoid';
import { data } from '../data/users';
import { UserList } from './user-list/UserList';
import { Section } from './section/Section';
import { Component } from 'react';
import { Button } from './button/Button';
import { AddUserForm } from './addUserForm/AddUserForm';

export class App extends Component {
  state = {
    isListSown: false,
    users: data,
    isFormShown: false,
  };

  showList = () => {
    this.setState({ isListSown: true });
  };

  deleteUser = id => {
    this.setState(prevState => {
      return { users: prevState.users.filter(user => user.id !== id) };
    });
  };

  showForm = () => {
    this.setState({ isFormShown: true });
  };

  addUser = data => {
    const newUser = { id: nanoid(), ...data };
    this.setState(prevState => {
      return { users: [...prevState.users, newUser] };
    });
  };

  closeForm = () => {
    this.setState({ isFormShown: false });
  };

  render() {
    const { isListSown, users, isFormShown } = this.state;
    return (
      <>
        <Section title="List of users">
          {!isListSown ? (
            <Button text="Show list of users" clickHandler={this.showList} />
          ) : (
            <>
              <UserList users={users} deleteUser={this.deleteUser} />
              {isFormShown ? (
                <AddUserForm
                  addUser={this.addUser}
                  closeForm={this.closeForm}
                />
              ) : (
                <Button text="Add user" clickHandler={this.showForm} />
              )}
            </>
          )}
        </Section>
      </>
    );
  }
}
