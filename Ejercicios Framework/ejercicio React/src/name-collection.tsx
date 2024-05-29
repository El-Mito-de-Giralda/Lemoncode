import React from "react";
import { Link } from "react-router-dom";
import { getNameCollection } from "./name-api";

interface Props{
    initialNameCollection?: string[];
}

export const NameCollection: React.FC<Props>= props => {
    const [NameCollection, setNameCollection]= React.useState(props.initialNameCollection || []);

    React.useEffect(()=> {
        getNameCollection().then(names=> {
            setNameCollection(names);
        });
    }, []);

return (
    <ul>
        {NameCollection.map(name=> (
            <li key={name}>
            <Link to={`/users/${name}`}>{name}</Link>
            </li>
        ))}
    </ul>
);
};