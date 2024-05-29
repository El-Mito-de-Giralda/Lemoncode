import React from "react";
import { Link, generatePath } from "react-router-dom";


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
      <h2>Hello from List page</h2> {" "}
      <input type="text" onChange={(a)=>setorgs(a.target.value)}/>
      <button onClick={botonOrg}></button>
      


      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {Array.isArray(members) && members.map((member)=>  (
          <>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>    
          </>
        ) 
       
      
        )}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};