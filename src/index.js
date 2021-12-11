import React from "react";
import ReactDOM from "react-dom";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Lightbox from "./Lightbox";
import "./styles.css";
import Hamburger from "./Hamburger";
import Modalh from "./Modalh";
import $ from 'jquery';
import modalh from "./modalh.css";
import Tilt from 'react-parallax-tilt';
import Overlay from './Overlay'

class App extends React.Component {
  constructor() {
    super()
    this.state ={
      images: [
        "https://images.unsplash.com/photo-1586289948296-c577c3e97953?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1549380198-80b69c4a0e85?ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",
        "https://images.unsplash.com/photo-1579033385971-a7bc8c6f8c64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1542377366-649a235cdd24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=570&q=80",
        "https://images.unsplash.com/photo-1583690033504-6f5a7970550a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=645&q=80",
        "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1573384424320-64a6da7ca74f?ixlib=rb-1.2.1&auto=format&fit=crop&w=617&q=80",
        "https://images.unsplash.com/photo-1548845603-0daa21c2dcce?ixlib=rb-1.2.1&auto=format&fit=crop&w=660&q=80",
        "https://images.unsplash.com/photo-1523591561381-46ccd0101425?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1467539957844-0612a71dddf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1546846195-825303d86f02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1577493893380-bc2803c78b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1577493893380-bc2803c78b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1539778324685-5a25104584c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1557834005-1d3bf9141826?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80",
        "https://images.unsplash.com/photo-1504909083079-7aa496cbe2dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1547546801-9edb40f6f80f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1506186651797-f488507d916b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
        "https://images.unsplash.com/photo-1540397347091-1f1df8f56f4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1585436654180-fa42079fea1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1527675129406-c6a184352131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
        "https://images.unsplash.com/photo-1527286607633-84a4b8297928?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1572902886446-9bb83a47c73f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
        "https://images.unsplash.com/photo-1496851473196-e26508c21494?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"



      ]
    }
  }

  render() {
    let button = $('body').find('.submit')
    button.on('click', () => {
      console.log('ffffffffffffffffffffff')
    })

    
    return (
      <div className="App">

       <Hamburger images={this.state.images}/>
        <br/>
        <br/>
        <Lightbox images={this.state.images} />
        <Overlay/>
 
        <div className="showMoreDiv"><a href="#" id="loadMore">Load More</a></div>
        <div className="cursor"></div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
