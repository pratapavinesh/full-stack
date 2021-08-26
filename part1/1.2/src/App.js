const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};
const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <>

     <Part1 name={props.part1} exercises={props.exercises1} />
     <Part2 name={props.part2} exercises={props.exercises2} />
     <Part3 name={props.part3} exercises={props.exercises3} />

    </>
  );
};


const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total} </p>
    </>
  );
};

const Part1=(props)=>{
  return (
  <p>
        {props.name} {props.exercises}
    </p>
  )
}
const Part2=(props)=>{
  return (
  <p>
        {props.name} {props.exercises}
    </p>
  )
}
const Part3=(props)=>{
  return (
  <p>
        {props.name} {props.exercises}
    </p>
  )
}



export default App;