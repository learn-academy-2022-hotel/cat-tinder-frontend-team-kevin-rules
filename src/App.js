import { React, useState} from 'react'
import cats from './mockCats'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CatShow from './pages/CatShow'
import CatEdit from './pages/CatEdit'
import CatIndex from './pages/CatIndex'
import CatNew from './pages/CatNew'
import Home from './pages/Home'
import NotFound from './pages/NotFound'


const App = () => {
  
  const [mockCats, setMockCats] = useState(cats)

  console.log(mockCats)

  return(
    <>
     <Header />
     <Routes>
      <h1>Cat Tinder Hooray!</h1>
       <Route path="/" element={<Home/>} />
       <Route path="/catedit" element={<CatEdit/>} />
       <Route path="/catindex" element={<CatIndex/>} />
       <Route path="/catnew" element={<CatNew/>} />
       <Route path="/catshow" element={<CatShow/>} />
       <Route path="*" element={<NotFound/>} />
     </Routes>
     <Footer />
     </>
  )
}

export default App;
