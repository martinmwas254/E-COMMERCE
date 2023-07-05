import React from 'react'
import { NavLink, Link } from 'react-router-dom';
const Header = () => {
  return (
     <>
        <header className="header-top-strip py-3">
           <div className="container-xxl">
             <div className="row">
               <div className="col-6">
                <p className="text-white mb-0">
                  Free shipping Over $100 & Free Return
                </p>
               </div>
               <div className="col-6">
                <p className="text-end text-white mb-0">
                  Hotline:<a className="text-white" href="tel:+25471124466">+2547234567</a>
                </p>
               </div>
             </div>
           </div>
        </header>
        <header className="header-upper py-3">
          <div  className="container-xxl">
            <div className="row">
              <div className="col-2">
                <h2>
                  <Link className="text-white">Developers</Link>
                </h2>
              </div>
              <div className="col-5">
              <div class="input-group mb-3">
                 <input
                    type="text" 
                    class="form-control" 
                    placeholder="Recipient's username" 
                    aria-label="Recipient's username" 
                    aria-describedby="basic-addon2"
                    />
                 <span class="input-group-text" id="basic-addon2">
                    @example.com
                </span>
               </div>
              </div>
              <div className="col-5"></div>
            </div>
          </div>
         </header>
     </>
  )
}

export default Header;