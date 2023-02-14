import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/img2.png";
import projImg2 from "../assets/img/sort.jpg";
import projImg3 from "../assets/img/img1.png";
import projImg4 from "../assets/img/img5.png";
import projImg5 from "../assets/img/img6.png";
import projImg6 from "../assets/img/img7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Exploratory Data Analysis project",
      description: "Data Analytics",
      imgUrl: projImg1,
      href: "https://github.com/MarcusMahlatjie/Exploratory-data-analysis-project", 
    },

    {
      title: "Credit Check Application",
      description: "C# .NET FRAMEWORK",
      imgUrl: projImg2,
      href: "https://github.com/MarcusMahlatjie/credit-check-application"
    },
    
    {
      title: "Sorting Algorithms Program",
      description: "Different C# sorting algorithmS",
      imgUrl: projImg3,
      href: "https://github.com/MarcusMahlatjie/sorting-algorithm-program"
    },
  ];

  const projects2 = [
    {
      title: "Quick Sort",
      description: "C#",
      imgUrl: projImg4,
      href: "https://github.com/MarcusMahlatjie/sorting-algorithm-program/blob/main/sorting-algorithm-program/Program.cs#:~:text=%7D-,//%20QUICK%20SORT%20ALGORITHM,%7D,-//%20MERGE%20SORT"
    },

    {
      title: "Binary Search",
      description: "C#",
      imgUrl: projImg5,
      href: "https://github.com/MarcusMahlatjie/sorting-algorithm-program/blob/main/sorting-algorithm-program/Program.cs#:~:text=%7D-,//%20BINARY%20SEARCH,%7D,-//%20ERROR%20MESSAGE"
    },
    
    {
      title: "Bubble Sort ",
      description: "C#",
      imgUrl: projImg6,
      href: "https://github.com/MarcusMahlatjie/sorting-algorithm-program/blob/main/sorting-algorithm-program/Program.cs#:~:text=SELECTION%20FROM%20USER-,//%20BUBBLE%20SORT%20ALGORITHM,%7D,-//%20QUICK%20SORT"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>The following are different projects that I have personally worked on and published to GitHub for public view. They showcase my skills in different languages and fields such as Data Analytics</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="Portfolio Projects">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Portfolio Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Code Snippets</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Current Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>Below are three of my most recent and well built projects. You can click on the images to view the project on GitHub.</p>
                      <Row>
                        {           
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                     
                    </Tab.Pane>
                   
                    <Tab.Pane eventKey="second">
                      <p>The following are different code snippets of projects I have completed annd some usefull snippets that can be used anywhere.</p>
                      <Row>
                        {           
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <p>I am currently working on a Statistical Thinking project where I am running three main components of Data Science which are Data processing, Data Analysis and Data Visualisation. This is a Data Science project in Python. </p>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
