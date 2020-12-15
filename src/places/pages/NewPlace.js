import React from "react";
import Input from "../../shared/components/FormElements/Input";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import "./PlaceForm.css";

import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/forms-hook";

const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      adress: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  return (
    <form action="" className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="please enter a valid description (min 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="adress"
        element="input"
        label="Adress"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="please enter a valid adress."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
