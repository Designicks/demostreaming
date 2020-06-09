import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Content.css'
import {Container,Row,Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Content = (Props) => {
 return(
    <div className="content-main home">
    <div className="content-full">
        <Container>
        <div className="content-top">
            <div className="col-lg-12 col-md-12 col-sm-12">
            <h5 className="title">Popular Titles</h5>
            </div>
        </div>
        </Container>
    </div>
    <Container>
      <Row>
          <div className="innercontent">
          <Link to={"/Movies"}>
                <Card className="mb-3 cardtiles" >
                    <div className="card-img-cover">
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSY7x3oTzaInkqMGft17J6VnARQcSilqn2TTHom3LLGM278z2_&usqp=CAU" />
                        <div className="card-img-overlay"></div>
                        <div className="card-details">Movies</div>
                    </div>
                <Card.Text>Popular Movies</Card.Text>
                </Card>
            </Link>

            <Link to={"/Series"}>
                <Card className="mb-3 cardtiles">
                    <div className="card-img-cover">
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTG1fhv8pOvnOqyUeKiQiLnnhKJmhLp-5a8mConfF6gy55OzrcA&usqp=CAU" />
                        <div className="card-img-overlay"></div>
                        <div className="card-details">Series</div>
                    </div>
                    <Card.Text>Popular Series</Card.Text>
                </Card>
            </Link>
          </div>
      </Row>
    </Container>
    </div>
 )
};

export default Content;