import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      name: '',
      calories: '',
      carbs: '',
      fats: '',
      proteins:''
    };
    this.changeName = this.changeName.bind(this);
    this.changeCalories = this.changeCalories.bind(this);
    this.changeCarbs = this.changeCarbs.bind(this);
    this.changeFats = this.changeFats.bind(this);
    this.changeProteins = this.changeProteins.bind(this);
  }

  changeName(event) {
    this.setState({name: event.target.value});
  }
  changeCalories(event) {
    this.setState({calories: event.target.value});
  }
  changeCarbs(event) {
    this.setState({carbs: event.target.value});
  }
  changeFats(event) {
    this.setState({fats: event.target.value});
  }
  changeProteins(event) {
    this.setState({proteins: event.target.value});
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
        </div>
        <div className="game-info">
          <ul className="food-list">
            <label>Food Name</label>
            <li><input className="Name" value={this.state.name} onChange={this.changeName}/></li>
            <label>Calories</label>
            <li><input className="Calories" value={this.state.calories} onChange={this.changeCalories}/></li>
            <label>Carbs</label>
            <li><input className="Carbs" value={this.state.carbs} onChange={this.changeCarbs}/></li>
            <label>Fats</label>
            <li><input className="Fats" value={this.state.fats} onChange={this.changeFats}/></li>
            <label>Proteins</label>
            <li><input className="Proteins" value={this.state.proteins} onChange={this.changeProteins}/></li>
          </ul>
          <div className="food-details">
            Name:
            {this.state.name}<br />
            Info <br />
            Cal: {this.state.calories},
            Carb: {this.state.carbs},
            Fat: {this.state.fats},
            Protein: {this.state.proteins}
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
