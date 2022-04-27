import "./App.css";
import { AppBar } from "@mui/material";
import { Link } from 'react-router-dom';

export default function Header(){
    return( 
        <AppBar>
                <div className='appbar'>
                    <div>
                        <h1>Shkodra Rentals</h1>
                    </div>
                    <div className='app-bar'>
                        <Link to="/home">Home</Link>
                        <Link to="/policies">Policies</Link>
                        <Link to="/vehicles">Vehicles</Link>
                    </div>
                </div>
            </AppBar>
    )
}