import React, { Component } from "react";
import Slider from "react-slick";
import './myStyles.css'

 class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <h2><center>MultipleItems</center>  </h2>
        <Slider {...settings}>
          <div>
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
          <div>
            <h3 className='primary'><center>7 </center></h3>
          </div>
          <div>
            <h3 className='primary'><center>8</center></h3>
          </div>
          <div>
            <h3 className='primary'><center>9</center></h3>
          </div>
        </Slider>
      </div>
    );
  }
}

 export default MultipleItems