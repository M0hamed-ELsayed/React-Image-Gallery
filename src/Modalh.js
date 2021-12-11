import React from 'react';
import { Button, Modal } from 'semantic-ui-react'
import modalh from './modalh.css'
import Formcompunent from "./Formcompunent";
import $ from 'jquery';

class Modalh extends React.Component {
  render() {
    console.log(this.props.addImage)
    
    return (
      
      <Modal scroll="no"
        trigger={<Button className="ui large inverted button" id="bt">Add Post</Button>}
        header='Reminder!'
        actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
      >
        <Formcompunent images={this.props.images} addImage={this.props.addImage}/>
      
      </Modal>
      
    )
  }
 
}

export default Modalh;
