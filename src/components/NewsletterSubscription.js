import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

class NewsletterSubscription extends LitElement {
    static styles = css`
        .container {
            text-align: center;
            color:white;
        }
        input[type="email"] {
            padding: 10px;
            width: 250px;
            border: none;
            border-radius: 5px;
            margin-right: 10px;
        }
        button {
            padding: 10px 20px;
            background-color: #6A5ACD;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #5A4BBD;
        }
            h6{
            color: #8D5CF6;

            }
              .color{
    color: #26335D;
      }
    `;

    render() {
        return html`
            <div class="container">
                <h6>Newsletter</h6>
                <h1>Our Popular Courses</h1>
                <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                <input type="email" placeholder="Your Email" required>
                <button @click="${this.subscribe}">Subscribe</button>
            </div>
             <div>
      <p class ="color">
      dddd
      </p>
      </div>
        `;
    }

    subscribe() {
        alert('Subscription successful!');
    }
    
}

customElements.define('newsletter-subscription', NewsletterSubscription);
