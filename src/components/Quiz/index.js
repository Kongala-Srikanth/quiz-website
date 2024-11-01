import './index.css'

const Quiz = () => {
    return (
        <div className="quiz-container">
        <header>
            <h1>Quiz Title</h1>
            <p>Answer the following questions</p>
        </header>
        <section className="question-section">
            <div className="question">
                <h2>1. What is the capital of France?</h2>
                <label>
                    <input type="radio" name="q1" value="A" /> A) Berlin
                </label>
                <label>
                    <input type="radio" name="q1" value="B" /> B) Madrid
                </label>
                <label>
                    <input type="radio" name="q1" value="C" /> C) Paris
                </label>
                <label>
                    <input type="radio" name="q1" value="D" /> D) Rome
                </label>
            </div>
            <div className="question">
                <h2>2. Which planet is known as the Red Planet?</h2>
                <label>
                    <input type="radio" name="q2" value="A" /> A) Earth
                </label>
                <label>
                    <input type="radio" name="q2" value="B" /> B) Mars
                </label>
                <label>
                    <input type="radio" name="q2" value="C" /> C) Jupiter
                </label>
                <label>
                    <input type="radio" name="q2" value="D" /> D) Saturn
                </label>
            </div>
        </section>
        <button className="submit-button">Submit Answers</button>
    </div>
    )
}

export default Quiz