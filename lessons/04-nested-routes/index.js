import React from 'react'
import { render } from 'react-dom'
import {
  Router,
  Route,
  hashHistory,
  IndexRoute,
  Redirect
 } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Second from './modules/Second'
import Third from './modules/Third'

const NotFound = () => <h3> 404 opppppppppppps </h3>;
const NamedComponents = (props) => (
  <div>
    {props.title}<br />
    {props.subTitle}
  </div>
);
const Title = () => (
  <h1>Hello from Title Component</h1>
);
const SubTitle = () => (
  <h1>Hello from SubTitle Component</h1>
);
const Query = (props) => (
  <div>
    <h2>{props.location.query.message}</h2>
    <h2>{props.location.query.test}</h2>
  </div>
)

render((
  <Router history={hashHistory}>
    <Route path='/' component={App} >
      <Route path='about' component={About} >
        <Route path='sec' component={Second} />
        <Redirect from="third" to="/repos" />
      </Route>
      <Route path='repos(/:name)' component={Repos} />
      <Route path='namedComponent' component={NamedComponents}>
        <IndexRoute components={{ title: Title, subTitle: SubTitle }} />
      </Route>
      <Route path='query' component={Query} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
), document.getElementById('app'))

// <Route path='third' component={Third} />
