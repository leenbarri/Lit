import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

class TeamMembers extends LitElement {
  static styles = css`
    .container {
      padding: 40px;
      text-align: center;
    }
    .team {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      margin-top: 20px;
    }
    .member-card {
      background: white;
      border-radius: 15px;
      padding: 20px;
      text-align: center;
      width: 240px;
      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
      margin: 10px;
      position: relative;
    }
    .member-card img {
      width: 100%;
      height: 200px;
      border-radius: 15px;
    }
    .social-links {
      margin-top: 10px;
    }
    .social-links a {
      margin: 0 5px;
      text-decoration: none;
      color: #0073e6;
      font-size: 20px;
    }
    .title {
      font-size: 32px;
      margin-bottom: 10px;
    }
      .text{
      color: white;
      }
      h6{
  color: #8D5CF6;
}
  
  `;

  render() {
    const members = [
      { name: 'Julian Jameson', profession: 'Profession', img: './src/assets/wp.jpg' },
      { name: 'Julian Jameson', profession: 'Profession', img: './src/assets/mp.jpg' },
      { name: 'Julian Jameson', profession: 'Profession', img: './src/assets/mmp.jpg' },
      { name: 'Julian Jameson', profession: 'Profession', img: './src/assets/wwpin.jpg' },
    ];

    return html`
      <div class="container">
      <div class="text">
      <h6>Team</h6>
        <h2 class="title">Watch our Courses</h2>
        <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
        </div>
        <div class="team">
          ${members.map(member => html`
            <div class="member-card">
              <img src="${member.img}" alt="${member.name}">
              <h3>${member.name}</h3>
              <p>${member.profession}</p>
            </div>
          `)}
        </div>
      </div>
    `;
  }
}

customElements.define('team-members', TeamMembers);
