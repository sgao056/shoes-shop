import React from 'react';
import '../css/App.scss'

class Login extends React.Component{
  
  state = {
    email:'',
    password:'',
  }

  msg = 'clicked';

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push('/')
  }  

  handleChange = e =>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  
  render(){
        return( 
        <React.Fragment>
        <div>
          <div className='login-wrapper'>
            <form className='box login-box' onSubmit = {this.handleSubmit.bind(this)}>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input className="input" type="email" name='email' placeholder='email' value={this.state.email} onChange={this.handleChange}/>
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input className="input" type="password" name='password' placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <button>
                      Submit
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
        </React.Fragment>
        )
    }
}

export default Login;
