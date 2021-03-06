import React from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { useForm } from "../../hooks/useForm";
import { removeError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "User",
    email: "user@gmail.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      // dispatch(setError("Name is required"));
      Swal.fire("Error", "Name is required", "error");
      return false;
    } else if (!validator.isEmail(email)) {
      // dispatch(setError("Email is not valid"));
      Swal.fire("Error", "Email is not valid", "error");
      return false;
    } else if (password !== password2 || password.length < 5) {
      // dispatch(
      //   setError(
      //     "Password should be at least 6 characters and match each other"
      //   )
      // );
      Swal.fire(
        "Error",
        "Password should be at least 6 characters and match each other",
        "error"
      );
      return false;
    }

    dispatch(removeError());
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your register has been saved",
      showConfirmButton: false,
      timer: 3000,
    });
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Sign in</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}

        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />

        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm Password"
          name="password2"
          value={password2}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Sign in
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};
