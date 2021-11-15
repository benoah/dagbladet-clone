import React from "react";

export default function Header() {
  return (
    <header className="app-header">
      <div className="container">
        <div className="container-col">
          <a href="/" className="app-logo">
            <span className="screen-only">Dagbladet</span>
          </a>
        </div>
        <div className="container-col">
          <ul className="main-nav">
            <li>
              <a href="/" class="account-link">
                <i class="icon icon-account"></i> Your Account
              </a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">News</a>
            </li>
            <li>
              <a href="/">Sport</a>
            </li>
            <li>
              <a href="/">Reel</a>
            </li>
            <li>
              <a href="/">Worklife</a>
            </li>
            <li>
              <a href="/">Travel</a>
            </li>
            <li>
              <a href="/">Future</a>
            </li>
            <li>
              <a href="/">Culture</a>
            </li>
            <li>
              <a href="/" class="more-link">
                More{" "}
              </a>
            </li>
          </ul>
        </div>
         {" "}
        <div className="container-col">
          <button id="jsThemeToggle" class="toggle-theme">
            <span className="screen-only">Toggle theme</span>
          </button>
        </div>
        <div className="container-col">
          <form action="post" className="search">
            <input
              type="text"
              name="q"
              className="search-input"
              placeholder="search"
            />
            <button className="search-submit">
              <span className="screen-only">Search</span>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
