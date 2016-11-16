// Import the HTML file and sass for Webpack to handle.
import './index.html';
import './sass/main.scss';

// Import React for the React.Component class and ReactDOM for rendering.
import React from 'react';
import ReactDOM from 'react-dom';

// Import the necessary components.
import {Button} from './components/Button';

// Create the App component just for rendering the whole site.
class App extends React.Component {
  constructor(props) {
    super(props);

    // Items in the state will update their display automatically if used and changed.
    this.state = {
      exampleText: ''
    };
  }

  getRandomText () {
    let randomText = [
      'wow'
    , 'cool'
    , 'neato'
    , 'awesome'
    , 'great'
    , 'yay'
    , 'woohoo'
    , 'yippee'
    , 'amazing'
    ];

    let selection = Math.floor(Math.random() * randomText.length);

    return randomText[selection];
  }

  // Put all of the components together.
  render () {
    return (
      <div className='box content'>
        <h1>{this.state.exampleText}</h1>
        <Button
          label='Celebrate!'
          action={() => {
            this.setState({
              exampleText: this.getRandomText()
            });
          }}
          />
      </div>
    );
  }
}

// Put the app on the screen.
ReactDOM.render(<App />, document.getElementById('site'));
