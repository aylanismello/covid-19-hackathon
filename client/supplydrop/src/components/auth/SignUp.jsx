import React from "react";
import {withRouter} from 'react-router';
import { useForm } from "react-hook-form";

function SignUp() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        name="First name"
        ref={register({ required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Last name"
        name="Last name"
        ref={register({ required: true, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="Email"
        name="Email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        name="Phone Number"
        ref={register({ maxLength: 12 })}
      />
      <input
        type="number"
        placeholder="NPI #"
        name="NPI #"
        ref={register({ required: true, max: 10, min: 10, maxLength: 10 })}
      />
      <input
        type="text"
        placeholder="Facility Name"
        name="Facility Name"
        ref={register({ required: true })}
      />
      <input
        type="text"
        placeholder="Facility Address"
        name="Facility Address"
        ref={register}
      />
      <button type="submit" > Register </button>
    </form>
  );
}

export default withRouter(SignUp);