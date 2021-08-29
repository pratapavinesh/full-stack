import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(7).fill(0))
  
 
  const setRandomSelected=()=>{
    const val=Math.floor((Math.random()*7)+0)
    return (
      setSelected(val)
   )
  }
  const setToVote=()=>{
     
    const newVote=[...votes];
    newVote[selected]++;
    return(
      setVote(newVote)
        
      )
  }
  

  const mostVotes=()=>{
    let temp=votes[0]
    let ind=0
 for(let num=1 ;num<7; num++){
   if(temp<votes[num]){
     temp=votes[num]
     ind=num

   }
 }
 console.log(votes, ind);
  return(
   ind
  )
  
}

return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>
        <p>has {votes[selected]} votes</p>
      </div>
      <div>
      <button onClick={setToVote}>vote</button>
      <button onClick={setRandomSelected}>next anecdot</button>
      </div>
      <h1>Anecdote with most votes</h1>
     <p>{anecdotes[mostVotes()]}.</p>
     <p>
     has {votes[mostVotes()]} votes
     </p> 
    </div>
  )
}

export default App

