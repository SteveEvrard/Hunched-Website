import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <img src="img/hunched-logo-white.png" className="img-responsive" alt="" />
                </div>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <a href="https://apps.apple.com/us/app/hunched-text-neck-solution/id6450959041" target="_blank" rel="noopener noreferrer">
                    <img src="img/app-store-badge.svg" className="img-responsive app-store-badge" alt="" />
                  </a>
                </div>
                <a
                  href="#about"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
