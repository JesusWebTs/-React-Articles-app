import React, { useEffect, useState } from "react";
import { articlesApi } from "../services";

function useSubscription() {
  const subscribe = ({ firstname = "", lastname = "", email = "", phone = "" }) => {
    articlesApi.post({
      endPoint: "/newsletter",
      value: {
        firstname,
        lastname,
        email,
        phone,
      },
    });
  };
  return { subscribe };
}

export default useSubscription;
