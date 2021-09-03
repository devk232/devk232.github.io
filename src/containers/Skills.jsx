import React, { Fragment } from "react";
import { Fade } from "react-reveal";
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";

const Skills = () => {
  return (
    <Fade left duration={1000} distance="40px">
      <Container className="text-center my-5 section section-lg">
        <h1 className="h1">My Skills</h1>
        <Row>
          <Col>
            <h1 className="lead">Programming Languages</h1>
            <div className="d-flex justify-content-center flex-wrap mb-5">
              <Fragment>
                <div
                  className="icon icon-lg icon-shape shadow rounded-circle m-2"
                  id="c"
                >
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" />
                </div>
                <UncontrolledTooltip delay={0} placement="bottom" target="c">
                  C
                </UncontrolledTooltip>
              </Fragment>
              <Fragment>
                <div
                  className="icon icon-lg icon-shape shadow rounded-circle m-2"
                  id="cpp"
                >
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" />
                </div>
                <UncontrolledTooltip delay={0} placement="bottom" target="cpp">
                  C++
                </UncontrolledTooltip>
              </Fragment>
              <Fragment>
                <div
                  className="icon icon-lg icon-shape shadow rounded-circle m-2"
                  id="js"
                >
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" />
                </div>
                <UncontrolledTooltip delay={0} placement="bottom" target="js">
                  JavaScript
                </UncontrolledTooltip>
              </Fragment>
              <Fragment>
                <div
                  className="icon icon-lg icon-shape shadow rounded-circle m-2"
                  id="py"
                >
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" />
                </div>
                <UncontrolledTooltip delay={0} placement="bottom" target="py">
                  Python
                </UncontrolledTooltip>
              </Fragment>
              <Fragment>
                <div
                  className="icon icon-lg icon-shape shadow rounded-circle m-2"
                  id="bash"
                >
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg" />
                </div>
                <UncontrolledTooltip delay={0} placement="bottom" target="bash">
                  Bash
                </UncontrolledTooltip>
              </Fragment>
            </div>
            <div>
              <h1 className="lead">
                Development(Libraries/Frameworks/Languages)
              </h1>
              <Fragment>
                <div
                  className="icon icon-lg icon-shape shadow rounded-circle m-2"
                  id="html"
                >
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" />
                </div>
                <UncontrolledTooltip delay={0} placement="bottom" target="html">
                  HTML
                </UncontrolledTooltip>
              </Fragment>
              <Fragment>
                <div
                  className="icon icon-lg icon-shape shadow rounded-circle m-2"
                  id="CSS"
                >
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" />
                </div>
                <UncontrolledTooltip delay={0} placement="bottom" target="CSS">
                  CSS
                </UncontrolledTooltip>
              </Fragment>
              <Fragment>
                <div
                  className="icon icon-lg icon-shape shadow rounded-circle m-2"
                  id="bootstrap"
                >
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" />
                </div>
                <UncontrolledTooltip
                  delay={0}
                  placement="bottom"
                  target="bootstrap"
                >
                  Bootstrap
                </UncontrolledTooltip>
              </Fragment>
              <Fragment>
                <div
                  className="icon icon-lg icon-shape shadow rounded-circle m-2"
                  id="Node"
                >
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" />
                </div>
                <UncontrolledTooltip delay={0} placement="bottom" target="Node">
                  Node
                </UncontrolledTooltip>
              </Fragment>
              <Fragment>
                <div
                  className="icon icon-lg icon-shape shadow rounded-circle m-2"
                  id="socketio"
                >
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original-wordmark.svg" />
                </div>
                <UncontrolledTooltip
                  delay={0}
                  placement="bottom"
                  target="socketio"
                >
                  Socket.IO
                </UncontrolledTooltip>
              </Fragment>
              <Fragment>
                <div
                  className="icon icon-lg icon-shape shadow rounded-circle m-2"
                  id="React"
                >
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
                </div>
                <UncontrolledTooltip
                  delay={0}
                  placement="bottom"
                  target="React"
                >
                  React
                </UncontrolledTooltip>
              </Fragment>

              <Fragment>
                <div
                  className="icon icon-lg icon-shape shadow rounded-circle m-2"
                  id="redux"
                >
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" />
                </div>
                <UncontrolledTooltip
                  delay={0}
                  placement="bottom"
                  target="redux"
                >
                  Redux
                </UncontrolledTooltip>
              </Fragment>
            </div>
            <div>
              <h1 className="lead">Other Skills</h1>
              <Fragment>
                <div
                  className="icon icon-lg icon-shape shadow rounded-circle m-2"
                  id="MySQL"
                >
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" />
                </div>
                <UncontrolledTooltip
                  delay={0}
                  placement="bottom"
                  target="MySQL"
                >
                  MySQL
                </UncontrolledTooltip>
              </Fragment>

              <Fragment>
                <div
                  className="icon icon-lg icon-shape shadow rounded-circle m-2"
                  id="mongodb"
                >
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" />
                </div>
                <UncontrolledTooltip
                  delay={0}
                  placement="bottom"
                  target="mongodb"
                >
                  MongoDB
                </UncontrolledTooltip>
              </Fragment>
              <Fragment>
                <div
                  className="icon icon-lg icon-shape shadow rounded-circle m-2"
                  id="git"
                >
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" />
                </div>
                <UncontrolledTooltip delay={0} placement="bottom" target="git">
                  Git
                </UncontrolledTooltip>
              </Fragment>
              <Fragment>
                <div
                  className="icon icon-lg icon-shape shadow rounded-circle m-2"
                  id="linux"
                >
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" />
                </div>
                <UncontrolledTooltip
                  delay={0}
                  placement="bottom"
                  target="linux"
                >
                  Linux
                </UncontrolledTooltip>
              </Fragment>
              <Fragment>
                <div
                  className="icon icon-lg icon-shape shadow rounded-circle m-2"
                  id="docker"
                >
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" />
                </div>
                <UncontrolledTooltip
                  delay={0}
                  placement="bottom"
                  target="docker"
                >
                  Docker
                </UncontrolledTooltip>
              </Fragment>
            </div>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
};

export default Skills;
