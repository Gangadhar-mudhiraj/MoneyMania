import React from 'react';
import HomeView from '../views/HomeView.tsx';
import background from "../assets/Background.jpg";

const HomeContainer: React.FC = () => {
    return (
        <section
            id="home"
            className="bg-cover mt-[-3.5rem] bg-center flex flex-col justify-center items-center min-h-screen"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            <div className="w-full p-12 rounded-lg">
                <HomeView />
            </div>
        </section>
    );
};

export default HomeContainer;
