import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const amount = useSelector(state => state.amount)

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="/">My<span className='text-primary'>Bank</span></a>
                    <div className='balanceButton'>
                        <button disabled={amount === 0} className='btn btn-primary btn-sm' style={{ textDecoration: 'none', outline: '0', boxShadow: 'none' }}>Your Balance : Rs. {amount}/- </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar