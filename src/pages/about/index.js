import { useNavigate } from "react-router";

export default function About() {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    return (
        <div>
            <h1>This is my project with router:</h1>
            <button className="button" onClick={goHome}>
                Go home
            </button>
        </div>
    );
}
