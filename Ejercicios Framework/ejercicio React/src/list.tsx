import React from "react";
import { Link, generatePath } from "react-router-dom";
import * as classes from './list.styles';


interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}


export const ListPage: React.FC = () => {
  let [orgs, setorgs] = React.useState(localStorage.getItem("")|| "lemoncode");
  let [members, setMembers] = React.useState([]);
  let substitute= members;



const botonOrg = ()=> {
  localStorage.setItem("", orgs);
  fetch(`https://api.github.com/orgs/${orgs}/members`)
        .then((response) => response.json())
        .then((json) => setMembers(json));
     
}
try{
React.useEffect(() => {
   fetch(`https://api.github.com/orgs/${orgs}/members`)
        .then((response) => response.json())
        .then((json) => setMembers(json));  

        
    }, []); } catch(error) {
      alert("No existe ninguna organización llamada así. Perdone las molestias.")
      orgs="lemoncode";
      return 
    }

 
 return (
    <>
      <div className={classes.header}>
      <h2>Hello from List page</h2> 
      <input type="text" onChange={(a)=>setorgs(a.target.value)}/>
      <button className={classes.button} onClick={botonOrg}></button>
      </div>
      
      <div>
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        <ul className={classes.list}>
        {Array.isArray(members) && members.map((member)=>  (
          <li key={member.id}>
            <Link to={`/detail/${member.login}`}>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            {member.login}</Link>    
            </li>
          
        ) 
       
      
        )}
         </ul>
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};