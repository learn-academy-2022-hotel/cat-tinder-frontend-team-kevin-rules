import React from "react"
import { Card, CardBody, CardSubtitle, CardTitle, Button } from "reactstrap"
import { NavLink } from "react-router-dom"

const CatIndex = ({ cats }) => {
  return (
    <main className="index-cards">
      {cats.map((cat, index) => {
        return (
          <Card
            color="light"
            style={{
              width: "18rem",
            }}
            key={index}
          >
            <img alt="Cute cat" src={cat.image} />
            <CardBody>
              <CardTitle tag="h5">{cat.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {cat.age}
              </CardSubtitle>

              <NavLink to={`/catshow/${cat.id}`} class-name="nav-link">
                More About Me
              </NavLink>
            </CardBody>
          </Card>
        )
      })}
    </main>
  )
}

export default CatIndex
