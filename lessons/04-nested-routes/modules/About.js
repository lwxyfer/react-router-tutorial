import React from 'react';
import {
  Link,
  Router,
  Route,
  withRouter
} from 'react-router';

let tool = true;
let tooltip = '';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      tooltip: 'aaaaaa'
    }
  }
  componentDidMount() {
    this.confirm();
    this.props.router.setRouteLeaveHook(this.props.route, () => {
      console.log('跳转提示，组件离开HOOK')
      console.log(tool)
      if (tool) {
        // alert();
        return '请确认是否离开此页面，啦啦啦啦'
      }
    })
  }
  confirm() {
    // console.log('click')
    if(tool) {
      this.setState({tooltip : '直接离开'});
      tool = false;
    } else {
      tool = true;
      this.setState({tooltip : '未保存，提示信息'});
    }
  }
  render() {
    return (
      <div>
        <hr />
        <h1>About</h1>
        <Link
          onlyActiveOnIndex
          activeStyle={{color:'#53acff'}}
          to='/about/sec'
        >
            我是二级的路由导航 ---11
        </Link>
        --
        <Link to="/repos" > 修改绝对路径 </Link>
        --
        <Link to='/about/third' > 重定向  </Link>
        --
        <div onClick={this.confirm.bind(this)}>
          <h3> 》》点我状态保存确认《《：
          {this.state.tooltip}
          </h3>
        </div>

        {this.props.children}
      </div>
    )
  }
}
export default withRouter(About)
