import React from "react";
import SimpleImageSlider from 'react-simple-image-slider';
import "./App.css";
import Header from "./Header";

function Vehicles() {

    const images = [
        { url: "https://i0.wp.com/www.technopixel.org/wp-content/uploads/2022/01/2022-bmw-8-spotted-with-camouflage-XOWcNzhS.jpg" },
        { url: "https://i.ytimg.com/vi/L42-aFe8bMo/maxresdefault.jpg" },
        { url: "https://www.motortrend.com/uploads/sites/10/2021/12/2021-volvo-xc90-momentum-4wd-suv-angular-front.png" },
        { url: "https://i.ytimg.com/vi/qbRqySW39TI/maxresdefault.jpg" },
        { url: "https://cdn.motor1.com/images/mgl/2bpkE/s1/2019-ford-focus-coupe-rendering-photo.jpg"},
        { url: "https://www.cars-data.com/pictures/thumbs/350px/toyota/toyota-yaris_4093_1.jpg"},
        { url: "https://www.carscoops.com/wp-content/uploads/2020/08/SEAT-Ibiza-1.5-TSI-150-PS-DSG-0.jpg"},
        { url: "https://www.automaniac.org/resources/images/variant/662/punto_2a.jpg"},

    ];
    return <div>
        <Header />
            {/* <h1>Shkodra Rentals</h1> */}
        <div className="slider">
            <SimpleImageSlider
                width={1500}
                height={650}
                images={images}
                showBullets={true}
                showNavs={true}
            />
        </div>
        <div>
            <h1>BMW</h1>
            The original 3 Series Sedan brought power, agility, and spirit to the everyday driver. With efficient technology and refined engineering, that performance has only grown more pronounced.
            The 3 Series brings power and innovation together in a sedan made to move  from the combustion engine and integrated electric motor of the 330e to the M340i’s robust inline-6 cylinder that can generate up to 382 horsepower.
            <h1>Range Rover</h1>
            The 2022 Range Rover Sport is luxurious and fits your lifestyle. Explore the most dynamic Range Rover Sport yet, and customize yours today.
            The Land Rover Range Rover is a 4x4 motor car produced by Land Rover, a marque and sub-brand of Jaguar Land Rover. The Range Rover line was launched in 1970 by British Leyland and is now in its fifth generation.
            <h1>Audi</h1>
            Audi AG  is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany. As a subsidiary of its parent company, the Volkswagen Group, Audi produces vehicles in nine production facilities worldwide. 
            <h1>Volvo</h1>
            The Volvo Group  is a Swedish multinational manufacturing corporation headquartered in Gothenburg. While its core activity is the production, distribution and sale of trucks, buses and construction equipment, Volvo also supplies marine and industrial drive systems and financial services. In 2016, it was the world's second-largest manufacturer of heavy-duty trucks
            <h1>Ford Focus</h1>
            The Ford Focus is a compact car  manufactured by the Ford Motor Company and created under Alexander Trotman's Ford 2000 plan, which aimed to globalize model development and sell one compact vehicle worldwide. The original Focus was primarily designed by Ford of Europe's German and British teams.
            <h1>Toyota Yaris</h1>
            The Toyota Yaris  is a supermini car sold by Toyota since 1999, replacing the Starlet and Tercel.
            Up to 2019, Toyota had used the Yaris nameplate on export versions of various Japanese-market models, with some markets receiving the same vehicles under the Toyota Echo name through 2005. Starting in 2020, the Yaris nameplate began to be used in Japan, which replaced the Vitz nameplate.
            <h1>Seat Ibiza</h1>
            The SEAT Ibiza is a supermini car that has been manufactured by Spanish car manufacturer SEAT since 1984. 
            It is SEAT's best-selling car.The Ibiza is named after the Spanish island of Ibiza and was the second SEAT model to be named after a Spanish location, after the SEAT Málaga. 
            It was introduced at the 1984 Paris Motor Show as the first car developed by SEAT as an independent company, although it was designed by SEAT in collaboration with well-known firms including Italdesign, Karmann, and Porsche.
        </div>
    </div>
}

export default Vehicles;