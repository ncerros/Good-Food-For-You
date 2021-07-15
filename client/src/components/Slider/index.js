import React, { Component } from 'react'

// *** The two lines below are not needed.  Materialize is globally in the index.html ***///
// import 'materialize-css/dist/css/materialize.min.css'
// import M from 'materialize-css'


/*eslint-disable */
export default class Slider extends Component {
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems, {});
          });
    }
    
    render() {
            return (
                <div className='container'>
                    <div className="row">
                        <div className="col s6">
                            
                        </div>
                        <div className="col s6">
                            
                        </div>
                    </div>

                    <div className='container #a5d6a7 green lighten-3'>

                    <div className="slider">
                        <ul className="slides">
                        <li>
                            
                            <img className="card-panel hoverable" src="https://cdn.pixabay.com/photo/2016/04/04/17/22/meal-1307604__340.jpg"/> 
                            <div className="caption center-align">
                            
                            <h5 className="light grey-text text-lighten-3"></h5>
                            </div>
                        </li>
                        <li>
                            <img className="card-panel hoverable" src="https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590__340.jpg"/> 
                            <div className="caption left-align">
                            
                            <h5 className="light grey-text text-lighten-3"></h5>
                            </div>
                        </li>
                        <li>
                            <img className="card-panel hoverable" src="https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221__340.jpg"/> 
                            <div className="caption right-align">
                            
                            <h5 className="light grey-text text-lighten-3"></h5>
                            </div>
                        </li>
                        <li>
                            <img className="card-panel hoverable" src="https://cdn.pixabay.com/photo/2015/03/05/18/33/spaghetti-660754_960_720.jpg"/> 
                            <div className="caption center-align">
                            
                            <h5 className="light grey-text text-lighten-3"></h5>
                            </div>
                        </li>
                        </ul>
                    </div>

                    </div>
                   
                </div>
            )
        }
    }
    

   