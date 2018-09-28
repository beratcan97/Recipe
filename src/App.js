import React, { Component } from 'react';
import './App.css';
import SignInForm from './Components/Forms/SignInForm.js';
import CreateRecipeForm from './Components/Forms/CreateRecipeForm.js';
import { ComponentDidMount, OnLogin, OnLogout, OnRegister, CreateRecept } from './Components/Firebase/Functions.js';
import Header from './Components/View/Header.js';
import Footer from './Components/View/Footer.js';
import Recipes from './Components/View/Recipes.js';

class App extends Component {
  state = {
    email: "",
    password: "",
    user: "",
    content: "",
    contentHeader: "",
    recipe: ""
  }

  setUser(item) {
    this.setState({ user: item });
  }
  componentDidMount() {
    ComponentDidMount(this.setUser.bind(this));
  }

  onLogout = () => {
    OnLogout();
    this.setState({ email: '' });
    this.setState({ password: '' });
  }

  onLogin = () => {
    OnLogin(this.state.email, this.state.password);
  }

  onRegister = e => {
    OnRegister(this.state.email, this.state.password);
    e.preventDefault();
  }

  createRecipe = (e) => {
    e.preventDefault();
    CreateRecept(this.state.contentHeader, this.state.content);

    this.setState({ contentHeader: '' });
    this.setState({ content: '' });
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="full">

        {/* HEADER */}
        <Header header={this.state.user && this.state.email} OnLogout={this.onLogout} state={this.state.user} />

        {/* SIGN IN FORM */}
        {!this.state.user && <SignInForm email={this.state.email} password={this.state.password} onChange={this.onChange} onLogin={this.onLogin} onRegister={this.onRegister} />}

        {/* MAIN CONTENT */}
        {/* CREATE RECIPE */}
        {this.state.user && <CreateRecipeForm CreateRecipe={this.createRecipe} ContentHeader={this.state.contentHeader} Content={this.state.content} OnChange={this.onChange} />}

        {/* RECIPE */}
        {this.state.user &&
          <Recipes />
        }

        {/* FOOTER */}
        <Footer />
      </div>
    );
  }
}

export default App;
