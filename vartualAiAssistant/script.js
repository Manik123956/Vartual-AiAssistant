 let btn = document.querySelector("#btn");
let contant = document.querySelector("#contant");
let voice = document.querySelector("#voice");

function speak(text){
  let text_speak = new SpeechSynthesisUtterance(text)
  text_speak.rate =1
  text_speak.pitch=1
  text_speak.volume=1
  text_speak.lang="hi-GB"
  window.speechSynthesis.speak(text_speak)

}

function wishme(){
  let day=new Date();
  let hours= day.getHours();
  if(hours>=1 && hours<12){
    speak("good morninrg manik sir");
  }
  else if(hours>=12 && hours<16){
    speak("good afternoon manik sir");
  }
  else{
    speak("good evening manik sir");
  }
}

window.addEventListener('load',()=>{
  wishme();
})

let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
let recgonition = new speechRecognition();

recgonition.onresult =(event) =>{
  let currentIndex= event.resultIndex;
  let transcript= event.results[currentIndex][0].transcript;
  contant.innerText=transcript;
  takecommand(transcript.toLowerCase());
}

btn.addEventListener('click',()=>{
  recgonition.start();
  btn.style.display="none";
  voice.style.display="block";
})

function takecommand(massege){
  btn.style.display="flex";
  voice.style.display="none";

  if(massege.includes("hello")||massege.includes("hey")||massege.includes("hi")){
    speak("hello sir , how can i help you");
  }
  else if(massege.includes("who are you")){
    speak("i am virtual assistant , created by manik sir ")
  }
  else if(massege.includes("what is your name")||massege.includes("what's your name")){
    speak("my name is kavya ,  your vartual assistant ");
  }
  else if (massege.includes("what is my name")|| massege.includes("what's my name")) {
    speak("your name is manik");
  }
  else if (massege.includes("who created you")) {
    speak("i was created by manik sir");
  }
  else if (massege.includes("what can you do")|| massege.includes("what do you do")) {
    speak("i can help you open websites, tell time, and answer simple questions");
  }
  else if (massege.includes("why were you created")) {
    speak("i was created to assist you and make your tasks easier");
  }
  else if (massege.includes("thank you") || massege.includes("thanks")) {
    speak("you are welcome");
  }
  else if (massege.includes("bye") || massege.includes("goodbye")) {
    speak("goodbye sir, have a nice day");
  }
  else if (massege.includes("tell me a joke")) {
    speak("ok!     listen      wife: suno,agar main mar jaoon to tum kra karoge? husband:main bhi mar jaunga...  wife: kyun? itna pyaar karte ho mujhse? husband: nahi, itni khushi main bardaasht nahi kar paunga..");
  }
  else if (massege.includes("what day is today")) {
    let day = new Date().toLocaleDateString(undefined, { weekday: 'long' });
    speak(`today is ${day}`);
  }
  else if (massege.includes("how old are you")) {
    speak("i am just a few lines of code old");
  }
  else if(massege.includes("time")){
    let time = new Date().toLocaleTimeString(undefined,{hour:"numeric",minute:"numeric"});
    speak(time);
  }
  else if(massege.includes("date")){
    let date = new Date().toLocaleTimeString(undefined,{day:"numeric",month:"short"});
    speak(date);
  }
  else if(massege.includes("open google")){
    speak("opening google");
    window.open("https://www.google.com","_blank");
  }
  else if (massege.includes("open youtube")) {
    speak("opening youtube");
    window.open("https://www.youtube.com", "_blank");
  }
  else if (massege.includes("open facebook")) {
    speak("opening facebook");
    window.open("https://www.facebook.com", "_blank");
  }
  else if (massege.includes("open instagram")) {
    speak("opening instagram");
    window.open("https://www.instagram.com", "_blank");
  }
  else if (massege.includes("open twitter") || massege.includes("open x")) {
    speak("opening twitter");
    window.open("https://www.twitter.com", "_blank");
  }
  else if (massege.includes("open whatsapp")) {
    speak("opening whatsapp ");
    window.open("whatsapp://");
  }
  else if (massege.includes("open calculator")) { 
    speak("opening Calculator ");
    window.open("calculator://");
  }
  else if (massege.includes("open gmail")) {
    speak("opening gmail");
    window.open("https://mail.google.com", "_blank");
  }
  else if (massege.includes("open linkedin")) {
    speak("opening linkedin");
    window.open("https://www.linkedin.com", "_blank");
  }
  else if (massege.includes("open github")) {
    speak("opening github");
    window.open("https://www.github.com", "_blank");
  }
  else if (massege.includes("open leetcode")) {
    speak("opening leetcode");
    window.open("https://www.leetcode.com", "_blank");
  }
  else if (massege.includes("search")) {
    let query = massege.replace("search", "").trim();
    speak(`searching ${query} on google`);
    window.open(`https://www.google.com/search?q=${query}`, "_blank");
  }
  else {
    let finalText="this is what i found on internet regerding " + massege.replace("kavya","");
    speak(finalText);
    window.open(`https://www.google.com/search?q=${massege.replace("kavya","")}`, "_blank");
  }
}
