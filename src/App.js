//import logo from './logo.svg';
import './App.css';
function App() {
  return (
    /** 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    **/
    <div className="App">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <div className = "b-0">
        <header className="App-header">
        <button class = "button0a">
          主页
        </button>
      </header>
      </div>
      <body className = "App-body">
        <div class ="b-1">
           <div className = "box-0">
           <h1 classname = "Company-Name">
              恒元创
           </h1>
           </div>
           <img src ="https://i.postimg.cc/mZ5wwxMF/d4d63b76378afe0668c2f1f12cafce7.png" alt ="" className ="img-2"></img>
           <div class = "box-1">
           <a href = "https://www.w3schools.com/" className ="box1-b">
             <span class="glyphicon glyphicon-earphone"></span>
           </a>
           <a href="https://www.w3schools.com/" className ="box1-b">
             <span class="glyphicon glyphicon-question-sign"></span>
           </a>
           <a href= "https://www.w3schools.com/" className ="box1-b">
             <span class="glyphicon glyphicon-search"></span>
           </a>
           <a href= "https://www.w3schools.com/" className ="box1-b">
            <span class="glyphicon glyphicon-info-sign"></span>
          </a>
            <div className = "box-1a" >
            <a href = "https://www.w3schools.com/">
               联系我们
            </a>
            </div>
            <div className = "box-1a" >
            <a href = "https://www.w3schools.com/">
               案例分析
            </a>
            </div>
            <div className = "box-1a">
            <a href = "https://www.w3schools.com/">
               产品介绍
            </a>
            </div>
            <div className = "box-1a" >
            <a href = "https://www.w3schools.com/">
               公司简介
            </a>
            </div>
          </div>
        </div>
        <div className ="m-1">
          <img src = "https://i.postimg.cc/DwcFRmnt/DJI-0135.jpg" alt ="" className ="img-1" id = "img-1"></img>
          <button class="btn" onClick={NextImg}>下一张</button>
        </div>
      </body>
      </div>
  );
}
function NextImg() { 
  var ImageId = document.getElementById("img-1");
  if (ImageId.src.match("https://i.postimg.cc/DwcFRmnt/DJI-0135.jpg")){
     ImageId.src = "https://i.postimg.cc/TwbXdzzL/963A9831.jpg";
  } else if (ImageId.src.match("https://i.postimg.cc/TwbXdzzL/963A9831.jpg")){
    ImageId.src = "https://i.postimg.cc/d3ZCLq2Y/963A9794.jpg";
  } else if (ImageId.src.match("https://i.postimg.cc/d3ZCLq2Y/963A9794.jpg")){
    ImageId.src = "https://i.postimg.cc/xTnR6ZS3/963A9797.jpg";
  } else if (ImageId.src.match("https://i.postimg.cc/xTnR6ZS3/963A9797.jpg")){
    ImageId.src ="https://i.postimg.cc/63Ts4QMT/963A9811.jpg";
  } else if (ImageId.src.match("https://i.postimg.cc/63Ts4QMT/963A9811.jpg")) {
    ImageId.src = "https://i.postimg.cc/QdxrZScp/963A9867.jpg";
  } else if (ImageId.src.match("https://i.postimg.cc/QdxrZScp/963A9867.jpg")) {
    ImageId.src = "https://i.postimg.cc/XYTxkYNp/963A9801.jpg";
  } else if (ImageId.src.match("https://i.postimg.cc/XYTxkYNp/963A9801.jpg")) {
    ImageId.src = "https://i.postimg.cc/qRfB8Y58/963A9807.jpg";
  } else if (ImageId.src.match("https://i.postimg.cc/qRfB8Y58/963A9807.jpg")) {
    ImageId.src = "https://i.postimg.cc/GpCSGxj4/963A9816.jpg";
  } else if (ImageId.src.match("https://i.postimg.cc/GpCSGxj4/963A9816.jpg")) {
    ImageId.src = "https://i.postimg.cc/DwcFRmnt/DJI-0135.jpg";
  }
}
export default App;
