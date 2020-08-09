import React from 'react';
import '../../css/bootstrap.css';
import '../css/header.css'
import avatar from '../imgs/avatar.jpg';
import leftArrow from '../imgs/left.svg';
import burger from '../imgs/burger.svg';

export default function Header() {
    return (
        <nav id="sidebar" className="header-bg" >
            <div className="container">
                <div className="row align-items-center" style={{height: "80px"}}>
                    <div className="col d-flex">
                        <img src={leftArrow} width="24px" height="24px" alt="left arrow" />
                    </div>
                    <div className="col-8">
                        <div className="row" style={{height: "80px"}}>
                            <div className="col-4 d-flex justify-content-start">
                                    <img src={avatar} className="avatar mt-3 ms-2 me-2 mb-2" alt="avatar" /> 
                            </div>
                            <div className="col-8 align-items-center" style={{display: "flex", justifyContent:"center"}}>
                                <div className="container">
                                    <div className="row ">
                                        <div className="avatar-title">
                                        Samuel Green
                                        </div>
                                        
                                    </div>
                                    <div className="row">
                                        <div className="avatar-subtitle">
                                            Available to Walk!
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                    <div className="col">
                    <img src={burger} width="24px" height="24px" />
                    </div>
                </div>
            </div>
        </nav>

    );
}

