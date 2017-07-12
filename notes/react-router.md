# Philosophy
React Routing is called "Dynamic Routing" - Quit different than "Static Routing"

## Static Routing
Rails, Express, Ember, Angular all use static routing
  * Routes are declared as part of your app's initialization before any rendering takes place

## Dynamic Routing
  * Routing that takes place as your app is rendering, not in a configuration or convention outside of a running app
    * This means that almost everything is a component in React Router

```javascript
import { NativeRouter } from 'react-router-native';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), el)
```


  * Use the Link component to link to a new location
  * Render a Route to show some UI when the user visits /dashboard
```html
const App = () => (
  <div>
    <nav>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
    <div>
      <Route path="/dashboard" component={Dashboard}/>
    </div>
  </div>
)
```
# Nested Routes
```javascript
const App = () => (
  <BrowserRouter>
    <div>
      <Route path="/tacos" component={Tacos}/>
    </div>
  </BrowserRouter>
)

//when the url matches '/tacos' this component renders
const Tacos = ({match}) => (
  <div>
    <Route
      /* this is how nested routes are done in v4
        match.url helps us make a relative path
      */
      path={match.url + '/carnitas'}
      component={Carnitas}
    />
  </div>
)
```

# Responsive Routes
  * React Router's previous versions' static routes couldn't dynamically change the available routes depending on the size of the screen we were dealing with
    * Start to think about routing as UI, not as static configuration

```javascript
const App = () => (
  <AppLayout>
    <Route path="/invoices" component={Invoices}/>
  </AppLayout>
)

const Invoices = () => (
  <Layout>

    {/* always show the nav */}
    <InvoicesNav/>

    <Media query={PRETTY_SMALL}>
      {screenIsSmall => screenIsSmall
        // small screen has no redirect
        ? <Switch>
            <Route exact path="/invoices/dashboard" component={Dashboard}/>
            <Route path="/invoices/:id" component={Invoice}/>
          </Switch>
        // large screen does!
        : <Switch>
            <Route exact path="/invoices/dashboard" component={Dashboard}/>
            <Route path="/invoices/:id" component={Invoice}/>
            <Redirect from="/invoices" to="/invoices/dashboard"/>
          </Switch>
      }
    </Media>
  </Layout>
)
```

  * To get your intuition in line with React Router's, think about components, not static routes
  * Think about how to solve the problem with React's declarative composability because nearly every "React Router question" is probably a "React question"


# Scroll to the Top
Most of the time all you need is to “scroll to the top” because you have a long content page, that when navigated to, stays scrolled down. This is straightforward to handle with a <ScrollToTop> component that will scroll the window up on every navigation, make sure to wrap it in withRouter to give it access to the router’s props:
