const profileImg = document.getElementById("profile");
const followers = document.querySelector("h2");
const date = document.querySelector("span");
const xhr = new XMLHttpRequest();

// open(method,string)
const reqURL = "https://api.github.com/users/harshbailurkar";
xhr.open("GET", reqURL);
xhr.onreadystatechange = function () {
  //dont use arrow function
  //to contineosly minotor state
  console.log(xhr.readyState); // give ready state
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(data);
    profileImg.src = data.avatar_url;
    followers.innerHTML = `Followers : ${data.followers}`;
    date.innerText = `on GitHub since : ${data.created_at.slice(0, 10)}`;
    console.log(data.followers);
  }
};
// console.log(xhr.readyState);
xhr.send(); //calling open
