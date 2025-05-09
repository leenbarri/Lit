import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

class MyNavbar extends LitElement {
      static styles = css`
        :host {
          display: block;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          --bg-indigo-900: #4338ca;
          --bg-purple-600: #7c3aed;
          --bg-purple-700: #8D5CF6;
          --bg-orange-500: #f97316;
          --bg-blue-300: #93c5fd;
          --text-white: #ffffff;
          
        }
    
       
        .container {
          max-width: 80rem;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
    
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1.25rem;
          padding-bottom: 1.25rem;
        }
    
        h2 {
          font-size: 2rem;
          font-weight: bold;
          color:white;
        }
        h6{
       color: #8D5CF6;
          }
    
        nav ul {
          display: flex;
          list-style: none;
          padding: 0;
          margin: 0;
          gap: 1rem;
        }
    
        nav a {
          color: var(--text-white);
          text-decoration: none;
          transition: color 0.2s ease;
        }
    
        nav a:hover {
          text-decoration: underline;
        }
    
        .bg-purple-600 {
          background-color: var(--bg-purple-600);
        }
    
        .bg-purple-700:hover {
          background-color: var(--bg-purple-700);
        }
    
        .bg-purple-600:hover {
          background-color: var(--bg-purple-700);
        }
    
        .btn {
          padding: 0.5rem 1.5rem;
          border-radius: 0.375rem;
          font-size: 1rem;
          cursor: pointer;
        }
    
        .btn-primary {
          background-color: var(--bg-purple-600);
          color: var(--text-white);
          border: none;
        }
    
        .btn-primary:hover {
          background-color: var(--bg-purple-700);
        }
    
        .btn-secondary {
          background-color: transparent;
          border: 1px solid var(--text-white);
          color: var(--text-white);
        }
    
        .btn-secondary:hover {
          background-color: var(--text-white);
          color: var(--bg-indigo-900);
        }
    
        .main-content {
          display: flex;
          align-items: center;
          margin-top: 5rem;
          color:white;
        }
    
        .main-content .text-content {
          width: 50%;
        }
    
        .main-content .text-content h2 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
    
        .main-content .text-content h3 {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1rem;

        }
    
        .main-content .text-content p {
          margin-bottom: 1.5rem;
        }
    
        .main-content .text-content .btn-group {
          gap: 1rem;
        }
    
        .main-content .image-content {
          width: 50%;
        }
    
        .main-content img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
    
        .decorative-shapes {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.4;
        }
    
        .decorative-shapes .circle {
          border-radius: 9999px;
          background-color: var(--bg-orange-500);
        }
    
        .decorative-shapes .circle.blue {
          background-color: var(--bg-blue-300);
        }
      `;
    
      render() {
        return html`
          <div class="container">
            <header>
              <h2>BrandName</h2>
               <nav>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Product</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">contant</a></li>

                   </ul>
              </nav>
              <nav>
                <ul>
                  <li><a href="#">Login</a></li>
                  <li><a href="#" class="btn btn-primary">JOIN US</a></li>
                </ul>
              </nav>
            </header>
    
            <main class="main-content">
              <div class="text-content">
                <h6>Welcome</h6>
                <h3>Best Learning Opportunities</h3>
                <p>Every day brings it a fresh set of learning possibilities.</p>
                <div class="btn-group">
                  <a href="#" class="btn btn-primary">Get Quote Now</a>
                  <a href="#" class="btn btn-secondary">Learn More</a>
                </div>
              </div>
              <div class="image-content">
               <img src="./src/assets/pic.png" alt="Description of the image">
              </div>
            </main>
    
            <div class="decorative-shapes">
              <div class="circle h-32 w-32"></div>
              <div class="circle blue h-16 w-16"></div>
            </div>
          </div>
        `;
      }
    }
customElements.define('my-navbar', MyNavbar);

