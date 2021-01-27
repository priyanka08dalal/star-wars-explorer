import React, { Component } from 'react';
import {Button} from "@material-ui/core"
import MainItems from './MainItems'
import { connect } from 'react-redux'
import { fetchPeople } from '../actions/peopleActions';
import { createBrowserHistory } from 'history';
// import { withRouter } from 'react-router-dom'

class ItemsButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            // avtar: ''
        }
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
          // window.open("/people")
          this.props.history.push('/people')
      }

      

    render() {
        // const classes = useStyles();

        return (
            <div>
                <MainItems text={"Star Wars Explorer"} />
                <div>
                    <Button variant="contained" color="primary" onClick={this.handleClick}>
                        People
                    </Button>
                </div>
                <div>
                    <Button variant="contained" size="medium" color="primary">
                        Movies
                    </Button>
                </div>
                <div>
                     <Button variant="contained" color="primary">
                         Planet
                    </Button>
                </div>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      peopleData: state.people
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchPeople: () => dispatch(fetchPeople())
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ItemsButton, createBrowserHistory())