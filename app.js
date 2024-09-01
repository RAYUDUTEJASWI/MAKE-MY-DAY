// App.js
import React from 'react';
import './styles.css';
import Navbar from './Navbarr';
import Hero from './Hero';
import BookingSection from './BookingSection';
import EventsSection from './EventsSection';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Hero />
                <BookingSection />
                <EventsSection />
                <Footer />
            </div>
        );
    }
}

export default App;
