import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./Lightbox.css";

import $ from 'jquery';
import Tilt from 'react-parallax-tilt';
import SmoothList from 'react-smooth-list';

class LightboxPage extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    images: this.props.images,
  };
  loadMore = function(){
    $(".imageGallery").slice(0, 6).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".imageGallery:hidden").slice(0, 6).slideDown();
      if($(".imageGallery:hidden").length == 0) {
        $("#loadMore").text("No Content").addClass("noContent");
      }
    }); 
  }
  
  renderImages = () => {
    let photoIndex = -1;
    const { images } = this.state;
    
    return images.map(imageSrc => {
      photoIndex++;
      const privateKey = photoIndex;
      return (
        <SmoothList delay={1000} transitionDuration={800}>
      

<Tilt  md="4" key={photoIndex} className="imageGallery">

<MDBCol>
          <figure>
            <img
              src={imageSrc}
              alt="Gallery"
              className="img-fluid myImage"
              onClick={() =>
                this.setState({ photoIndex: privateKey, isOpen: true })
              }
            />
            
          </figure>
          <div class="card__title"> Lorem Ipsum is simply dummy value </div>
        </MDBCol>
        </Tilt>
       
        </SmoothList>
        
        
      );
    });
  
  };
componentDidMount() {
  this.loadMore()
  this.setState()

//  let card = document.querySelector(".imageGallery");
//  console.log(card)
// const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
// const THRESHOLD = 15;

// function handleHover(e) {
//   const { clientX, clientY, currentTarget } = e;
//   const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

//   const horizontal = (clientX - offsetLeft) / clientWidth;
//   const vertical = (clientY - offsetTop) / clientHeight;
//   const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
//   const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

//   card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
// }

// function resetStyles(e) {
//   card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
// }

// if (!motionMatchMedia.matches) {
//   card.addEventListener("mousemove", handleHover);
//   card.addEventListener("mouseleave", resetStyles);
// }
}

  render() {
   
    this.loadMore()
    const { photoIndex, isOpen, images } = this.state;
    console.warn(this.props)
    return (
      
      <MDBContainer className="mt-5">
        <div className="mdb-lightbox no-margin">
          <MDBRow>{this.renderImages()}</MDBRow>

        </div>
       
      </MDBContainer>
    );
  }
}

export default LightboxPage;
