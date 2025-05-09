import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';
class StatisticsCard extends LitElement {
  static styles = css`
    .container {
      display: flex;
      justify-content: space-around;
      padding: 20px;
      color: #ecf0f1;
    }
    .stat {
      text-align: center;
    }
    .stat h1 {
      font-size: 3rem;
      color:  #6d28d9;
    }
    .stat p {
      font-size: 1rem;
      margin: 0;
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="stat">
          <h1>15K</h1>
          <p>Happy Customers</p>
        </div>
        <div class="stat">
          <h1>150K</h1>
          <p>Monthly Visitors</p>
        </div>
        <div class="stat">
          <h1>15</h1>
          <p>Countries Worldwide</p>
        </div>
        <div class="stat">
          <h1>100+</h1>
          <p>Top Partners</p>
        </div>
      </div>
    `;
  }
}
customElements.define('statistics-card', StatisticsCard);
