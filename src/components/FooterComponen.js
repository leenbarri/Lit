import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

class FooterComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 20px;
      background-color: white;
      text-align: center;
      font-size: 14px;
      background-color: #f8f8f8;
    }
   
  `;

  render() {
    return html`
      <div>
        <p>Made With Love By Figmaland All Rights Reserved</p>
        </div>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
