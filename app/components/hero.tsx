function Hero() {
    return (
        <div>
            <div className="indexHero">
                <div>
                    <img src="./images/me.jpg" alt="Ariel Antequiera" className="me" />
                </div>

                <div>
                    <h4 className='title'>FullStack Web and Mobile Dev</h4>
                    <h1>Ariel Antequiera</h1>
                    <p>Hello! This website reflects my enthusiasm to grow as a professional in the software industry.
                        <br />
                        <br />
                        I have specialized in mobile and web development.</p>
                    <br />
                    <br />
                    <p className="moto">
                        Coding with 🤎 from Buenos Aires.
                    </p>
                    <br />
                    <br />
                    <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1qYz9bXUvLhkQV86eknXdOezdswUxxrxC/view?usp=sharing"
                        rel="noreferrer">
                        <button className="button buttonBlue">Download CV</button>
                    </a>
                    <a
                        target="_blank"
                        href="mailto:arielantequiera@gmail.com"
                        rel="noreferrer">
                        <button className="button buttonWhite">Contact me</button>
                    </a>
                </div>
            </div>
        </div>

    );
}

export default Hero;