import React from "react";
import background from '../assets/images/3-Columns-Background.png'


function HomeThreeColumns() {
    return (
        <div className="HomeThreeColumns__container">
            <div className='HomeThreeColumns__container--img'>
                <img src={background} alt="yellow background"/>
            </div>
           <div className="HomeThreeColumns">
               <div className="HomeColumn__1">
                   <div className='HomeColumn__1--Number'>
                       <p>10</p>
                   </div>
                   <div className='HomeColumn__1__Description--Title'>
                       <p>Oddanych worków</p>
                   </div>
                   <div className='HomeColumn__1--Description'>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                   </div>
               </div>
               <div className="HomeColumn__2">
                   <div className="HomeColumn__2--Number">
                       <p>5</p>
                   </div>
                   <div className='HomeColumn__2__Description--Title'>
                       <p>Wspartych organizacji</p>
                   </div>
                   <div className='HomeColumn__2--Description'>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                   </div>
               </div>
               <div className="HomeColumn__3">
                   <div className="HomeColumn__3--Number">
                       <p>7</p>
                   </div>
                   <div className='HomeColumn__3__Description--Title'>
                       <p>Zorganizowanych zbiórek</p>
                   </div>
                   <div className='HomeColumn__3--Description'>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                   </div>
               </div>
           </div>
        </div>
    );
}

export default HomeThreeColumns;
