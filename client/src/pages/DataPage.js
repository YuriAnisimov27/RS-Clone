import React from 'react';
import {Loader} from '../components/Loader';
import './DataPage.css';

export const DataPage = () => {
  // const [userData, setUserData] = useState(null);

  return (
    <div className="DataPage">
      <Loader/>
      <div className="row">
        <div className="col s4 m4">
          <div className="card">
            <div className="card-image">
              <img src="https://picsum.photos/1024/1024" alt="user avatar"/>
                <span className="card-title">Card Title</span>
            </div>
            <div className="card-content">
              <p>I am a very simple card.</p>
            </div>
            <div className="card-action">
              <a href="#!">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
