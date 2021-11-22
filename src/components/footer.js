import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className=' site-footer align-items-center '>
          <div>Chase Chung</div>
          <div>
            <a
              style={{ color: 'white' }}
              role='button'
              className='btn btn-link'
              href='mailto:sccala18@gmail.com'
            >
              sccala18@gmail.com
            </a>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer
