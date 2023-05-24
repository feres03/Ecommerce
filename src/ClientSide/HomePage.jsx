import React from 'react'
import ControlledCarousel from './Carousel'
import FirstBloc from './FirstBloc'
import SecondBloc from './SecondBloc'
import ThirdBloc from './ThirdBloc'
import AboutUs from './AboutUs'
import Footer from './Footer'



const HomePage = () => {
    return (
        <div>
            <ControlledCarousel />
            <FirstBloc />
            <SecondBloc />
            <ThirdBloc />
            <AboutUs />
            <Footer />
        </div>
    )
}

export default HomePage