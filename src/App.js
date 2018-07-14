import React from 'react';
import {
  Button,
  Icon,
  Grid,
  Container,
  Header,
  Card,
  Image,
  Segment
} from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';
import Player from './components/Player';
import ButtonContent from 'semantic-ui-react/dist/commonjs/elements/Button/ButtonContent';

const style = {
  h1: {
    marginTop: '3em',
  },
  button: {
    marginBottom: '10px'
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

class App extends React.Component {
  state = {
    players: [1, 2, 3]
  }

  addPlayer() {
    console.log("Adding a Player!");
  }

  render() {
    let players = this.state.players.map((value) => {
      return <Player key={value} name={"Player " + value} />
    });

    return (
      <div>
        <Header as='h2' content='MTG Life Counter' style={style.h2} textAlign='center' />
        <Container>
          <Button icon labelPosition='left' style={style.button} onClick={() => { this.addPlayer() }}>
            <Icon name='plus' /> Add Player
          </Button>
          {players}
        </Container>
      </div>
    );
  }
}

export default App;
