import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
 
class HelloWorld extends React.Component {
    render() {
          return (
            <Button variant="contained" color="primary">
              Hello World
              </Button>
          )
    }
};

ReactDOM.render(<HelloWorld />, document.getElementById('root'));