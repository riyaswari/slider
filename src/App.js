import './App.css';
import React, { Component } from "react";
import Slider from "react-slick";

 class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2><center>Single Item</center></h2>
        <Slider {...settings}>
          
          <div >
            
           <h3 className='primary'><center>1</center></h3>
          </div>
          <div>
            <h3 className='primary'><center>2</center></h3>
          </div>
          <div>
            <h3 className='primary'><center>3</center></h3>
          </div>
          <div>
            <h3 className='primary'><center>4</center></h3>
          </div>
          <div>
            <h3 className='primary'><center>5</center></h3>
          </div>
          <div>
            <h3 className='primary'><center>6</center></h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
