import React, {useState} from 'react'

const Button=({handleClick,text})=>(
    <button onClick={handleClick} >
      {text}
    </button>
  )



const Statistics=({good,neutral,bad})=>{
  
  if(good+neutral+bad){ 
  return(
  <div>
    
    <table>
    <tbody>
    <StatisticLine text="good" value={good}/>
    <StatisticLine text="neutral" value={neutral}/> 
    <StatisticLine text="bad" value={bad}/>

      <tr>
         <td>all </td>
         <td>{good+neutral+bad}</td>
      </tr>
      <tr>
         <td>average </td>
         <td>{(good-bad)/(good+bad+neutral)}</td>
      </tr>
      <tr>
         <td>positive</td>
         <td>{(good)/(good+bad+neutral)*100}%</td>
      </tr>
      </tbody>
    </table>
  </div>
    )
  }
  return(
    <div>
      <p>No feedback given</p>
    </div>
  )

}

const StatisticLine=({text,value})=>{
    
   return(
     
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
     
  )
}


const App=()=>{
const [good,setGood]=useState(0)
const [neutral,setNutral]=useState(0)
const [bad,setBad]=useState(0)
 
const handleGoodClick=()=>{
  
  setGood(good+1)
}
const handleNeutralClick=()=>{
  
  setNutral(neutral+1)
}
const handleBadClick=()=>{
  
  setBad(bad+1)
}

  return(

    <div>
    <h1>give feedback</h1>
    <Button handleClick={handleGoodClick} text='good'/>
    <Button handleClick={handleNeutralClick} text='nutral'/>
    <Button handleClick={handleBadClick} text='bad'/>
    <h1>statistics</h1>
    <Statistics good={good} neutral={neutral} bad={bad}/>
    
    
    
    </div>
  )
}


export default App;
