import { LitElement, html, css } from 'https://cdn.skypack.dev/lit';

class MostPopularCourses extends LitElement {
    static styles = css`
        .container {
            max-width: 1200px;
            margin: auto;
            padding: 20px;
            text-align: center;
            color: white; 
        }
        h1 {
            font-size: 2.5rem;
        }
        .courses {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
        }
        .course {
            border-radius: 15px;
            padding: 15px;
            text-align: left;
            position: relative;
            overflow: hidden; 
            transition: transform 0.2s;
        }
        .course:hover {
            transform: scale(1.05); 
        }
        .sale {
            position: absolute;
            top: 10px;
            right: 10px;
            background: red;
            color: white;
            padding: 5px;
            border-radius: 5px;
            font-weight: bold;
        }
        img {
            width: 100%;
            border-radius: 10px;
            height:150px;
        }
        .rating {
            display: flex;
            align-items: center;
            font-size: 1.2rem;
        }
        .price {
            font-size: 1.5rem;
            color: gold;
        }
        button {
            background: #6f7dff;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background: #556fbf; 
}

    h6{
    color: #8D5CF6;}
    `;

    render() {
        return html`
            <div class="container">
            <h6> Courses</h6>
                <h1>Most Popular Courses</h1>
                <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.</p>
                <div class="courses">
                    ${this.courses.map(course => this.renderCourse(course))}
                </div>
            </div>
        `;
    }

    renderCourse(course) {
        return html`
            <div class="course">
                ${course.sale ? html`<div class="sale">Sale</div>` : ''}
                <img src="${course.image}" alt="${course.title}" />
                <div class="rating">⭐ ${course.rating}</div>
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <p class="price">💰 ${course.price} <span>(${course.originalPrice})</span></p>
                <p>${course.sales} Sales</p>
                <button @click="${() => this.learnMore(course.id)}">Learn More</button>
            </div>
        `;
    }

    learnMore(courseId) {
        console.log(`Learn more about course ID: ${courseId}`);
    }

    static get properties() {
        return {
            courses: { type: Array },
        };
    }

    constructor() {
        super();
        this.courses = [
            {
                id: 1,
                title: 'Expert Instruction',
                description: 'We focus on ergonomics and meeting you...',
                rating: 4.9,
                price: '$6.48',
                originalPrice: '$16.48',
                sales: 15,
                sale: true,
                image: './src/assets/expic.jpg',
            },
            {
                id: 2,
                title: '2,769 online courses',
                description: 'We focus on ergonomics and meeting you...',
                rating: 4.9,
                price: '$6.48',
                originalPrice: '$16.48',
                sales: 15,
                sale: true,
                image: './src/assets/onpic.jpg',
            },
            {
                id: 3,
                title: 'Trining Courses',
                description: 'We focus on ergonomics and meeting you...',
                rating: 4.9,
                price: '$6.48',
                originalPrice: '$16.48',
                sales: 15,
                sale: true,
                image: './src/assets/trinpic.jpg',
            },
            {
                id: 4,
                title: 'Lifetime access',
                description: 'We focus on ergonomics and meeting you...',
                rating: 4.9,
                price: '$6.48',
                originalPrice: '$16.48',
                sales: 15,
                sale: true,
                image: './src/assets/lifepic.jpg',
            },
            
        ];
    }
}

customElements.define('most-popular-courses', MostPopularCourses);
