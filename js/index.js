 // Tabla de usuarios

 
const listUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  let tableBodyUsr = ``;
  users.forEach((user) => {
    tableBodyUsr += `<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.website}</td>
        <td>${user.company.catchPhrase}</td>
        
        
        
        
        
        </tr>`;

   document.getElementById("tableBody_Users").innerHTML = tableBodyUsr
   
  });
};


//Tabla de Posts

const listPosts = async () => {
const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const posts = await response.json()


let tableBody_Posts = ``
posts.forEach((post) => {
tableBody_Posts+= `<tr>
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>
       
        
        
        
        
        </tr>`
document.getElementById("tableBody_Posts").innerHTML = tableBody_Posts


});









}




window.addEventListener("load", function () {
  listUsers();
  listPosts();
});
