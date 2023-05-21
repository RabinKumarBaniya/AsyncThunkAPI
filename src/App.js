
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { getAllData } from './features/gitUserSlice';

function App() {

  const dispatch = useDispatch();
  const data = useSelector((state) => {
    console.log("state...", state.app)
    return state.app;
  });

  if (data.loading) {
    return <h2>Loading....</h2>
  }
  if (data.error != null) {
    return <h3>{data.error}</h3>
  }

  return (
    <div className="App">
      <h1>Github users</h1>
      <button onClick={() => dispatch(getAllData())}> Get Github Users</button>
      {data.users.map((ele) => (
        <li key={ele.id}>{ele.login}</li>
      ))}
    </div>
  );
}

export default App;
