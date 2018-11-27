import React, { Component } from 'react';
import { Menu, Loader } from 'semantic-ui-react';
import { PopulationTable } from './table';
import { PopulationChart } from './chart';
import { LifeExpectancyCalc } from './form';
const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);

    this.population = [];
    this.state = {
      loading: true,
      activeItem: 'table',
      lifeExpectancy: '__',
      calcHistory: [],
      form: {
        sex: 'male',
        country: 'Slovak Republic',
        date: '2001-05-11',
        age: '12y',
        error: ''
      }
    }
  }

  componentDidMount = async () => {
    let localStorageHistory = localStorage.history ? JSON.parse(localStorage.history) : [];

    for (let age = 18; age < 31; age++) {
      const response = await axios.get(`http://api.population.io:80/1.0/population/1990/Slovak%20Republic/${age}/`);
      this.population.push(response.data[0]);
    }

    this.setState({ loading: false, calcHistory: localStorageHistory});
  }

  submitForm = async () => {
    let {sex, country, date, age} = this.state.form;
    let formStateUpdate = this.state.form;
    let formatedCountry = country.replace(/ /g,'%20');
    let url = `http://api.population.io:80/1.0/life-expectancy/remaining/${sex}/${formatedCountry}/${date}/${age}/`;

    try {
      const response = await axios.get(url);
      
      let last5Results = this.state.calcHistory;
      last5Results.push(response.data);
      if (last5Results.length > 5){last5Results.shift()}

      formStateUpdate.error = ''
      this.setState({form: formStateUpdate, lifeExpectancy: response.data.remaining_life_expectancy.toFixed(2), calcHistory: last5Results});
      localStorage.setItem('history', JSON.stringify(last5Results));

    } catch (error){
      formStateUpdate.error = error.response.data.detail;
      this.setState({form: formStateUpdate});
    }
  }

  inputChange = (e) => {
    let newInput = this.state.form;
    newInput[e.target.name] = e.target.value;
    this.setState({ form: newInput });
  }

  handleMenuClick = (e, {name}) => this.setState({ activeItem: name })

  render() {
    const {activeItem} = this.state;
    return (
      <div className='App'>
        <Menu pointing secondary>
          <Menu.Item
            name='table'
            active={activeItem === 'table'}
            onClick={this.handleMenuClick} />
          <Menu.Item
            name='chart'
            active={activeItem === 'chart'}
            onClick={this.handleMenuClick}
          />
          <Menu.Item
            name='calculator'
            active={activeItem === 'calculator'}
            onClick={this.handleMenuClick}
          />
        </Menu>

        {this.state.loading && <Loader active inline='centered'>Loading</Loader>}
        {!this.state.loading && this.state.activeItem === 'table' && <PopulationTable population={this.population} />}
        {!this.state.loading && this.state.activeItem === 'chart' && <PopulationChart data={this.population} />}
        {
          !this.state.loading && this.state.activeItem === 'calculator' &&
          <LifeExpectancyCalc
            history = {this.state.calcHistory}
            lifeExpectancy = {this.state.lifeExpectancy}
            formState = {this.state.form}
            inputChange = {this.inputChange}
            submitForm = {this.submitForm} 
          />
        }
      </div>
    );
  }
}

export default App;
