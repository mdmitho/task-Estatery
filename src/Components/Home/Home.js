import React from 'react';
import Card from '../Card/Card';
import Search from '../SearchProperties/Search';

const Home = () => {
    return (
      <div className="container mx-auto">
        <Search></Search>
        <Card></Card>
      </div>
    );
};

export default Home;