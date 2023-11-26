import React from 'react'
import HeaderMain from '../../components/Headers/HeaderMain/HeaderMain'
import AccountName from '../../components/Headers/AccountName'
import Footer from '../../components/Footers'
import IconSVG from '../../components/Icons/IconSVG'
import "./index.scss"
export default function Withdraw() {
  return (
    <div className='Withdraw container--ChooseToken'>
        <HeaderMain/>
        <AccountName/>
        <div className='title'>Withdraw LP</div>
       <div className='container'>
       <div className="mainnav">
      <form className="input1">
          <IconSVG iconName="iconfind" />
          <input placeholder="Search name or address" id="subinput" type="text"/>
      </form>
  
        <div className="ul--conntainer">
          <ul>
          <div className="des--container">
        <div className="text--container">
            Token contract addresses can be found on corresponding blockchain
            scan <span>Website</span>
            
          </div>
        </div>
            <div className="scrollbar">
            <div className="box">
              <div className="dot"><IconSVG iconName="dot"/></div>
              <div className="box-container">
                
                <li className='windraw'>

                0xBf54....1a6      
                </li>
                <span>3321.7</span>
              </div>
            </div>
            <div className="box">
            <div className="dot"><IconSVG iconName="dot"/></div>

              {" "}
              <div className="box-container">
                <li  className='windraw'>
                0xBf54....1a7      
                </li>{" "}
                <span>10</span>
              </div>
            </div>
            <div className="box">
            <div className="dot"><IconSVG iconName="dot"/></div>

              {" "}
              <div className="box-container">
                <li  className='windraw'>
                0xH4av....t81      
                </li>{" "}
                <span>6657.7</span>
              </div>
            </div>

            <div className="box">
            <div className="dot"><IconSVG iconName="dot"/></div>

              {" "}
              <div className="box-container">
                <li  className='windraw'>
                0xH4av....t82      
                </li>{" "}
                <span>20.7</span>
              </div>

            </div>
            <div className="box">
            <div className="dot"><IconSVG iconName="dot"/></div>

              {" "}
              <div className="box-container">
                <li>
                  USDT
                  <br />
                  <span>(USDT)</span>
                </li>{" "}
                <span>0</span>
              </div>

            </div>
            <div className="box">
            <div className="dot"><IconSVG iconName="dot"/></div>

              {" "}
              <div className="box-container">
                <li>
                  USDT
                  <br />
                  <span>(USDT)</span>
                </li>{" "}
                <span>0</span>
              </div>

            </div>
            <div className="box">
            <div className="dot"><IconSVG iconName="dot"/></div>

              {" "}
              <div className="box-container">
                <li>
                  USDT
                  <br />
                  <span>(USDT)</span>
                </li>{" "}
                <span>0</span>
              </div>

            </div>
            </div>
          </ul>

        </div>
      </div>
       </div>
        <Footer/>
    </div>
  )
}
