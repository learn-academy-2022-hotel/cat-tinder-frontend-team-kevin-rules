import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const CatNew = ({ createNewCat }) => {

  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    //spread operator makes a copy of our state object (newCat)
    // e.target.name will tell us which key we are updating based on the name property in input
    // e.target.value will tell us what value we are setting to that key
    setNewCat({...newCat, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    createNewCat(newCat)
    navigate("/catindex")
  }
 
  return(
    <> 
      <h1>Add a New Cat!</h1>  
      <Form>
        <FormGroup>
          <Label for="name">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="with a placeholder"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">
            Age
          </Label>
          <Input
            id="age"
            name="age"
            placeholder="what's your age?"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">
            Enjoys
          </Label>
          <Input
            id="enjoys"
            name="enjoys"
            placeholder="what do you like to do?"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">
           Image 
          </Label>
          <Input
            id="image"
            name="image"
            placeholder="please add image url"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
      </Form>
      <div>
        <Button
          color="primary"
          name="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </>
  )
}

export default CatNew;