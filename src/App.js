import { React, useEffect, useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import mockCats from './mockCats'
import Header from './components/Header'
import Footer from './components/Footer'
import CatShow from './pages/CatShow'
import CatEdit from './pages/CatEdit'
import CatIndex from './pages/CatIndex'
import CatNew from './pages/CatNew'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const App = () => {
  
  const [cats, setCats] = useState([])

  useEffect(() => { readCats() }, [])

  const readCats = () => {
    fetch("http://localhost:3000/cats")
      .then(response => response.json())
      .then(payload => {
        setCats(payload)
      })
      .catch(error => console.log(error))
  }

  const createNewCat = (newCatObject) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(newCatObject),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(payload => readCats())
      .catch(errors => console.log("cat create errors:", errors))
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
