import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

class TestimonialsSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 40px;
      color: white;
      font-family: Arial, sans-serif;
    }
    .header {
      text-align: center;
      margin-bottom: 30px;
    }
    .header h2 {
      font-size: 2em; 
    }
    .container {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    .testimonial {
      background-color: white;
      border-radius: 8px;
      padding: 20px;
      color: #333;
      width: 300px; 
      text-align: center; 
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    }
    .rating {
      color: gold;
      margin: 10px 0;
    }
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      display: block;
      margin: 0 auto 10px;
    }
      h6{
  color: #8D5CF6;}
  `;

  render() {
    return html`
      <div class="header">
      <h6>Testimonials</h6>
        <h2>Get Quality Education</h2>
        <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
      </div>
      
      <div class="container">
        <div class="testimonial">
          <img src="./src/assets/girp.jpg" alt="Regina Miles" />
          <p>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
          <div class="rating">★★★★☆</div>
          <p>Regina Miles</p>
          <p>Designer</p>
        </div>

        <div class="testimonial">
          <img src="./src/assets/picg.jpg" alt="Regina Miles" />
          <p>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
          <div class="rating">★★★★☆</div>
          <p>Regina Miles</p>
          <p>Designer</p>
        </div>
      </div>
    `;
  }
}

customElements.define('testimonials-section', TestimonialsSection);
