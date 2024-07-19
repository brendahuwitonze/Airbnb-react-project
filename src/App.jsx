
import './App.css'
import Hero from './Hero'
import Navbar from './navBar'
import Card from './card'

function App() {
 
  return(
    <>
     <Navbar/>
    <div className='container'>
    <Hero/>
    <div className='mainCard'>
    <Card
    status="SOLD OUT"
    img="src/assets/image.png"
    imges="src/assets/Star 1.png"
    views='5.0(6).USA'
    name='life lesson with katie zaferes'
    price ="$136/person"
    />
 
<Card
    status="ONLINE"
    img="src/assets/wedding-photography 1.png"
    imges="src/assets/Star 1.png"
    views='5.0(6).USA'
    name='life wedding photography'
    price ="$125/person"
    />

<Card
    status="ONLINE"
    img="src/assets/mountain-bike 1.png"
    imges="src/assets/Star 1.png"
    views='5.0(6).USA'
    name="Group Mountain Biking"
    price ="$50/person"
    /> 
    </div>
    </div>
    </>
  )
}

export default App
