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

google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawChart);



/** Creates a chart and adds it to the page. */

function drawChart() {

  const data = new google.visualization.DataTable();

  data.addColumn('string', 'Skill');

  data.addColumn('number', 'Count');

        data.addRows([

          ['Programming', 75],

          ['Teaching', 20],

          ['Determination', 20],

          ['Team work', 45],

          ['Self-Teaching', 50],

          ['Organization', 50]

        ]);



  const options = {

    'width':800,

    'height':500,

    'is3D': 'true',

    'fontName':'karla',

    'fontSize':14,

    'backgroundColor':'#e2eafc',

    'enableInteractivity':'true',

    'legend':{position: 'left', textStyle: {color: '#30343f', fontSize: 16}}

  };



  const chart = new google.visualization.PieChart(

      document.getElementById('chart-container'));

    chart.draw(data, options);

}

// /* Show comments to the page */ doesn't work, trying to do this. 
// function showComments() {
//     fetch('/comment').then(response => response.json()) // parses the respoonse as JSON
//     .then((commentList) => { // now we can reference the fields in commentList!
//         console.log(commentList);
//         document.getElementById('comment-container').innerText = commentList;
//     });
// }

