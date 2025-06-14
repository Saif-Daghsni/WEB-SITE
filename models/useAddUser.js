import { useState } from 'react';
import axios from 'axios';

export default function useAddUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const addUser = async ({ name, email, password }) => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await axios.post('http://127.0.0.1:3001/addUser', {
        name,
        email,
        password,
      });

      setSuccessMessage(response.data.message);
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return { addUser, loading, error, successMessage };
}
