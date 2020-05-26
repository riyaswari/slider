import React, { Component } from "react";
import Slider from "react-slick";
import './myStyles.css'


 class MultipleRows extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 2,
      slidesPerRow: 2
    };
    return (
      <div>
        <h2><center>MultipleRows</center></h2>
        <Slider   {...settings}>
          <div>
            <h3 className='primary'>1</h3>
          </div>
          <div>
            <h3 className='primary'>2</h3>
          </div>
          <div>
            <h3 className='primary'>3</h3>
          </div>
          <div>
            <h3 className='primary'>4</h3>
          </div>
          <div>
            <h3 className='primary'>5</h3>
          </div>
          <div>
            <h3 className='primary'>6</h3>
          </div>
          <div>
            <h3 className='primary'>7</h3>
          </div>
          <div>
            <h3 className='primary'>8</h3>
          </div>
          <div>
            <h3 className='primary'>9</h3>
          </div>
          <div>
            <h3 className='primary'>10</h3>
          </div>
          <div>
            <h3 className='primary'>11</h3>
          </div>
          <div>
            <h3 className='primary'>12</h3>
          </div>
          <div>
            <h3 className='primary'>13</h3>
          </div>
          <div>
            <h3 className='primary'>14</h3>
          </div>
          <div>
            <h3 className='primary'>15</h3>
          </div>
          <div>
            <h3 className='primary'>16</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default MultipleRows