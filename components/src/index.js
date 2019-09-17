import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import Faker from 'faker';
import ApprovalCard from './ApprovalCode';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="sam" 
          time="6:00PM" 
          message="Nice blog post" 
          image={Faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="bryce" 
          time="6:52PM" 
          message="informative" 
          image={Faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="kayla" 
          time="7:20PM" 
          message="interesting points" 
          image={Faker.image.avatar()}/>
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);