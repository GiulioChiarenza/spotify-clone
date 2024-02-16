
import './App.css'
import MainSection from './component/Main-Section'
import Sidebar from './component/Sidebar'
import Player from './component/Player'
import { Container, Row } from 'react-bootstrap'




function App() {


  return (
    <>
    <Container>
      <Row>
     <MainSection></MainSection>
     <Sidebar></Sidebar>
     <Player></Player>
     </Row>
     </Container>
    </>
  )
}

export default App
