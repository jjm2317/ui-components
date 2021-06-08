## Case11 : 리액트 라우터의 동작 메커니즘 - 출제자 해설

### HTML

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Case11. 리액트 라우터의 동작 메커니즘 / Solution</title>

    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>

  <body>
    <div id="root"></div>
    <script type="text/babel" data-type="module" src="./index.js"></script>
  </body>
</html>
```

### JS

#### index.js

```javascript
const AboutPage = () => {
  return <div>About 페이지</div>
}

const MyPage = () => {
  return <div>My 페이지</div>
}

const createHref = ({ href, ...props }) => {
  return { ...props, href: window.location.href + href }
}

const Link = (props) => <a {...createHref(props)} />

const RouterContext = React.createContext()

function Router({ children }) {
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname)

  const matchedComponent = children.find((el) => currentPath.includes(el.props.path))

  React.useEffect(() => {
    window.addEventListener('hashchange', () => setCurrentPath(window.location.hash))

    return () => {
      window.removeEventListener('hashchange', () => setCurrentPath(window.location.hash))
    }
  }, [])

  if (children.length === 0 || !matchedComponent) {
    return <div>No matchedComponent</div>
  }

  return (
    <RouterContext.Provider value={{ currentPath }}>
      {React.isValidElement(matchedComponent) && matchedComponent}
    </RouterContext.Provider>
  )
}

function App() {
  return (
    <React.Fragment>
      <div>
        Hello World
        <div>
          <Link href="#aboutPage">소개 페이지</Link> / <Link href="#myPage">마이 페이지</Link>
        </div>
        <hr />
        <Router>
          <AboutPage path="#aboutPage" />
          <MyPage path="#myPage" />
        </Router>
      </div>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```
