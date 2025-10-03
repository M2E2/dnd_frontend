import React from "react";
import '../styles/App.css';
import { CircleCheckBigIcon } from "lucide-react";
import ShapeBlur from './ShapeBlur';

export default function LoginCavern({email, setEmail, password, setPassword, err, onSubmit}) {
    return (
        
                <div className="login_Frame">
        <div className="login_FX" aria-hidden="true">
    <ShapeBlur
      variation={0}
      pixelRatioProp={Math.min(window.devicePixelRatio || 1, 2)}
      shapeSize={1.2}
      roundness={0.3}
      borderSize={0.01}
      circleSize={0.05}
      circleEdge={1.2}
    />
  </div>
  <div className="login_Box">
            <h1 className="title">
                Enter the Dungeon
            </h1>
          <div id="emailBox" className="inputBox">
            <input className="inria-sans-light"
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div id="passwordBox" className="inputBox">
            <input className="inria-sans-light"
                type="password"
                placeholder="Password"
                placeholderTextColor="#ffffff"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="errorMessage" style={{height: '20px', color: 'red', fontWeight: 'bold'}}>
            {err}
          </div>
          <div id="suggestionrow" className="suggestions" >
            <div>
                <p className="inria-sans-light">Strong password</p>
            </div>
            <div>
                <p className="inria-sans-light">Strong password</p>
            </div>
          </div>
            <div className="buttonRow">
                <button className="buttonLogin">
                    Register
                </button>
                <button className="buttonLogin">
                    Login
                </button>
            </div>
       </div>
       </div>
    );
}
