import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="row py-5">
            <div className="col-md text-center pb-3">Sunsoo Chung</div>
            <div className="col-md text-center pb-3">
              <a className="btn btn-social-icon btn-github" href="#">
                <i class="fa fa-github"></i>
              </a>{' '}
              <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">
                <i className="fa fa-twitter" />
              </a>{' '}
              <a className="btn btn-social-icon btn-google" href="http://youtube.com/">
                <i className="fa fa-youtube" />
              </a>
            </div>
            <div className="col-md text-center">
              <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co">
                <i className="fa fa-envelope-o" /> sccala18@gmail.co
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer
