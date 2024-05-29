import React from "react";
import {Link,generatePath }from"react-router-dom";

interface MemberEntity {
id:string;
login:string;
avatar_url:string;
} 

export const ListPage :React.FC = ()=> {
const [orgs,setorgs] =React.useState(localStorage.getItem("")||"lemoncode");
const [members,setMembers] =React.useState([]);
let substitute=members;

const botonOrg = ()=> {
localStorage.setItem("",orgs);
fetch(`https://api.github.com/orgs/${orgs}/members`)
       .then((response)=>response.json())
       .then((json)=>setMembers(json)
       );
  }

React.useEffect(()=> {
fetch(`https://api.github.com/orgs/${orgs}/members`)
       .then((response)=>response.json())
       .then((json)=>setMembers(json));
       },[]);

return (
<>
<h2>Hello from List page</h2>{" "}
<input type="text" onChange={(a)=>setorgs(a.target.value)}/>
<button onClick={botonOrg}></button>

<div className="list-user-list-container">
<span className="list-header">Avatar</span>
<span className="list-header">Id</span>
<span className="list-header">Name</span>
{members.map((member)=> {return typeof Array.isArray(member) ?  (
<>
<img src={member.avatar_url}/>
<span>{member.id}</span>
<Link to={`/detail/${member.login}`}>{member.login}</Link>
</>
            ) : (<div>No existe ninguna organización llamada así. Perdone las molestias.</div>);      }
            )}
</div>
<Link to="/detail">Navigate to detail page</Link>
</>
      );
};