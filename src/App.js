import { React, useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import mockCats from './mockCats'
import Header from './components/Header'
import Footer from './components/Footer'
import CatShow from './pages/CatShow'
import CatEdit from './pages/CatEdit'
import CatIndex from './pages/CatIndex'
import CatNew from './pages/CatNew'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
  
  const [cats, setCats] = useState(mockCats)

  const createNewCat = (newCatObject) => {
    console.log("new cat obj: ", newCatObject)
  }

  return(
    <>
     <Header />
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/catindex" element={<CatIndex cats={cats}/>} />
       <Route path="/catshow/:id" element={<CatShow cats={cats}/>} />
       <Route path="/catedit" element={<CatEdit/>} />
       <Route path="/catnew" element={<CatNew createNewCat={createNewCat}/>} />
       <Route path="*" element={<NotFound/>} />
     </Routes>
     <Footer />
     </>
  )
}

export default App;
