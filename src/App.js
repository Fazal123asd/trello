import React, { Component } from "react";
import TrelloList from './components/TrelloList'
import {connect} from 'react-redux'
import TrelloActionButton from './components/TrelloActionButton'


class App extends Component {
  

  render() {
    const {lists} = this.props;
    return (
      <div className="App">
        <div style={{display: 'flex'}}>
        {lists.map(({title, id, cards}) =>
         <TrelloList key={id} 
         title={title}
         cards={cards}
         />) }
        <TrelloActionButton lists/>
        </div>
    <div>{String(undefined)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
