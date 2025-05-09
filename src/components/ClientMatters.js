import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';
class ClientMatters extends LitElement {
  static styles = css`
    :host {
      display: block;
      color: white;
      padding: 20px;
    }
    .header {
      text-align: center;
      margin-bottom: 20px;
    }
      h4{
      color:rgb(141, 92, 246);}
    .cards {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    .card {
      background-color: white;
      color: black;
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      margin: 10px;
      width: 200px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: transform 0.2s;
    }
    .card:hover {
      transform: scale(1.05);
    }
    .icon {
      font-size: 40px;
    }
  `;

  render() {
    return html`
      <div class="header">
        <h4>Practice Advice</h4>
        <h1>Every Client Matters</h1>
        <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
      </div>
      <div class="cards">
        <div class="card">
          <div class="icon">📊</div>
          <h5>training Courses</h5>
          <p>2,769 online courses</p>
          <p>The gradual accumulation of information about</p>
        </div>
        <div class="card">
          <div class="icon">📚</div>
          <h5>Books Library</h5>
          <p>2,769 online courses</p>
          <p>The gradual accumulation of information about</p>
        </div>
        <div class="card">
          <div class="icon">🗣️</div>
          <h5>Consultation</h5>
          <p>2,769 online courses</p>
          <p>The gradual accumulation of information about</p>
        </div>
      </div>
    `;
  }
}

customElements.define('client-matters', ClientMatters);
