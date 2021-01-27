import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import MainItems from './MainItems'
import { connect } from 'react-redux'
import { fetchPeople } from '../actions/peopleActions';
import { useEffect } from 'react'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      
      margin: theme.spacing(1),
    },
  },
  
}));

function PeopleList( people, fetchPeople ) {
  console.log("peopleList")
  useEffect(() => {
    fetchPeople()
  }, [fetchPeople])

  const classes = useStyles();

  return (
    <div className={classes.root}>
        <MainItems text={"People"} />
        <Avatar src="/broken-image.jpg" />
        <h2>{people.name}</h2>
    </div>
  );
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
)(PeopleList)
