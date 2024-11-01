import './index.css'

const ReportDetails = () => {
    return (
        <div className="report-details-container">
        <header>
            <h1>Report Details</h1>
            <p>Detailed view of user performance for the selected quiz</p>
        </header>
        <section className="report-info">
            <div className="info-item">
                <span>Number of Questions:</span> 10
            </div>
            <div className="info-item">
                <span>Number of Correct Answers:</span> 8
            </div>
            <div className="info-item">
                <span>Number of Wrong Answers:</span> 2
            </div>
            <div className="info-item">
                <span>Score:</span> 80%
            </div>
            <div className="info-item">
                <span>Percentage:</span> 80%
            </div>
            <div className="info-item">
                <span>Date and Time:</span> 2024-10-10 14:30
            </div>
            <div className="info-item">
                <span>Quiz Number:</span> Quiz 1
            </div>
        </section>
    </div>
    )
}

export default ReportDetails