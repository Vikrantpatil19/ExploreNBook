import React from 'react'
import './HeroTrain.css';
import Img1 from './img/train-LGT.gif';
import {Link} from 'react-router-dom';

function HeroTrain() {
  return (
   <>
       <div className='border-top bg-white  '>
            <div className="container col-xxl-8 px-4 py-5 ">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6 ">
                        <img src={Img1} className="d-block mx-lg-auto img-fluid heroimg" alt="Bootstrap Themes"   loading="lazy"/>
                        {/* <img src="http://html.0effortthemes.com/go/images/train-LGT.gif" className="d-block mx-lg-auto img-fluid " alt="Bootstrap Themes" loading="lazy" /> */}
                    </div>
                    <div className="col-lg-6">
                        <h1 className="fs-1 fw-bold text-info-emphasis lh-1 mb-3">DISCOVER THE WORLD WITH TRAIN</h1>
                        <p className="lead fs-6 text-body-secondary ">You can choose any country with good tourism. Agency elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <p to="/destination/2">
                                <button type="button" className="btn btn-outline-info  btn-lg px-4 me-md-2">Book Train</button>
                            </p>
                            <p to="/contact">
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact Us</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
   
   
   </>
  )
}

export default HeroTrain