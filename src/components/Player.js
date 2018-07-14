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

class Player extends React.Component {
  state = {
    lifeTotal: 20
  }

  whatIsOnePlusOne() {
    return 1 + 1;
  }

  removeLife(value) {
    let newLifeTotal = this.state.lifeTotal - value;
    this.setState({
      lifeTotal: newLifeTotal
    });
  }

  addLife(value) {
    let newLifeTotal = this.state.lifeTotal + value;
    this.setState({
      lifeTotal: newLifeTotal
    });
  }

  render() {
    return (
      <div>
        <Card.Group>
            <Card className="full-width">
              <Card.Content>
                <Card.Header>{this.state.lifeTotal} </Card.Header>
                <Card.Meta>{this.props.name}</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Button icon labelPosition='left' onClick={() => { this.removeLife(5) }}>
                  <Icon name='minus' /> 5
                </Button>
                <Button icon labelPosition='left' onClick={() => { this.removeLife(1) }}>
                  <Icon name='minus' /> 1
                </Button>
                <Button icon color='blue' labelPosition='left' onClick={() => { this.addLife(1) }}>
                  <Icon name='plus' /> 1
                </Button>
                <Button icon color='blue' labelPosition='left' onClick={() => { this.addLife(5) }}>
                  <Icon name='plus' /> 5
                </Button>
              </Card.Content>
            </Card>
          </Card.Group>
      </div>
  );
  }
}

export default Player;
