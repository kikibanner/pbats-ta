import React from 'react'

const Card = (props) => {
    return (
        <div className="col-md-4">

            <div className="card">
              <img src={props.content.img} alt="" className="card-img-top" />
              <div className="card-body">
                <h4>{props.content.title}</h4>
                <small className="text-muted">Published {props.content.date}</small>
              </div>
            </div>

        </div>
    )
}

export default Card