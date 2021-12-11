import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import $ from 'jquery';
import Lightbox from './Lightbox'

class Formcompunent extends React.Component {

  render() {
   let imageURL
   let imageTITLE
    let addImage = () => {
       imageTITLE = $('.TITLE').val()
       imageURL = $('.URL').val()
       if(imageURL) {
         let imageDiv = `<div data-tilt class="col-md-4 imageGallery Tilt"><figure><img src="${imageURL}" alt="Gallery" class="img-fluid"></figure><div class="card__title">${imageTITLE}</div></div>`
         $('.imageGallery').parent().parent().parent().append(imageDiv)
         $("#loadMore").text("Load more")
       }
 
   }
    return(
      <Form>
      <Form.Field>
        <label>Title</label>
        <input placeholder='Enter Title' className="TITLE"/>
      </Form.Field>
      <Form.Field>
        <label>Image Url</label>
        <input placeholder='Enter Image Url' className="URL" />
      </Form.Field>
      
      <Button type='submit' className="ui inverted button" onClick={addImage}>Submit</Button>
    </Form>
    
    )
  }
}


export default Formcompunent
