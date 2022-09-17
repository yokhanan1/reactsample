import { useState, useEffect } from 'react';
import axios from '../../Apis/Axios';

function App() {

  let [data, setData] = useState(<tr><td colSpan ="3" >...loading</td></tr>);

  
  async function getUserData(){

    try{
      const userData = await axios.get('/users');
      console.log(userData);
      if (userData.status === 200){
        let response = userData.data;
        let items = response.map((item)=> {
          return (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            </tr>)

        });
        setData(items);
      } 
      else {
        throw "Error fetching data";
      }
    } catch(error){
      console.error(error);
    }
  }


  useEffect(function(){getUserData()}, []);
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jax</td>
            <td>jax@gmail.com</td>
            <td>1327998765</td>
          </tr>
          {data}
        </tbody>
      </table>

    </div>
  )
}

export default App;
