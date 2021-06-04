/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
 
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";


function ProfilePage() {
  // const [activeTab, setActiveTab] = React.useState("1");

  // const toggle = (tab) => {
  //   if (activeTab !== tab) {
  //     setActiveTab(tab);
  //   }
  // };

  // document.documentElement.classList.remove("nav-open");
  // React.useEffect(() => {
  //   document.body.classList.add("landing-page");
  //   return function cleanup() {
  //     document.body.classList.remove("landing-page");
  //   };
  // });
  return (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/sophia-sunset.jpg").default}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Sophia DiPaola <br />
              </h4>
              <h6 className="description">Front-End Devloper</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
              With a background in the arts, I have always been fascinated with the process of creating something out of nothing.
There is nothing more magical than seeing the direct manifestation of an idea come to life.
I'm a front-end engineer with strength in React, CSS, Javascript, Django, and MongoDB.
I contribute a unique perspective due to my capacity to easily access creativity and logic.
I feel comfortable with my innate ability of being both big vision and detail oriented.
I bring passion, lateral thinking and a knack for creation to the table.
<br/>
<br/>
<h6 className="description">Technical Skills</h6>
Languages | JavaScript, HTML, CSS, Python, EJS<br/>
Libraries + Frameworks | React.js, Node.js, Express.js, Django, Material UI  <br/>
Database | PostgreSQL, Sequelize, ORM, MongoDB, REST APIs, pymongo<br/>
Other |  Square Space, Git Hub
              </p>
              <br/>
              <Button
              href="https://www.keepandshare.com/doc11/32068/sophia-dipaola-1-pdf-153k?da=y"
              className="btn-round mr-1"
              color="success"
              target="_blank"
              outline
            >
             <p className="resum-btn">Resume</p>
            </Button>
            </Col>
          </Row>
          
          </Container>          
                   
          
                  
                            
                        
                       
                        
        </div>                
                       
                     
      
      
    </>
  );
}

export default ProfilePage;
