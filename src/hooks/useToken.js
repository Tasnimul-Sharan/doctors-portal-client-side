// import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  //   useEffect(() => {
  //     const email = user?.email;
  //     axios.put(`https://stormy-earth-10595.herokuapp.com/user/${email}`).then((res) => {
  //       const { data } = res;
  //       console.log(data);
  //       const accessToken = data.token;
  //       localStorage.setItem("accessToken", accessToken);
  //       setToken(accessToken);
  //     });
  //   }, [user]);
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`https://stormy-earth-10595.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data inside useToken", data);
          const accessToken = data.token;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
