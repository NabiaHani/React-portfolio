import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from '../../Components/ProjectStyle'
import ProjectCard from '../../Components/ProjectCard'
import { projects } from '../../data/typewriter'
import Navbar from "../Navbar"
import Footer from "../Footer.jsx"
import '../ProjectStyle.js'


const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  return (
    <>
      <Navbar />
      <Container id="projects">
        <Wrapper>
          <Title>Projects</Title>
          <Desc>
            I have worked on a wide range of projects, Here are some of my projects.
          </Desc>
          <ToggleButtonGroup >
            {toggle === 'all' ?
              <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
              :
              <ToggleButton value="all" onClick={() => setToggle('all')}>ALL</ToggleButton>
            }
            <Divider />
            {toggle === 'HTML CSS' ?
              <ToggleButton active value="HTML CSS" onClick={() => setToggle('HTML CSS')}>HTML CSS</ToggleButton>
              :
              <ToggleButton value="HTML CSS" onClick={() => setToggle('HTML CSS')}>HTML CSS</ToggleButton>
            }
            <Divider />
            {toggle === 'HTML CSS JS' ?
              <ToggleButton active value="HTML CSS JS" onClick={() => setToggle('HTML CSS JS')}>HTML CSS JS</ToggleButton>
              :
              <ToggleButton value="HTML CSS JS" onClick={() => setToggle('HTML CSS JS')}>HTML CSS JS</ToggleButton>
            }
            <Divider />
            {toggle === 'react' ?
              <ToggleButton active value="React" onClick={() => setToggle('React')}>REACT</ToggleButton>
              :
              <ToggleButton value="React" onClick={() => setToggle('React')}>REACT</ToggleButton>
            }
            <Divider />
          </ToggleButtonGroup>
          <CardContainer>
            {toggle === 'all' && projects
              .map((project) => (
                <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
              ))}
            {projects
              .filter((item) => item.category == toggle)
              .map((project) => (
                <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
              ))}
          </CardContainer>
        </Wrapper>
      </Container>
      <Footer />
    </>
  )
}

export default Projects



// import Navbar from "../Components/Navbar";


// export default function Project(){
//   return(
//       <>
//       <Navbar/>
//       <h2>Project page</h2>
//       </>
//   )
// }