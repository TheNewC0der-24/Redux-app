import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">State Bank of <span className='text-primary'>Bhavya</span></a>
                    <div>
                        <button disabled={true} className='btn btn-primary' style={{ textDecoration: 'none', outline: '0', boxShadow: 'none' }}>Your Balance 10,000/- </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar