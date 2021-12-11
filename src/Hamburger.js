import React from "react"
import $ from 'jquery';
import hamburger from "./hamburger.css"
import Modalh from "./Modalh";








class Hamburger extends React.Component {
    componentDidMount() {
        $('.hamburger , .home').on('click',function(e){
            let $menu = $(this).parent();
            if(!$(this).hasClass('active')) {
                $(this).addClass('active');
                $menu.addClass('open');
            } else {
                $(this).removeClass('active');
                $menu.removeClass('open');
            }
            e.preventDefault();
            
        $('.home').on('click', function() {
            $('.hamburger').removeClass('active');
            $menu.removeClass('open');
        })

        })}

       

render(){
 return (<div className="ui pointing menu stackable">
	<div className="conun">
  <a className="item" ><button className="ui large inverted button home" id="bt">Home</button></a><br/>
  <a className="item">
  <Modalh images={this.props.images} addImage={this.props.addImage}/>
  </a>

  </div>

	<div className="hamburger pulse">
      
	    <span className="hamburger-bun"></span>
	    <span className="hamburger-patty"></span>
	    <span className="hamburger-bun"></span>
	</div>
</div>)}

}

export default Hamburger;
