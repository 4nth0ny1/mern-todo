import { API_URL, token } from "./config";

export default (password) => {
  return fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password,
    }),
  }).then((response) => {
    if (response.ok) {
      response.json();
    } else {
      throw new Error("login failed");
    }
  });
};
