import React,{useEffect,useState} from 'react';
import './App.css';
import axios from "axios" 

function App() {
  const[columns,setColumns]=useState([]);
  const[records,setRecords]=useState([])
useEffect(()=>{
  axios.get("http://localhost:3000/api/findall")
  .then(res=>{
setColumns(Object.keys(res.data[0]),
setRecords(res.data)

)
  })
},[])




  return (
    <div>
<table>

<thead>
  <tr>
    {columns.map((c,i)=>(
<th key={i}>{c}</th>
    ))
    }</tr>
</thead>
<tbody>

</tbody>
{
  records.map((d,i)=>(
<tr key={i}>
<td>{d.StudentId}</td>
<td>{d.Name}</td>
<td>{d.Roll}</td>
<td>{d.Birthday}</td>
<td>
  <button>Edit</button>
  <button>Delete</button>
</td>
</tr>
  ))
}


</table>

    </div>
  );
}

export default App;
