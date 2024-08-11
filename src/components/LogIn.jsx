import React, { useState } from 'react';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { username, password });
    // Close the modal after submission
    document.getElementById('my_modal_3').close();
  };

  const openModal = () => {
    document.getElementById('my_modal_3').showModal();
  };

  return (
    <div>
      <button className="btn" onClick={openModal}>LogIn</button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit}>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById('my_modal_3').close()}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Hello!</h3>

            <div className="mb-3 flex justify-center">
              <label htmlFor="exampleInputEmail1" className="form-label m-3">Email address</label>
              <input 
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required // Add the required attribute
              />
            </div>
            <div className="mb-3 flex justify-center">
              <label htmlFor="exampleInputPassword1" className="form-label m-3">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required // Add the required attribute
              />
            </div>
            <button type="submit" className="btn btn-primary btn-ghost">Submit</button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default LogIn;
