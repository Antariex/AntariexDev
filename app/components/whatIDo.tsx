import React, { useEffect } from 'react';

function WhatIDo() {
    useEffect(() => {
        const questionContainers = document.querySelectorAll('.question-container');

        questionContainers.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active');
                const content = item.querySelector('.content');
                if (content) {
                    content.style.maxHeight = item.classList.contains('active') ? content.scrollHeight + 'px' : 0;
                }
            });
        });
    }, []);

    return (
        <div className="whatIDo">

            <h2 className='whatIDoTitle'>What I Do</h2>
            <div className="accordion-body">
                <div className="accordion">

                    <div className="container question-container">
                        <div className="label">Front-End (Web Development)</div>
                        <div className="content">
                            I possess a robust foundation in web development, encompassing essential skills in HTML, CSS, and JavaScript. Elevating my design capabilities with Bootstrap and Tailwind CSS to create visually appealing UI. With expertise in frameworks like React.js and Remix, I craft modern, dynamic interfaces that prioritize an optimal UX. My commitment to code maintainability is reflected in my mastery of TypeScript. In summary, I am able to conceptualize, construct, and implement comprehensive web solutions that seamlessly blend functionality and aesthetics.
                        </div>
                    </div>

                    <br />

                    <div className="container question-container">
                        <div className="label">Back-End Development</div>
                        <div className="content">
                            On the back-end front, I've expanded my technological toolkit with languages such as Java, JavaScript, and Python, enabling the creation of robust and scalable systems. Managing server-side logic using Node.js and ensuring effective data management through MySQL databases, I bring a holistic approach to web development. My proficiency in Linux environments enhances my ability to implement and manage developments with efficiency.
                        </div>
                    </div>

                    <br />

                    <div className="container question-container">
                        <div className="label">Mobile App Development</div>
                        <div className="content">
                            Venturing into mobile app development, I've explored Progressive Web Apps (PWAs) and native app development, particularly for Android. Leveraging technologies such as Java, Kotlin, and Jetpack Compose, I've acquired hands-on experience in crafting mobile applications that align with contemporary standards.
                        </div>
                    </div>

                    <div className="container question-container">
                        <div className="label">Law & Education</div>
                        <div className="content">
                            Beyond my technical expertise, I bring a wealth of experience in law and education. With over a decade of practice, I've served as a lawyer for insurance companies and a law professor, demonstrating versatility and a multidisciplinary approach to my professional journey.
                        </div>
                    </div>
                </div>
            </div>
            <a
            target="_blank"
            href="https://drive.google.com/file/d/1qYz9bXUvLhkQV86eknXdOezdswUxxrxC/view?usp=sharing"
            rel="noreferrer">
            <button className="button buttonRed">MY PROJECTS</button>
          </a>
        </div>
    );
}

export default WhatIDo;
