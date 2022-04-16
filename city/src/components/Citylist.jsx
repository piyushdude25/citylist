import React from 'react';
import {useState, useEffect} from "react";
import axios from "axios";

export const Citylist = () => {
    const [data, setData] = useState([])
    const [value, setValue] = useState("")
    const [sortValue, setSortValue] = useState("")

    const sort = ["country","city","population"]

    useEffect(() => {
        loadUserdata()
    })

    const loadUserdata = async () => {
        return await axios
        .get("http://localhost:3050/users")
        .then((response) => setData(response.data))
        .catch((err)=>console.log(err))

    }
    console.log("data",data)

    const handleAsc =() =>{

    }
const handlSearch=async (e)=>{

return await axios.get(`http://localhost:3050/users?q=${value}`)
.then((response)=> setData(response.data)).catch((err) => console.log(err))
}

  return (
    <>
      <div>
          <form action="" onSubmit={handlSearch}>
          <input type="text" placeholder='search city'
          value={value} onChange={(e) => setValue(e.target.value)} />
          <button type='submit'>Search</button>
          </form>

        <div>
            <button  onClick={()=> handleAsc}>Asc</button>
            <button>Dsc</button>
        </div>

          <table>
              <tr>
                  <th >id</th>
                  <th >Country</th>
                  <th>City</th>
                  <th>Population</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  

              </tr>
              <div>
                  {data.length === 0 ? (
                      <tr>
                          <td>NO Datas</td>
                      </tr>
                  ): (
                      data.map((item, index) => (
                          <tr>
                              <th>{index+1}</th>
                              <td>{item.id}</td>
                              <th>{item.country}</th>
                              <th>{item.city}</th>
                              <th>{item.population}</th>
                             
                          </tr>
                      ))
                  ) }
              </div>
              
          </table>
          <div>
              <h3>filter</h3>
              <select name="" id=""  value={sortValue}>
                  <option value="">select Country</option>
                  <option value="">a</option>
                  <option value="">b</option>
                  <option value="">c</option>
                  <option value="">d</option>
                  {}
              </select>
          </div>

      </div>
    </>
  )
}

 
