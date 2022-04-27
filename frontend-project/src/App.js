import React, { useEffect, useState } from 'react';
import "./App.css";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { faYoutube,faFacebook,faTwitter,faInstagram} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Header";
import { Link } from 'react-router-dom';



function Home() {
    //Declare new state variables to call filter, cars and filtertype
    const [filter, setFilter] = useState("");

    const [cars, setCars] = useState([]);

    const [filterType, setFilterType] = useState("name");



    const getData = () => { //function to get data from backend 

        if (filter === "") { // if statement to call all cars from backend 

            fetch("http://localhost:8080/cars")

                .then(res => res.json())

                .then(json => setCars(json));
        }
        else { // filter the cars by atributtes

            fetch("http://localhost:8080/cars/" + filterType + "/" + filter)

                .then(res => res.json())

                .then(json => setCars(json));

        }

    }
    useEffect(() => { //we can replicate the functionalities of core lifecycle components such as componentDidUpdate, componentDidMount or componentWillUnmount

        fetch("http://localhost:8080/cars").then(res => res.json()).then(json => setCars(json));

    }, []);

    return ( // We have returned an image, a  form to add the filter, some cards and the data from backend and the links of social media
        <div>
            <div>
                <img className='homeimg' src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80"
                    height="100%" /> 
            </div>
            <h1>All RENTALS BY APPOINTMENTS ONLY</h1>

            <div className="box">

                <input type="text" value={filter} onChange={(event) => {

                    setFilter(event.target.value);

                }} className="input-search"></input>

                <select onChange={(event) => {

                    setFilterType(event.target.value);

                }} name="filterType">

                    <option value="name">Filter by name</option>

                    <option value="num_seat">Filter by the number of the seats</option>

                    <option value="num_doors">Filter by the number of the doors</option>

                    <option value="fuel">Filter by fuel</option>

                    <option value="price">Filter by price</option>

                    <option value="period">Filter by period</option>
                </select>
                 
                <button onClick={getData} className="search-btn">Search</button>
            </div>
            <div className="App1">
                {cars.map(el =>
                    <div>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={el.url}
                                    alt="product"
                                />
                                <CardContent>
                                    <Typography>{el.name}</Typography>
                                    <Typography>Number of doors: {el.num_doors}</Typography>
                                    <Typography>Number of seats: {el.num_seat}</Typography>
                                    <Typography>Fuel: {el.fuel}</Typography>
                                    <Typography>Rent: {el.price} $ per day</Typography>
                                    <Typography>Period: {el.period} </Typography>
                                    <Link to="/book"><button className="book-button">Book</button></Link>
                                </CardContent>
                            </CardActionArea>
                            
                        </Card>
                    </div>
                )}
            </div>
           
             <div class="social-container" >

                    <a href="https://www.youtube.com/" className="youtube social"> <FontAwesomeIcon icon={faYoutube} size="2x" /> </a>

                    <a href="https://www.facebook.com/" className="facebook social"><FontAwesomeIcon icon={faFacebook} size="2x" /> </a>

                    <a href="https://twitter.com/?lang=en" className="twitter social"><FontAwesomeIcon icon={faTwitter} size="2x" /> </a>

                    <a href="https://www.instagram.com/" className="instagram social"><FontAwesomeIcon icon={faInstagram} size="2x" /> </a>

                </div>
        </div>
    )
}
export default function App() { // call the functions
    return <div>
        <Header />
        <Home />
    </div>
}



