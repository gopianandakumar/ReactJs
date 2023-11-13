import React, { useState } from "react";

const Card = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;
  const handler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="username"
            value={username}
            name="username"
            onChange={handler}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            value={password}
            name="password"
            onChange={handler}
          />
          <br />
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  );
};

export default Card;
