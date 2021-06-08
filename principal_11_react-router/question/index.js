const AboutPage = () => {
  return <div>About 페이지</div>
}

const MyPage = () => {
  return <div>My 페이지</div>
}

// TODO: Write code
const createHref = () => {}

const Link = (props) => <a {...createHref(props)} />

const RouterContext = React.createContext()

function Router({ children }) {
  // TODO: Write code

  return <RouterContext.Provider value={{ currentPath }}></RouterContext.Provider>
}

function App() {
  return (
    <React.Fragment>
      <div>
        Hello World
        <div>
          {/* 
        TODO: 주석을 풀면서 진행
        <Link href="#aboutPage">소개 페이지</Link> / <Link href="#myPage">마이 페이지</Link> 
        */}
        </div>
        <hr />
        {/* 
        TODO: 주석을 풀면서 진행
        <Router>
          <AboutPage path="#aboutPage" />
          <MyPage path="#myPage" />
        </Router> */}
      </div>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
