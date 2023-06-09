import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
        <div>
            Welcome to the landing page. Checkout the <Link to="top100">Top 100 Movies of all time</Link>
        </div>
    )
}

export default LandingPage