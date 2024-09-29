import { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [url,setUrl]=useState('');
  const [info,setInfo]=useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();
  useEffect(()=>{
    fetch('http://localhost:3000/url/')
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      console.log("use effect");
      console.log(data);
      setInfo(data);
    })
  },[isSubmitted])

  const handleOnClick = () => {
    console.log("hiihii", url);
    fetch('http://localhost:3000/url/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({url:url})
    })
    .then((res)=>{
      // console.log(res);
      // console.log("first then finished here ");
    return res.json();
    })
    .then(data=>{
      console.log(data);
      console.log(data.id);
      // if(data.myerr){
      //   alert("please login first");
      //   navigate("/login")
      // } 
       alert(`short id:\n ${data.id} \n full url: http://localhost:3000/url/${data.id}`);
      setIsSubmitted(true);
    })
}


  return (
    <>
      <h1>URL Shortener</h1>

      <span>Enter Your URL: </span>
      <input type="text" placeholder="https://example.com" value={url} onChange={(e)=>{
        setUrl(e.target.value)
        console.log(e.target.value);
      }} />
      <button onClick={handleOnClick}>Generate</button>

      {/* table */}
      <table border="1" cellPadding="10" style={{ marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Short ID</th>
            <th>full shortUrl</th>
            <th>Redirect URL</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {info.map((item, index) => (
            <tr key={item.shortId}>
              <td>{index + 1}</td>
              <td>{item.shortId}</td>
              <td>http://localhost:3000/url/{item.shortId}</td>
              <td>{item.redirectUrl}</td>
              <td>{item.visitHistory.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Dashboard;
