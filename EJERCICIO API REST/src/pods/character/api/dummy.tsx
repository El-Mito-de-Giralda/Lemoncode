import React, { useState, useEffect } from 'react';

const App = () => {
  const [emails, setEmails] = useState([]);
  const [newEmail, setNewEmail] = useState('');

  useEffect(() => {
    // Obtener los datos actuales cuando el componente se monta
    const fetchCurrentData = async () => {
      const response = await fetch('http://example.com/api/user/1');
      const data = await response.json();
      setEmails(data.emails);
    };

    fetchCurrentData();
  }, []);

  const handleNewEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handleAddEmail = async () => {
    const updatedEmails = [...emails, newEmail];

    const payload = {
      emails: updatedEmails
    };

    const response = await fetch('http://example.com/api/user/1', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log("Email added successfully!");
      setEmails(updatedEmails); // Actualizar el estado local
      setNewEmail(''); // Limpiar el campo de entrada
    } else {
      console.error("Failed to add email:", response.statusText);
    }
  };
}

  