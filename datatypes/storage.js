const getData = async () => {
    await fetch("https://chatappserver-zop9.onrender.com/users")
    .then((res)=>console.log(res))
    .catch((e)=>console.log(e))
  };