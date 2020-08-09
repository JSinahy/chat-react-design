import React from 'react';
import '../css/App.css';
import dog1 from '../imgs/dog1.jpg';
import dog2 from '../imgs/dog2.jpg';
import dog3 from '../imgs/dog3.jpg';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="globe-guess">
                  That sounds great. I'd be happy to discuss more.
                </div>
                
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <div className="globe-guess">
                  Could you send over some pictures of your dog please?
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
              </div>
              <div className="col-9">
                <div className="globe-me">
                  <img src={dog1} className="chat-pictures" alt="picture1" />
                  <img src={dog2} className="chat-pictures" alt="picture2"/>
                  <img src={dog3} className="chat-pictures" alt="picture3"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
              </div>
              <div className="col-8">
                <div className="globe-me">
                  Could you send over some pictures of your dog please?
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <div className="globe-guess">
                  She looks so happy! The time we discussed works. How long shall I take her out for?
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8 d-flex justify-content-center align-items-center">
                <div className="notice-guess">
                  <div class="row">
                    <div className="col-2">
                      <div className="white-circle"></div>
                    </div>
                    <div className="col-6">
                      30 min walk
                    </div>
                    <div className="col-4 money">
                      $29
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <div className="notice-guess">
                  <div class="row">
                    <div className="col-2">
                      <div className="white-circle"></div>
                    </div>
                    <div className="col-6">
                      1 hour walk
                    </div>
                    <div className="col-4 money">
                      $49
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
  );
}

export default App;
