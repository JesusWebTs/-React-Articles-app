import React, { useEffect, useState } from "react";

let nameExp =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

let emailExp =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

let phoneExp = /^[09][0-9]{1,7}$/;

function useSubscriptionForm() {
  let [name, setName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [errorName, setErrorName] = useState(false);
  let [errorLastName, setErrorLastName] = useState(false);
  let [errorEmail, setErrorEmail] = useState(false);
  let [errorPhone, setErrorPhone] = useState(false);
  let [submited, setSubmited] = useState(false);

  useEffect(() => {
    if (submited) {
      if (!nameExp.test(name)) {
        setErrorName(true);
      } else {
        setErrorName(false);
      }
      if (!nameExp.test(lastName)) {
        setErrorLastName(true);
      } else {
        setErrorLastName(false);
      }
      if (!emailExp.test(email)) {
        setErrorEmail(true);
      } else {
        setErrorEmail(false);
      }
      if (!phoneExp.test(phone)) {
        setErrorPhone(true);
      } else {
        setErrorPhone(false);
      }
    }
    return () => {};
  }, [name, lastName, email, phone]);

  let submitForm = () => {
    let error = false;
    setSubmited(true);
    if (!nameExp.test(name)) {
      setErrorName(true);
      error = true;
    }
    if (!nameExp.test(lastName)) {
      setErrorLastName(true);
      error = true;
    }
    if (!emailExp.test(email)) {
      setErrorEmail(true);
      error = true;
    }
    if (!phoneExp.test(phone)) {
      setErrorPhone(true);
      error = true;
    }
    if (error) return;
  };

  return {
    name,
    setName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    errorName,
    errorLastName,
    errorEmail,
    errorPhone,
    submitForm,
  };
}

export default useSubscriptionForm;
