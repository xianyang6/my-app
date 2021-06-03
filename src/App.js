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
      <header className="App-header">
        main page
      </header>
      <body className = "App-body">
        <div class ="b-1">
           <div className = "box-0">
           <h1 classname = "Company-Name">
              恒原创
           </h1>
           </div>
           <div class = "box-1">
            <div className = "box-1a" href = "https://www.youtube.com/">
            <a>
               联系我们
            </a>
            </div>
            <div className = "box-1b" href = "https://www.youtube.com/">
            <a>
               案例分析
            </a>
            </div>
            <div className = "box-1c" href = "https://www.youtube.com/">
            <a>
               产品介绍
            </a>
            </div>
            <div className = "box-1d" href = "https://www.youtube.com/">
            <a>
               公司简介
            </a>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
