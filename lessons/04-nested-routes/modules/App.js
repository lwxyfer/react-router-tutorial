import React from 'react'
import { Link, IndexLink } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li>
            <IndexLink
              to="/"
              activeStyle={{color:'red'}}>
                根目录
            </IndexLink>
          </li>

          <li>
            <Link to="/about" activeStyle={{color:'red'}}>
              About
            </Link>
          </li>

          <li>
            <Link to="/repos" activeStyle={{color:'red'}}>
              Repos
            </Link>
          </li>

          <li>
            <Link to="/namedComponent" activeStyle={{color:'red'}}>
              命名组件
            </Link>
          </li>

          <IndexLink
            to={{
              pathname: '/query',
              query: {
                message: 'Hello from Route Query',
                test: '查询测试'
               }
            }}
          >
            Route Query
          </IndexLink>
        </ul>
        {this.props.children}
        <hr/>
        <h1> 上面是子组件 </h1>
      </div>
    )
  }
})
