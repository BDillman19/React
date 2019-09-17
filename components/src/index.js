import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import Faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="sam" 
                time="6:00PM" 
                message="Nice blog post" 
                image={Faker.image.avatar()}/>
            <CommentDetail 
                author="bryce" 
                time="6:52PM" 
                message="informative" 
                image={Faker.image.avatar()}/>
            <CommentDetail 
                author="kayla" 
                time="7:20PM" 
                message="interesting points" 
                image={Faker.image.avatar()}/>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);