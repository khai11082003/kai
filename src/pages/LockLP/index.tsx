import React from 'react'
import HeaderMain from '../../components/Headers/HeaderMain/HeaderMain'
import AccountName from '../../components/Headers/AccountName'
import Footer from '../../components/Footers'
import "./index.scss"
export default function LockLp() {
  return (
    <div className='LockLp'>
        <HeaderMain/>
        <AccountName/>
        <div className='title'>Lock LP</div>
        <div className='Lock--Component'>
            <div className='h1'>LP Token</div>
            <div className='Lock--box--1'>
                <div className='buttonLP'>Choose LP</div>
                <input id='input1'/>
            </div>
            <div className='h1'>Amount Locking</div>
            <input/>
            <div className='h1'>Time Locking</div>
            <input/>
        </div>
        <Footer/>
    </div>
  )
}
