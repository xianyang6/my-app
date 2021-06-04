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
           <div class = "box-1">
            <div className = "box-1a" >
            <a href = "https://www.w3schools.com/">
               联系我们
            </a>
            </div>
            <div className = "box-1b" >
            <a href = "https://www.w3schools.com/">
               案例分析
            </a>
            </div>
            <div className = "box-1c">
            <a href = "https://www.w3schools.com/">
               产品介绍
            </a>
            </div>
            <div className = "box-1d" >
            <a href = "https://www.w3schools.com/">
               公司简介
            </a>
            </div>
          </div>
        </div>
        <img src = "https://i.postimg.cc/DwcFRmnt/DJI-0135.jpg"></img>
      </body>
      </div>
  );
}

export default App;
