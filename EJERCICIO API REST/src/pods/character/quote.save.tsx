import React from 'react';


export const estado = () => {
    const [texto, setTexto]= React.useState('');

    const actualizarEstado= (nuevoEstado)=> {
        setTexto(nuevoEstado);
    };

    return {texto, actualizarEstado};

}

const quoteSave = ()=> {


}