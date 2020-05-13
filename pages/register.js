import React, { useState } from "react";
import { css } from "@emotion/core";
import Router from 'next/router';
import Layout from "../components/layout/Layout";
import { Form, Field, InputSubmit, Error } from "../components/ui/Form";

import firebase from "../firebase";
// validations
import useValidation from "../hooks/useValidation";
import validateRegister from "../validation/validateRegister";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {

  const [ error, setError ] = useState(false);
  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useValidation(INITIAL_STATE, validateRegister, register);

  const { name, email, password } = values;

  async function register() {
    try {
      await firebase.createAccount(name, email, password);
      Router.push('/');
    } catch (error) {
      console.error("There was an error creating the user", error.message);
      setError(error.message);
    }
  }
  return (
    <div>
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >
            Register
          </h1>
          <Form onSubmit={handleSubmit} noValidate>
            <Field>
              <label htmlFor="name"> Name </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Field>
            {errors.name ? <Error>{errors.name}</Error> : null }

            <Field>
              <label htmlFor="email"> Email </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Field>
            {errors.email ? <Error>{errors.email}</Error> : null }
            <Field>
              <label htmlFor="password"> Password </label>
              <input
                type="password"
                id="password"
                placeholder="Your Password"
                name="password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Field>
            {errors.password ? <Error>{errors.password}</Error> : null }
            {error && <Error>{error} </Error>}
            <InputSubmit type="submit" value="Register" />
          </Form>
        </>
      </Layout>
    </div>
  );
};
export default Register;
