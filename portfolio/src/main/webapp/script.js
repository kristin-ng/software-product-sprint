// // Copyright 2020 Google LLC
// //
// // Licensed under the Apache License, Version 2.0 (the "License");
// // you may not use this file except in compliance with the License.
// // You may obtain a copy of the License at
// //
// //     https://www.apache.org/licenses/LICENSE-2.0
// //
// // Unless required by applicable law or agreed to in writing, software
// // distributed under the License is distributed on an "AS IS" BASIS,
// // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// // See the License for the specific language governing permissions and
// // limitations under the License.

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:5
});

typewriter.typeString('hi there!')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("welcome to my page.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("你好")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("歡迎來到我的網站")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I am Kristin Ng")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Computer Science Student By Day,")
    .pauseFor(500)
    .deleteAll()
    .typeString("Food Blogger By Night")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString('我是吳諾雯')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("計算機科學專業的學生和美食博主")
    .pauseFor(1000)
    .deleteAll()
    .typeString("Thanks for visiting!")
    .pauseFor(1000)
    .deleteAll()
    .typeString("感謝造訪")
    .pauseFor(1000)
    .deleteAll()
    .start();

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-70px";
  }
}

/** Fetches the current date from the server and adds it to the page. */
async function showServerTime() {
    const responseFromServer = await fetch('/date');
    const textFromResponse = await responseFromServer.text();
  
    const dateContainer = document.getElementById('date-container');
    dateContainer.innerText = textFromResponse;
}
/* Adds a fun fact to the page */
function addFunFact() {
    fetch('/fun-fact').then(response => response.text()).then((quote) => {
      document.getElementById('fun-fact-container').innerText = quote;
    });
}

