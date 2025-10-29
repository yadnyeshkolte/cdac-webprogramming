
import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';
import Image  from './components/Image';
import ImageProps from './components/ImageProps';


function App() {

  return (
    <>
    <div style={{alignContent: "center", alignItems: "center"}}>
      <Header />
      <ImageProps name='Flags' size='250KB' pixels={340}/>
      <Image />
      <Footer />
    </div>
    </>
  )
}

export default App;
