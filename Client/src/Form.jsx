import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [file, setFile] = useState();
  const [image, setImage] = useState()


  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    axios.post('http://localhost:3000/upload', formData)
      .then(res =>console.log(res))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    axios.get('http://localhost:3000/getImage')
    .then(res => setImage(res.data[1].image))
    .catch(err => console.log(err))
  })

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={e => setFile(e.target.files[0])} />
        <button type="submit">Upload</button>
        <br />
        <img src={`http://localhost:3000/image/`+image} alt="" />
      </form>
    </div>
  );
};

export default Form;
