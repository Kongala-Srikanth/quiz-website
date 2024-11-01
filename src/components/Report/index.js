import './index.css'

const Report = () => {
    return (
        <div className="report-container">
        <header>
            <h1>Reports</h1>
            <p>View detailed quiz performance and user statistics</p>
        </header>
        <section className="report-table">
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Quiz Title</th>
                        <th>Score</th>
                        <th>Date Taken</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>Math Quiz</td>
                        <td>85%</td>
                        <td>2024-10-10</td>
                        <td><button>View</button></td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
    )
}

export default Report