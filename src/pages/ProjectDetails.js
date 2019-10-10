import React from "react";
import NotFound from "../components/NotFound";
import Slideshow from "../components/Slideshow";

import philipsAdventure1 from "../pages/images/development/philips-adventure/gui-1.jpg";
import philipsAdventure2 from "../pages/images/development/philips-adventure/gui-2.jpg";
import philipsAdventure3 from "../pages/images/development/philips-adventure/gui-3.jpg";

import philipsAdventure4 from "../pages/images/development/philips-adventure/mision-1.jpg";
import philipsAdventure5 from "../pages/images/development/philips-adventure/mision-4.jpg";
import philipsAdventure6 from "../pages/images/development/philips-adventure/mision-5.jpg";

import fileManager1 from "../pages/images/development/file-manager/fm-2.png";
import fileManager2 from "../pages/images/development/file-manager/fm-3.png";

class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: undefined
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const projectsData = {
      1: {
        name: "Philip's Adventure",
        description:
          "In association with Diego Mellizo we developed a videogame as a support tool for English teaching. It was installed on computers of a school in Ubaté (Cund. - Colombia).",
        specs: [
          {
            id: "1",
            name: "Videogame Engine: Unity"
          },
          {
            id: "2",
            name: "Programming language: C#"
          },
          {
            id: "3",
            name: "UI: Unity Asset Store"
          }
        ],
        images: [
          {
            id: "1",
            src: philipsAdventure1,
            alt: "Philip's Adventure - GUI"
          },
          {
            id: "2",
            src: philipsAdventure2,
            alt: "Philip's Adventure - GUI"
          },
          {
            id: "3",
            src: philipsAdventure3,
            alt: "Philip's Adventure - GUI"
          },
          {
            id: "4",
            src: philipsAdventure4,
            alt: "Philip's Adventure - Misions"
          },
          {
            id: "5",
            src: philipsAdventure5,
            alt: "Philip's Adventure - Misions"
          },
          {
            id: "6",
            src: philipsAdventure6,
            alt: "Philip's Adventure - Misions"
          }
        ]
      },
      2: {
        name: "Web plug-in for GDA",
        description:
          "In association with Diego Mellizo and Eforcers we developed a file manager plug-in for GDA's HumHub social network.",
        specs: [
          {
            id: "1",
            name: "Programming language: PHP using Yii (framework based on MVC)"
          },
          {
            id: "2",
            name: "GUI: Bootstrap"
          },
          {
            id: "3",
            name: "Server: Apache Tomcat"
          }
        ],
        images: [
          {
            id: "1",
            src: fileManager1,
            alt: "File Manager - GUI"
          },
          {
            id: "2",
            src: fileManager2,
            alt: "File Manager - GUI"
          }
        ]
      }
    };
    const projectId = this.props.match.params.projectId;
    const projectData = projectsData[projectId];
    this.setState({ projectData: projectData });
  };

  render() {
    const project = this.state.projectData;
    if (project) {
      return (
        <React.Fragment>
          <div id="" className="bkg-img bkg-5 full-page">
            <div className="bkg-rec full-page">
              <div className="main-content">
                <div className="row">
                  <div className="col-xs-12 center-xs">
                    <h2>{project.name}</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <Slideshow images={project.images} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <h4>DESCRIPTION</h4>
                    <p>{project.description}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <h4>SPECS</h4>
                    <ul>
                      {project.specs.map(spec => {
                        return (
                          <li key={spec.id} className="blue-bullets">
                            {spec.name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return <NotFound />;
    }
  }
}

export default ProjectDetails;
