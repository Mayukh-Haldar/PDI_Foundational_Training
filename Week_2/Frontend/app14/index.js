const api_url = "https://randomuser.me/api/";

async function getUser(cardNumber) {
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data.results);

  let user = data.results[0];

  let { title, first, last } = user.name;
  let { email } = user;
  let { city, state, country } = user.location;
  let { large } = user.picture;

  let fullname = title + ". " + first + " " + last;

  document.getElementById("img" + cardNumber).src = large;
  document.getElementById("name" + cardNumber).innerText = fullname;
  document.getElementById("email" + cardNumber).innerText = email;
  document.getElementById("location" + cardNumber).innerText =
    city + ", " + state + ", " + country;
}
getUser(1);
getUser(2);
getUser(3);
