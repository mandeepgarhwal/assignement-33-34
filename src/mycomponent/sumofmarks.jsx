import React, { useState } from 'react'

export default function Sumofmarks() {
    // const [mathsmarks, setmathsmarks] = useState(0)
    // const [physicsmarks, setphysicsmarks] = useState(0)
    // const [chemmarks, setchemmarks] = useState(0)
    const [totalmarks, settotalmarks] = useState(0)
    const [mathsmarkst, setmathsmarkst] = useState(0)
    const [physicsmarkst, setphysicsmarkst] = useState(0)
    const [chemmarkst, setchemmarkst] = useState(0)
    // const [totalmarkst, settotalmarkst] = useState(0)
    function displaymarks(){
        console.log(mathsmarkst)
        console.log(physicsmarkst)
        console.log(chemmarkst)
        let sumtotal = parseInt(mathsmarkst) + parseInt(physicsmarkst) + parseInt(chemmarkst)
        // console.log (sumtotal)
        settotalmarks( sumtotal)
    }
  return (
    <>
    <br /> <br />
    <h2>Marks obtained in maths</h2>
    <br />
    <input id = "maths" placeholder="Please enter marks obtained in maths" style={{padding : "10px", margin : "10px"}} onChange={(e) => {setmathsmarkst(e.target.value)}}></input>
    <br />
    <h2>Marks obtained in physics</h2>
    <br />
    <input id = "physics" placeholder="Please enter marks obtained in physics" style={{padding : "10px", margin : "10px"}}onChange={(e) => {setphysicsmarkst(e.target.value)}}></input>
    <br />
    <h2>Marks obtained in chemistry</h2>
    <br />
    <input id = "chemistry" placeholder="Please enter marks obtained in physics" style={{padding : "10px", margin : "10px"}}onChange={(e) => {setchemmarkst(e.target.value)}}></input>
    <br />
    <button className='btn btn-danger' onClick={displaymarks}>Enter the marks</button>
    <h1>The marks obtained is {totalmarks}</h1>
    
    </>
  )
}
