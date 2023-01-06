import HomeRecipeList from './HomeRecipeList';
import React from 'react'
import HomeCreatorList from './HomeCreatorList'
import homepic from "./pictures/homepic.jpg"
import "./home.css"

const Home = ({ handleCreatorNameChange }) => {
  return (
    <div className="App">
      <div className="home__header">
        <img src={homepic} alt="Header image" />
        <div className="home__header-text">Foodi.</div>
      </div>
      <div className="home__content">
        <div className="middle-section">Featured Recipes
          <HomeRecipeList />
        </div>
        <div className='spacer'>--------------</div>
        <div className="bottom-section">Featured Foodies
          <HomeCreatorList handleCreatorNameChange={handleCreatorNameChange} />
        </div>
      </div>
    </div>
  )
}

export default Home

















// const Home = ({ handleCreatorNameChange }) => {
//   return (
//     <div>
//       <div className="App">
//         <header className="App-header">
//         <div className='spacer'>--------------</div>
//           <div className = "middle-section">Featured Recipes
//             <HomeRecipeList />
//           </div>
//           <div className='spacer'>--------------</div>
//           <div className = "bottom-section">Featured Creators
//             <HomeCreatorList handleCreatorNameChange={handleCreatorNameChange} />
//           </div>
//           <div className='spacer'>--------------</div>
//         </header>
//       </div>
//     </div>
//   )
// }

// export default Home