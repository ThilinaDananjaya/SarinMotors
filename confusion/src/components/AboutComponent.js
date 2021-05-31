import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {

    const leaders = props.leaders.map((leader) => {
        return (
            <div key={leader.id} className="col-12 mt-5">
            <Media tag="li">
              <Media left middle>
                  <Media className="img-fluid" object src={leader.image} alt={leader.name} />
              </Media>
              <Media body className="ml-5">
                <Media heading>{leader.name}</Media>
                <Media subheading>{leader.designation}</Media>
                <p>{leader.description}</p>
              </Media>
            </Media>
          </div>
        );
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a neque lacinia, volutpat nunc sed, vehicula ipsum. Phasellus gravida euismod erat eu auctor. Donec dignissim mollis tortor, quis commodo justo ultrices rutrum. Nullam placerat sagittis augue et tempus. Maecenas gravida lorem nunc, a suscipit nulla interdum laoreet. Sed pellentesque lorem id mauris luctus, et bibendum mi ultrices. Vestibulum ac lacus sit amet felis fermentum pharetra. Sed vel dolor lacinia, consequat sapien vitae, malesuada quam. Aenean eget ante velit. Pellentesque ac nisi ultricies felis commodo scelerisque sit amet ut mi. Proin ultricies interdum felis, sed varius ex interdum in. Quisque vel erat in justo laoreet luctus. Duis neque justo, fermentum sed justo non, viverra egestas augue. Sed in mi bibendum, elementum tellus eu, consequat ipsum.

</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leaders}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;    