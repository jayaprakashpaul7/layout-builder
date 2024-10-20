// Write your code here
import './index.css'
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="controller-bg">
          <h1>Layout</h1>
          <div>
            <div>
              <input
                type="checkbox"
                checked={showContent}
                onChange={onToggleShowContent}
                id="content"
              />
              <label htmlFor="content">Content</label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={showLeftNavbar}
                onChange={onToggleShowLeftNavbar}
                id="l-nav"
              />
              <label htmlFor="l-nav">Left Navbar</label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={showRightNavbar}
                onChange={onToggleShowRightNavbar}
                id="r-nav"
              />
              <label htmlFor="r-nav">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
