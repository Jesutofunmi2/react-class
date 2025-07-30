import React, { useEffect, useState } from 'react'



const Home = () => {
  const studentData = [
  {
    id: 1,
    name: "Balogun Joseph",
    gendar: "male",
    state: "Oyo",
    school: {
      primary: "Oluyole extention Primary School",
      secondary: "Aiyedaade",
      University: "FUTA",
    },
    image: {
    filepath: "",
    systempath: "",
    name: "",
    extention: "",
    }
 },
{
  id: 2,
  name: "Ayomide",
  gendar: "Female",
  state: "Osun",
  school: {
    primary: "Oluyole extention Primary School",
    secondary: "Aiyedaade",
    University: "FUTA",
  },
  image: {
   filepath: "",
   systempath: "",
   name: "",
   extention: "",
  }
},
]

  const [value, setValue] = useState([])
  const [error, setError] = useState("");
  useEffect(()=> {
    if(studentData.length > 0){
      setValue(studentData);
    } else{
       setError("No Data")
    }

  }, []);

  return (
    <div style={{ margin: "120px"}}>
    <div>Home</div>
    {error}
    <div>
      {value?.map((i, index) => (
        <ul key={index}>
        <li>{i.name}</li>
        <li>{i.gendar}</li>
        <li>{i.state}</li>
        </ul>
    ))}
    </div>

    </div>
  )
}

export default Home