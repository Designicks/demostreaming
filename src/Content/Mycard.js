import React from 'react'
import {Card} from 'react-bootstrap'
import './Mycard.css'

const Mycard = (Props) => {
    return (
        <div>
            <Card className="mb-3" >
                <div className="card-img-cover">
                    <Card.Img variant="top" src={Props.imgsrc} />
                </div>
                <Card.Text>{Props.type}</Card.Text>
            </Card>
        </div>
    )
}

export default Mycard

