import React from 'react';

export const AuthPage = () => {
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Test</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Autorization</span>
            <div>
              <div class="input-field">
                <input
                  placeholder="email"
                  id="email"
                  type="text"
                  name="email"
                />
                <label for="email">Email</label>
              </div>
              <div class="input-field">
                <input
                  placeholder="password"
                  id="password"
                  type="password"
                  name="password"
                />
                <label for="password">Password</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button className="btn yellow darken-4" style={{ marginRight: 10 }}>
              Sign in
            </button>
            <button className="btn gray lighten-1 black-text">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};