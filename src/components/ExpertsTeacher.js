import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';
class ExpertsTeacher extends LitElement {
    static styles = css`
        :host {
            display: flex;
            padding: 20px;
        }
        .content {
            display: flex;
            flex: 1;
            margin-left: 20px;
            color: white;
        }
        .image {
            width: 300px;
            border-radius: 15px;
            overflow: hidden;
            position: relative;
        }
        .play-button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #6e7dff;
            border: none;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            color: white;
            font-size: 24px;
            cursor: pointer;
        }
        .text-container {
            max-width: 500px;
            margin-left: 20px;
            color:white;

        }
        .text-container h1 {
            font-size: 32px;
        }
        .text-container p {
            font-size: 16px;
            line-height: 1.5;
        }
        .learn-more {
            color:  #6d28d9;
            cursor: pointer;
            text-decoration: underline;
        }
    `;

    render() {
        return html`
            <div class="image">
                <img src="./src/assets/gpic.png" alt="Expert Teacher" />
                <button class="play-button">▶</button>
            </div>
            <div class="text-container">
                <h1>Our Experts Teacher</h1>
                <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                <span class="learn-more">Learn More &gt;</span>
            </div>
        `;
    }
}

customElements.define('experts-teacher', ExpertsTeacher);
