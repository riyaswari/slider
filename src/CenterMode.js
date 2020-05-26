import React, { Component } from "react";
import Slider from "react-slick";
import './myStyles.css'


 class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div>
        <h2><center>CenterMode</center></h2>
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
        </Slider>
      </div>
    );
  }
}

export default CenterMode