let singerlist = [
  {id:0, Name:"Michael Jackson", song:"songs/Michael_Jackson_-_Billie_Jean_This_is_it_2009_(mp3.pm).mp3"},
  {id:1, Name:"Eminem", song:"songs/Eminem - The Real Slim Shady.mp3"},
  {id:2, Name:"Peter Schilling", song:"songs/atomic_blonde_02. Peter Schilling - Major Tom (vollig losgelost).mp3"},
  {id:3, Name:"Ed Sheeran", song:"songs/Ed_Sheeran_-_Shape_of_You_8D_Great_(mp3.pm).mp3"},
  {id:4, Name:"Handsome Family", song:"songs/The Handsome Family, Brett Sparks - Far from Any Road.mp3"}
];



const Musiqiciler = document.getElementById("musiqiciler");

let audio = new Audio();

function showSingers(siyahi = singerlist){
  Musiqiciler.innerHTML="";


//ad olmayanda netice tapilmadi deyir


  if(siyahi.length===0){
    Musiqiciler.innerHTML=`<p id="neticetapilmadi"> Netice tapilmadi</p>`;
    return
  }



//mugenni adlarini yazir


  for(let i = 0 ; i<siyahi.length ; i++){
    Musiqiciler.innerHTML +=`
    <div class = " box singer-${siyahi[i].id}" onclick ="playSong(${siyahi[i].id})">
    <span><h1>${siyahi[i].Name}</h1></span>
    <button onclick="deleteSinger(${siyahi[i].id})">Delete</button>
    </div>`
  }
}


//musiqini oynatmaq


function playSong(id){
  const mahni = singerlist.find(musiqici=>musiqici.id===id)
  if(mahni){
    audio.src=mahni.song;
    audio.play();
  }
}


//silme funksiyasi


function deleteSinger(id){
  for(let i = 0 ; i<singerlist.length ; i++){
    if(id===singerlist[i].id){
      singerlist.splice(i,1);
      audio.pause();
      break;
    }
}

//musiqicini silenden sonra geride qalan musiqicileri gostermek ucun yaziriq
showSingers()
}


//axtarma funksiyasi

const Axtar = () => {
  const Searchsinger = document.getElementById("Searchsinger");

  //buradaki text bizim inputa yazacaqimiz ad ve ya metn dir ve inputun valuesi olur sonra onu trim ile basdan ve sondan bosluqlari silir ve to lowercase ile herfleri kicildirki axtaranda herf ferwi olmasin.
  const text = Searchsinger.value.trim().toLowerCase();

  const axtarilanMusiqici = singerlist.filter((musiqici) =>
    musiqici.Name.toLowerCase().includes(text)
  );

  showSingers(axtarilanMusiqici);
};







showSingers();