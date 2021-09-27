import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [isDataFetch, setisDataFetch] = useState(false);
  const [users, setUsers] = useState([]);
  const [isBtnClick, setisBtnClick] = useState(false);

  const loadUsers = async () => {
    setisBtnClick(true);
    const response = await fetch("https://reqres.in/api/users?page=1");
    const res = await response.json();
    // console.log(res)
    setUsers(res.data);
    setInterval(() => {
      setisDataFetch(true);
    }, 1500);
  };
  return (
    <>
    <div class="p-3 mb-2 bg-success text-white"><h1>--LGMVIP Task 2</h1>
    <br></br>
    <center>
    <h5>Created by - Harshit Tyagi</h5>
    </center>
    </div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
      <img src="1627245758487.jfif" class = "lgm"></img>
        <a class="navbar-brand" href="https://letsgrowmore.in/"></a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex">
            <button onClick = {loadUsers} type="button" class="btn btn-success">Get Users</button>
          </form>
        </div>
      </div>
</nav>

      

      {isBtnClick ? (
        isDataFetch ? (
          <div className="box">
            {users.map(({ id, first_name, last_name, avatar, email }) => {
              return (
                <>
                  <div className="card" key={id}>
                    <img src={avatar} alt="" className="avatar" />
                    <div className="card-description">
                      <h2>
                        {" "}
                        {first_name} {last_name}{" "}
                      </h2>
                      <p id="em">
                        <strong> {email} </strong>{" "}
                      </p>
                      <a className="btn-contact" href={"mailto:" + email}></a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <div className="loader"> </div>
        )
      ) : (
        <section className="home">
          <div className="content">

            <h3 id="h">Welcome Lets Grow More</h3>
            <p id="x"> Click on Get users button to fetch users </p>
            <p class= "lgm2"> 
            <button type="button" class="btn btn-success" onClick={loadUsers}>
              {" "}
              Get Users{" "}
            </button>
            </p>
          </div>
        </section>
      )}
    </>
  );
};
export default App;