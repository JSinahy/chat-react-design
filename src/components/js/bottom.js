import React from 'react';
import '../../css/bootstrap.css';
import '../css/bottom.css';

export default function Bottom(){
    return (
        <div className="container">
            <div className="row">
                <div className="bottom">
                   <div className="input-group">
                    <div className="row" style={{width: "100%"}}>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-10 d-flex justify-content-center">
                                    <input type="text" className="input-control" placeholder="Type a message..." />
                                </div>
                                <div className="col-2 d-flex justify-content-end">
                                    <div className="send "></div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                   </div>
                </div>
            </div>
        </div>
    );
}