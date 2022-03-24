import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      {/* <Counter></Counter> */}

      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => setUsers(data));
  }, []);
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user=><User name={user.name} address={user.address}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div className='counter'>
      <h3>Name:{props.name}</h3>
      <p>Address: <span>{props.address.city}</span></p>
    </div>
  )
}


// increase count or state 
function Counter() {
  const [count, setCounter] = useState(100);
  // increase 
  const increaseCount = () => setCounter(count + 1);
  // decrease 
  const decrease = () => setCounter(count - 1)

  return (
    <div className='counter'>
      <h2>Count: {count} </h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

// decrease count or state 
/* function DecreaseCount(){
  const [count,setCount]=useState(100);
  const decrease=()=>setCounter(count-1)

  return(
    <div className='counter'>
      <h2>Count:{count}</h2>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
} */

/*
// props and component use 

const person1 = {
  name: 'Noman',
  job: 'Student'
}
const person2 = {
  name: 'Najmul',
  job: 'Student'
}
const personStyle = {
  color: 'purple',
  backgroundColor: 'white',
  padding: '1rem',
  borderRadius: '1rem'
}

const names=['Nomen','Najmul','Nahid','Mahim']
  const fullName=[
    {name:'Noman',lastName:'Haque'},
    {name:'Najmul',lastName:'Haque'},
    {name:'Nahid',lastName:'Hasan'},
    {name:'Mahim',lastName:'Khan'},

  ]
{
        names.map(name=> <li>{name}</li>)
      } 

      {
        names.map(name=><Person name={name} fullName={fullName[0]}></Person>)
      } 

      // {
      //   fullName.map(name=><Person name={name.name} lastName={name.lastName}></Person>)
      // }

       <Person name="Noman"></Person>
      <Person name="Najmul"></Person>
      <Person name="Nahid"></Person>
      <Person name="Mahim" fullName="Neamul"></Person> 
      // <h3>Ok go inside react app</h3>
// function Person(props) {
//   console.log(props)
//   return (
//     <div className='person'>
//       <h2>Hello Dear. I am {props.name}</h2>
//       <p>Last Name: {props.lastName}</p>
//       <p>I am here to learn Javascript </p>
//     </div>
//   )
// }
*/
export default App;
