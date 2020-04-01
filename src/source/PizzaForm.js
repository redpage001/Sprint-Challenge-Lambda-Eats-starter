import React, {useState, useEffect} from "react";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";

const formSchema = yup.object().shape({
    name: yup.string().min(2).required("Must have at least 2 Characters for Name"),
    sizes: yup.string(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    ham: yup.boolean(),
    mushroom: yup.boolean(),
    instructions: yup.string()
    
});

const Form = () => {

    const [formState, setFormState] = useState({
        name: "",
        sizes: "Extra Large",
        pepperoni: "",
        sausage: "",
        ham: "",
        mushroom: "",
        instructions: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        sizes: "",
        pepperoni: "",
        sausage: "",
        ham: "",
        mushroom: "",
        instructions: ""
    })

    const [buttonDisabled, setButtonDisabled] =useState(true);

    const [post, setPost] = useState([]);

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid);
        });
    }, [formState]);

    const formSubmit = e => {
        e.preventDefault();
        axios
            .post("https://reqres.in/api/users", formState)
            .then(res => {
                setPost(res.data);
                console.log("success", post);

                setFormState({
                    name: "",
                    sizes: "small",
                    pepperoni: "",
                    sausage: "",
                    ham: "",
                    mushroom: "",
                    instructions: ""
                });
            })
            .catch(err => {
                console.log(err.res);
            });
    };

    const validateChange = e => {
        yup
          .reach(formSchema, e.target.name)
          .validate(e.target.name === "terms" ? e.target.checked : e.target.value)
          .then(valid => {
            setErrors({
              ...errors,
              [e.target.name]: ""
            });
          })
          .catch(err => {
            setErrors({
              ...errors,
              [e.target.name]: err.errors
            });
          });
      };

      const inputChange = e => {
        e.persist();
        const newFormData = {
          ...formState,
          [e.target.name]:
            e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
        validateChange(e);
        setFormState(newFormData);
      };
    
    return(
        <form onSubmit={formSubmit}>

            <label htmlFor="name">Name:
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={inputChange}
                    pattern="[A-Za-z]{2,}"
                />
                {errors.name.length > 0 ? <p id="nameP">{errors.name}</p> : null}
            </label>

            <label htmlFor="sizes">Size:
                <select id="sizes" name="sizes" onChange={inputChange}>
                    <option value="ExtraLarge">Extra Large</option>
                    <option value="Large">Large</option>
                    <option value="Medium">Medium</option>
                    <option value="Small">Small</option>
                </select>
            </label>

            <div>
                <h3>Toppings</h3>
                <label htmlFor="pepperoni">Pepperoni:
                    <input
                        id="pepperoni"
                        type="checkbox"
                        name="pepperoni"
                        checked={formState.pepperoni}
                        onChange={inputChange}
                    />
                </label>
                <label htmlFor="sausage">Sausage:
                    <input 
                        id="sausage"
                        type="checkbox"
                        name="sausage"
                        checked={formState.sausage}
                        onChange={inputChange}
                    />
                </label>
                <label htmlFor="ham">Ham:
                    <input 
                        id="ham"
                        type="checkbox"
                        name="ham"
                        checked={formState.ham}
                        onChange={inputChange}
                    />
                </label>
                <label htlmFor="mushroom">Mushroom:
                    <input 
                        id="mushroom"
                        type="checkbox"
                        name="mushroom"
                        checked={formState.mushroom}
                        onChange={inputChange}
                    />
                </label>
            </div>

            <label htmlFor="instructions">Special Instructions:
                <input 
                    id="instructions"
                    type="text"
                    name="instructions"
                    value={formState.instructions}
                    onChange={inputChange}
                />
            </label>
            <pre>{JSON.stringify(post, null, 2)}</pre>
            <button type="submit" disabled={buttonDisabled}>Submit</button>

        </form>
    )
}

export default Form;