import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = { cellState: CellStates.UNSELECTED };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      var newValue;
      switch (prevState.cellState) {
        case CellStates.UNSELECTED:
          newValue = CellStates.RED;
          break;
        case CellStates.RED:
          newValue = CellStates.BLUE;
          break;
        case CellStates.BLUE:
          newValue = CellStates.UNSELECTED;
          break;
      }
      return ({
        cellState: newValue
      })
    }
    );
  }

  render() {
    var color;
    switch(this.state.cellState) {
      case CellStates.UNSELECTED:
        color = "#FFFFFF";
        break;
      case CellStates.RED:
        color = "#FF0000";
        break;
      case CellStates.BLUE:
        color = "#0000FF";
        break;
    }
    let buttonStyle = {
      'backgroundColor': color
    };
    return (
      <button className="Cell" style={ buttonStyle } onClick={this.handleClick} />
    );
  }
}

class Row extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <div>
        { this.props.value.map (
            (cell) => (
              <Cell value={cell} />
            )
          ) 
        }
      </div>
    )
  }
}

class Game extends Component {
  constructor(props) {
    super(props);
    let boardState = [[]];
    var i;
    var j;
    for (i = 0; i < rows; i++) {
      boardState[i] = [];
    }
    for (i = 0; i < rows; i++) {
      for (j = 0; j < cols; j++) {
        boardState[i][j] = CellStates.UNSELECTED;
      }
    }
    this.state = { boardState: boardState };
  }
  render() {
    return (
      <div>
      { this.state.boardState.map (
          (row) => (
            <Row value={row} />
          )
        ) 
      }
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Game />
      </header>
    </div>
  );
}

const rows = 6;
const cols = 7;

const CellStates = {
  UNSELECTED: '', 
  BLUE: 'blue', 
  RED: 'red'
}

export default App;
