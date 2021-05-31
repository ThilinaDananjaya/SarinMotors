import React from 'react';

function Contact(props) {
    return(
        <div className="container">
            <div className="row row-content">

 
                <div >
                <div className="col-12">
                <h3>Business Hours</h3><br/>
                Mon:	9:00am - 6:00pm <br/>
                Tue:	9:00am - 6:00pm<br/>
                Wed:	9:00am - 6:00pm<br/>
                Thu:	9:00am - 6:00pm<br/>
                Fri:	9:00am - 6:00pm<br/>
                Sat:	9:00am - 6:00pm<br/>
                Sun:	Closed 
                </div>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        C.S Car Sales<br />
                        174 Kandy Rd, Kadawatha<br />
                        11850<br />
                        <i className="fa fa-phone"></i>: 033 2256411<br />
                        <i className="fa fa-fax"></i>: +0332256411<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:cscarsales.lk">cscarsales.lk</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;