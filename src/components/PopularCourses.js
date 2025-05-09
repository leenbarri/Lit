import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

class PopularCourses extends LitElement {
  static styles = css`
    .container {
      display: flex;
      align-items: center;
      color: #fff;
      padding: 20px;
    }
    .text-container {
      max-width: 400px;
    }
    .image {
      margin-right: 20px;
    }
    .image img {
      width: 250px; 
      border-radius: 10px;
    }
    .highlight {
      border-radius: 10px;
    }
    
  `;

  render() {
    return html`
      <div class="container">
        <div class="image">
          <img src="./src/assets/row.png" alt="Student Image" />
        </div>
        <div class="text-container highlight">
          <h2>Our Popular Courses</h2>
          <p>
            Problems trying to resolve the conflict between the two major realms of
            Classical physics: Newtonian mechanics
          </p>
          <a href="#" style="color: blue;">Learn More &gt;</a>
        </div>
        
      </div>

    `;
  }
}

customElements.define('popular-courses', PopularCourses);
