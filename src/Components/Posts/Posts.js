import { useState, useEffect } from 'react';
import axios from '../../Apis/Axios';


function App() {

  let [posts, setPosts] = useState(<tr><td colSpan ="4" >...loading</td></tr>);


  async function getPostData(){

    try{
      const postData = await axios.get('/posts');
      console.log(postData);
      if (postData.status === 200){
        let response = postData.data;
        let items = response.map((item)=> {
          return (
          <tr key={item.id}>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
            </tr>)

        });
        setPosts(items);
      } 
      else {
        throw "Error fetching data";
      }
    } catch(error){
      console.error(error);
    }
  }
    
  useEffect(function(){getPostData();}, []);
  return (
      <div>
      
 <table border="1">
        <thead>
          <tr>
            <th>User Id</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts}
        </tbody>
      </table>


    </div>
  )
}
  

export default App;
