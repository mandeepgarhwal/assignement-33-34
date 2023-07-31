import React, {useState} from 'react'


export default function Todolist() {
    const [newtask, setnewtask] = useState(" ")
    const [latesttask, setlatesttask] = useState(1)
    const [displayactivetasks, setdisplayactivetask] = useState(" ")
    const [currenttasks, setcurrenttasks] = useState([])
    const [completedtasks,setcompletedtasks] = useState([])
    const [ctasktoggle, setctasktoggle] = useState(0)
    const [displaystatus, setdisplaystatus] = useState("none")
    const [displayedtasks, setdisplayedtasks] = useState(0)
    const [pendingtasks, setpendingtasks] = useState(1)

    let completedtaskstemp = []
    let pendingtaskstemp = 0

    
    function cmplttaskstoggle (){
        console.log("function is called")
        console.log(displaystatus)
        console.log(ctasktoggle)
        if (ctasktoggle === 0){
            setctasktoggle(1)
            setdisplaystatus("block")
        } else {
            setctasktoggle(0)
            setdisplaystatus("none")
        }
        console.log(displaystatus)
        console.log(ctasktoggle)
        
    }
    function addCompletedTask(taskjustcompleted, numberofthattask){
        console.log("function is called")
        console.log(completedtasks)
        completedtaskstemp = completedtasks
        let completedserial = numberofthattask
        let newrow = <tr>
                        <th  style={{paddingRight : "15vw"}} scope="row">{completedserial}</th>
                        <td style={{ paddingRight : "29vw"}}>{taskjustcompleted}</td>
                        <td>
                        <input name = {completedserial} className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                        </td>
                    </tr>
        // completedtasks.push(newrow)
        // completedtaskstemp = [...completedtasks, newrow]

       completedtasks.push(newrow)
        completedtaskstemp = [...completedtasks]
        setcompletedtasks(completedtaskstemp)

        console.log(completedtasks)
    }
    function taskcomplete(rowinquestion, taskinquestion, tasknumber){
        let row = document.getElementsByName(rowinquestion)
        let task = document.getElementsByName(taskinquestion)
        console.log(row)
        console.log(task)
        let taskintext = task[0].innerText
        row[0].style.display = "none"
        addCompletedTask(taskintext, tasknumber)
        setpendingtasks(pendingtaskstemp - 1)
        if (pendingtasks - 1 == 0 ){
            setdisplayactivetask(" ")
        }

        console.log (pendingtasks)



    }
    function addTask(){
        setlatesttask(latesttask + 1)
        let serialnumber = `${latesttask}`
        let rowname = `row + ${serialnumber}`
        let taskname = `task + ${serialnumber}`
        let newrow = <tr name =  {rowname} style={{scope : "row"}} >
                        <th >{serialnumber}</th>
                        <td name = {taskname} >{newtask}</td>
                        <td >
                        <input name = {serialnumber} className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" onClick={() => (taskcomplete(`row + ${serialnumber}`, `task + ${serialnumber}`, serialnumber))}/>
                        </td>
                    </tr>
        currenttasks.push(newrow)
        pendingtaskstemp = pendingtasks
        setpendingtasks(pendingtaskstemp + 1)
        setdisplayactivetask("none")
        console.log (pendingtasks)
    
    }

  return (
    <>
    <h1 style={{paddingLeft: "40vw"}}>Mandeep's to do list</h1>
    <input style={{marginLeft: "35vw", marginRight : "5vw", height : "34px"}} type="text" id='newtodolist' onChange={(e) => {setnewtask(e.target.value)}}/>
    <button className='btn btn-success' onClick={() => addTask(newtask)} >Add task </button>
    <table style= {{marginLeft: "15vw", marginRight : "10vw"}}className="table table-striped-columns">
    <thead>
        <tr>
            <th scope="col">Sr. no.</th>
            <th scope="col">Name of task</th>
            <th scope="col">Completed or not</th>
        </tr>
        
    </thead>
    <tbody>
        {
        currenttasks.map((element) => (element))
        } 
    </tbody>
    </table>
    <br />
    <h2 style={{display : `${displayactivetasks}`, marginLeft : "40vw"}}>No To Do Pending</h2>
   <div style= {{marginLeft: "15vw"}} className="input-group mb-3">
        <div className="input-group-text">
            <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" onClick={cmplttaskstoggle}/>
        </div>
        <h2>Show completed tasks</h2>
    </div>
    <br />
     
     {/* onClick={cmplttaskstoggle}  */}
    <table className="table table-striped-columns" name = "cmplttasktable" style={{display : `${displaystatus}`, marginLeft: "15vw", marginRight : "10vw"}}>
    <thead>
        <tr>
            <th scope="col" style={{paddingRight : "15vw",}}>Sr. no.</th>
            <th scope="col" style={{ paddingRight : "29vw"}}>Name of task</th>
            <th scope="col">Completed or not</th>
        </tr>
    </thead>
    
    <tbody>
    {
      completedtasks.map((element) => (element))
    } 
    </tbody>
     
    </table>


    </>
  )
}
