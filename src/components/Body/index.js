// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="navbar left-navbar">
              <h1>Left Navbar Menu</h1>
              <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
              </ul>
            </div>
          )}

          {showContent && (
            <div className="content-container">
              <h1>Content</h1>
              <p>
                Lorem ipsum dolor sit amet, consecutetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna alique. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="navbar right-navbar">
              <h1>Right Navbar</h1>
              <div className="ad">Ad 1</div>
              <div className="ad">Ad 2</div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
