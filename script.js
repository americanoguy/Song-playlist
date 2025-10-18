//  const users = [
//   { id: 0, fullName: "Qulu Quluzade", age: 45 },
//   { id: 1, fullName: "Amil Mammadli", age: 78 },
//   { id: 2, fullName: "Aygun Agayeva", age: 12 },
//   { id: 3, fullName: "Cavid Qocayev", age: 34 },
// ];

// let result = "";

// for(let i = 0 ; i<users.length ; i++){
//     let backgroundColor ="";

//     if(users[i].age<=25){
//         backgroundColor = "yellow";

//     }else if(users[i].age<=55){
//         backgroundColor ="green"

//     }else{
//         backgroundColor ="red"
//     }
    
//     result+=`<p style="background-color:${backgroundColor};padding:10px">${users[i].fullName} ${users[i].age}</p>`;
// }

// document.getElementById("users").innerHTML=result;



// 1)HTML sənədində bir <p> elementi olsun. JavaScript ilə onun mətnini dəyiş (“Salam dünya!” yaz).


// const a =document.getElementById("p1");
// a.textContent="yeni metn"

// 2)HTML-də bir <h1> elementi olsun. JavaScript ilə onun rəngini qırmızı et.

// const a =document.getElementById("h11");
// a.style.color ="red"

// 3)HTML-də bir <button> əlavə et. Ona klikləyəndə alert pəncərəsində “Düyməyə basıldı!” yazısı çıxsın.

// const a =document.getElementById("b1");
// a.textContent="Click please"
// a.style.backgroundColor ="aqua"
// a.style.color ="yellow"
// a.style.fontSize ="5em"
// a.style.border = "none"
// a.style.borderRadius="10px"
// a.style.boxShadow ="0 0 20px grey"
// a.style.padding="20px";

// a.onclick=function(){
//     alert("duymeye basildi")
// }

// 4)

// let ad =prompt("Mike yoxsa Bruce?");

// let container = document.getElementById('adlar');

// if(ad==="Mike"){
//     container.innerHTML =`<div id="Mike" > Mike </div>`
//     const b =document.getElementById("Mike");
//     b.style.background = "lime";
//     b.style.padding = "20px";
//     b.style.fontSize = "2em";
//     b.style.fontFamily = "Arial";
//     b.style.textAlign = "center";
//     b.style.color = "blue";
// }else if(ad==="Bruce"){
//      container.innerHTML =`<div id="Bruce" > Bruce </div>`
//     const b =document.getElementById("Bruce");
//     b.style.background = "darkblue";
//     b.style.padding = "20px";
//     b.style.fontSize = "2em";
//     b.style.fontFamily = "Arial";
//     b.style.textAlign = "center";
//     b.style.color = "white";
// }



let singerlist= [
    {id:0,Name:"Michael Jackson",song:"songs/Michael_Jackson_-_Billie_Jean_This_is_it_2009_(mp3.pm).mp3"},
    {id:1,Name:"Eminem",song:"songs/Eminem - The Real Slim Shady.mp3"},
    {id:2,Name:"Peter Schilling" , song:"songs/atomic_blonde_02. Peter Schilling - Major Tom (vollig losgelost).mp3" },
    {id:3,Name:"Ed Sheeran" , song:"songs/Ed_Sheeran_-_Shape_of_You_8D_Great_(mp3.pm).mp3"},
]

const istifadeciler = document.getElementById("musiqiciler");
let audio =new Audio();
function showUsers() {
  istifadeciler.innerHTML = "";

  for (let i = 0; i < singerlist.length; i++) {
    istifadeciler.innerHTML += `
      <div class="box  singer-${singerlist[i].id}" onclick="playSong(${singerlist[i].id})">
        <span><h1>${singerlist[i].Name}</h1></span>
        <button onclick="deleteUser(${singerlist[i].id})">Delete</button>
      </div>
    `;
  }
}

function playSong(id){
  const singer = singerlist.find((ad) => ad.id === id);
  if (singer) {
    audio.src = singer.song;
    audio.play();
  }
}

function deleteUser(id) {
 for(let i = 0;i<singerlist.length;i++){

  if(singerlist[i].id ===id){

    singerlist.splice(i,1)

    break;
  }
 }
 showUsers()
}

showUsers();

