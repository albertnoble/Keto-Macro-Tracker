import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: {
        name: '',
        calories: '',
        carbs: '',
        fats:'',
        proteins:''
      }
    };
  }

  changeHandler = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.state.foods[name] = value;

    this.setState({
      foods: this.state.foods,
    });
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
        </div>
        <div className="game-info">
          <ul className="food-list">
            <label>Food Name</label>
            <li><input name="name" value={this.state.foods.name} onChange={this.changeHandler}/></li>
            <label>Calories</label>
            <li><input name="calories" value={this.state.foods.calories} onChange={this.changeHandler}/></li>
            <label>Carbs</label>
            <li><input name="carbs" value={this.state.foods.carbs} onChange={this.changeHandler}/></li>
            <label>Fats</label>
            <li><input name="fats" value={this.state.foods.fats} onChange={this.changeHandler}/></li>
            <label>Proteins</label>
            <li><input name="proteins" value={this.state.foods.proteins} onChange={this.changeHandler}/></li>
          </ul>
          <div className="food-details">
            Name:
            {this.state.foods.name}<br />
            Info <br />
            Cal: {this.state.foods.calories},
            Carb: {this.state.foods.carbs},
            Fat: {this.state.foods.fats},
            Protein: {this.state.foods.proteins}
          </div>
        </div>

      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
