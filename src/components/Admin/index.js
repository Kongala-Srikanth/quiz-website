import './index.css'

const Admin = () => {
    return (
        <div className='admin-login-main-container'>
        <div className="login-container">
        <div className="login-card">
            <h2>Admin Login</h2>
            <form>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>    
            </form>
        </div>
        </div>
        </div>
    )
}

export default Admin