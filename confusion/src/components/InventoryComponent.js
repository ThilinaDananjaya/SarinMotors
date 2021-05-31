import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from "reactstrap";

      function RenderMenuItem({dish}){

        return(
            <Card >

            <CardImg width="100%" src={ dish.image } alt={ dish.name } />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{`price : ${dish.price}`}</CardText>
               
            </CardBody>
        </Card>
        );
      }
  
      const Inventory = (props)=>{ 

        const inventory = props.cars.map((dish) => {
            return (
                <div key={ dish.id } className="col-12 col-md-5">    
                   <RenderMenuItem dish={dish}   />          
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    { inventory }
                </div>



            </div>
        );


      }
       
    



export default Inventory;