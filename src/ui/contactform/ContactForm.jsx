import { useReducer } from "react";
import styles from "./ContactForm.module.css";

const API_URL = "http://13.42.66.170:4732/api/contact";

function reducer(state, action) {
  switch (action.type) {
    case "changeEmail":
      return { ...state, email: action.payload };

    case "changeDesc":
      return { ...state, description: action.payload };

    case "changeResp":
      return { ...state, resp: action.payload };
  }
}

function ContactForm() {
  const initialState = {
    email: "",
    description: "",
    resp: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleSubmit(e) {
    e.preventDefault();

    async function sendRequest(email, desc) {
      dispatch({ type: "changeResp", payload: "loading..." });
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "*",
        },
        body: JSON.stringify({ email: email, description: desc }),
      });

      if (res.status === 200) {
        dispatch({
          type: "changeResp",
          payload: "sucess! we receieved your message.",
        });
      } else {
        dispatch({
          type: "changeResp",
          payload: "error. We haven't received your request",
        });
      }
    }

    sendRequest(state.email, state.description);
  }

  return (
    <div className={styles.form}>
      <h1>Contact Me</h1>
      <p>
        to contact me, you can use this form below or through socials found on
        the home page. <span style={{ color: "#fc2d5a" }}>PLEASE NOTE:</span>{" "}
        all details submitted are saved and will be read as soon as possible and
        cleared as soon as necessary.
      </p>

      <form action="POST">
        <p>Email:</p>
        <input
          type="email"
          id="email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "changeEmail", payload: e.target.value })
          }
        />

        <p>Description:</p>
        <textarea
          name=""
          id="description"
          value={state.desc}
          onChange={(e) =>
            dispatch({ type: "changeDesc", payload: e.target.value })
          }
        ></textarea>

        <input
          type="submit"
          id="submit"
          onClick={handleSubmit}
          disabled={state.resp != ""}
        />
      </form>
      {state.resp.length > 0 ? <p>{state.resp}</p> : ""}
    </div>
  );
}

export default ContactForm;
