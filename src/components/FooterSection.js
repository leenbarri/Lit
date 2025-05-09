import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';
class FooterSection extends LitElement {
  static styles = css`
    .footer {
      display: flex;
      justify-content: space-around;
      padding: 20px;
      background-color:white;
    }
    .column {
      display: flex;
      flex-direction: column;
      margin: 0 20px;
    }
    .column h2 {
      font-size: 1.5em;
      margin-bottom: 10px;
      color: #333;
    }
    .column p {
      margin: 5px 0;
      color: #555;
    }
    .contact-info {
      color: #7b1fa2;
    }
  `;

  render() {
    return html`
      <div class="footer">
        <div class="column">
          <h2>Company Info</h2>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div class="column">
          <h2>Legal</h2>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div class="column">
          <h2>Features</h2>
          <p>Business Marketing</p>
          <p>User Analytic</p>
          <p>Live Chat</p>
          <p>Unlimited Support</p>
        </div>
        <div class="column">
          <h2>Resources</h2>
          <p>IOS & Android</p>
          <p>Watch a Demo</p>
          <p>Customers</p>
          <p>API</p>
        </div>
        <div class="column">
          <h2>Get In Touch</h2>
          <p class="contact-info">(480) 555-0103</p>
          <p class="contact-info">4517 Washington Ave. Manchester, Kentucky 39495</p>
          <p class="contact-info">debra.holt@example.com</p>
        </div>
      </div>
    `;
  }
}

customElements.define('footer-section', FooterSection);
