import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Shop = () => {

    const balance = useSelector(state => state.amount)

    const dispatch = useDispatch();
    const actions = bindActionCreators(actionCreators, dispatch);
    // const { amount } = dispatch(actionCreators.getAmount());

    return (
        <>
            <div className="container center">
                {/* <div onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }} className="btn btn-danger mx-2 fw-bold">-</div>
                Update Balance
                <div onClick={() => { dispatch(actionCreators.depositMoney(100)) }} className="btn btn-success mx-2 fw-bold">+</div> */}

                <div className="card bg-light text-center my-4">
                    <div className="card-body">
                        <h5 className="card-title">Deposite/Withdraw Money</h5>
                        <hr />
                        <p className="card-text">Your Current Balance is : {balance}</p>
                        <div className="d-flex justify-content-center gap-2">
                            <div onClick={() => { actions.withdrawMoney(100) }} className="btn btn-danger mx-2 fw-bold">-</div>
                            Update Amount
                            <div onClick={() => { actions.depositMoney(100) }} className="btn btn-success mx-2 fw-bold" > +</div>

                        </div>
                        <hr />
                        <div className="mt-2">
                            <div className="text-center fw-bold">My<span className='text-primary'>Bank</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop;