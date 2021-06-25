import axios from 'axios';
import { useState, useEffect } from 'react';

function App(): any {
  const [result, setResult] = useState('');
  useEffect((): any => {
    axios.get('http://ec2-3-142-146-122.us-east-2.compute.amazonaws.com')
    .then(res => {
      console.log('--- res === ', res)
      setResult(res.data);
    })
  }, [])
  
  return (
    <div className="App">
      {result}
    </div>
  );
}

export default App;
