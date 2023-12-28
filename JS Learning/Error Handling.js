//--------------------------------------------------|Error Handling in Async Await|----------------------------------------------

let USER_API = "https://api.github.com/users/sanwalhere";

async function handlePromise() {
  const data = await fetch(USER_API);
  const jsonValue = await data.json();
  console.log(jsonValue);
}
handlePromise();

let USER_API2 = "https://api";

async function handlePromise2() {
  try {
    const data = await fetch(USER_API2);
    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (error) {
    console.log(error);
  }
}
handlePromise2();
