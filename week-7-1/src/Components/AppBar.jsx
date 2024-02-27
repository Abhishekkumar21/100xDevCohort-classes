import { useNavigate } from "react-router-dom";
export function AppBar() {
    const navigate = useNavigate();

    return (
        <div style={{ background: 'skyBlue', borderBottom: '2px solid black', padding: '10px' }}>
            <button onClick={() => navigate('/dashboard')} >Dashboard</button>
            <button onClick={() => navigate('/')} >Landing Page</button>
        </div>
    )
}