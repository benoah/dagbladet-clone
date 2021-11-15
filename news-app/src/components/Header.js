import React from "react";

export default function Header() {
  return (
    <header class="app-header">
      <div className="container">
        <div className="container-col">
          <a href="/" class="app-logo">
            <span class="screen-only">Dagbladet</span>
          </a>
        </div>
        <div className="container-col">
          <ul class="main-nav">
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
        <div class="container-col">
          <button id="jsThemeToggle" class="toggle-theme">
            <span class="screen-only">Toggle theme</span>
          </button>
        </div>
        <div class="container-col">
          <form action="post" class="search">
            <input
              type="text"
              name="q"
              class="search-input"
              placeholder="search"
            />
            <button class="search-submit">
              <span class="screen-only">Search</span>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
