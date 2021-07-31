import axios from 'axios';
import React, { useEffect, useState } from 'react';

const User: React.FC = () => {
  const [greetings, setGreetings] = useState('');
  useEffect(() => {
    axios.get('http://localhost:3003').then((response) => {
      setGreetings(response.data);
    });
  }, []);
  return <div>User Page: {greetings}</div>;
};

export default User;
