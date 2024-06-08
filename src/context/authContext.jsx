import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

// Initial state values
const initialState = {
  isAuthenticated: false,
  currentUser: null,
  token: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "token/retrieved":
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("token", action.payload);

      return { ...state, token: action.payload, isAuthenticated: true };

    case "userID":
      localStorage.setItem("currentUser", action.payload);

      return { ...state, currentUser: action.payload };

    case "logout":
      return { ...state, initialState };

    default:
      throw new Error("Unknown Action");
  }
}

// Provider
export const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isAuthenticated, token } = state;
  // const { setToken } = useToken();

  const authURL =
    "https://[url]/auth/api/v1/auth";

  // SIGN-UP 
  async function signupHandler(first, last, email, password) {
    try {
      const response = await fetch(`${authURL}/register`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          firstName: first,
          lastName: last,
          password: password,
        }),
      });
      // GETTING RESPONSE STATUS
      // console.log(response.status);

      const result = response;
      return result;
    } catch (error) {
      console.error(`${error} X-X`);
    }
  }


  // LOGIN
  async function loginHandler(email, password) {
    try {
      const response = await fetch(`${authURL}/login`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      // GETTING RESPONSE STATUS
      // console.log(response.status);
      const dataObj = await response.json();
      dispatch({ type: "token/retrieved", payload: dataObj.accessToken });
      dispatch({ type: "userID", payload: dataObj.userId });

      return response;
    } catch (error) {
      console.error(`${error} X-X`);
    }
  }

  // RESET EMAIL
  async function resetEmail(email) {
    try {
      const response = await fetch(`${authURL}/forgotpassword`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      const data = response;
      return data;
    } catch (error) {
      console.error(`${error} X-X`);
    }
  }

  // NEW PASSWORD
  async function newPassword(password) {
    let details = localStorage.getItem("userToken");
    let user = JSON.parse(details);

    console.log(user);

    try {
      const response = await fetch(`${authURL}/resetPassword`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          token: user.resetToken,
          password: password,
        }),
      });

      const data = response;
      return data;
    } catch (error) {
      console.error(`${error} X-X`);
    }
  }


  // LOGOUT
  function logOut() {
    dispatch({ type: "logout" });
    localStorage.clear();
  }

  // GET USER INFO
  async function getUser() {
    const tokenStored = localStorage.getItem("token");

    const response = await fetch(`${authURL}/CurrentUser`, {
      method: "GET",
      // withCredentials: true,
      // credentials: "include",
      // credentials: "same-origin",
      // mode: "cors",
      headers: {
        Authorization: `Bearer ${tokenStored}`,
      },
    });

    // if (!response.ok) {
    //   throw new Error(`${data.message} ${response.status} ` || "HTTP error");
    // }

    const data = await response.json();
    // console.log(data);

    return data.data;
  }

  // UPDATE USER INFO
  async function updateUser(firstName, lastName, dob, email, gender, img) {
    // const userId = "c8f399f3-5bc5-46e4-a918-acf911154a38";
    const userStored = localStorage.getItem("currentUser");

    const formData = new FormData();
    formData.append("FirstName", firstName);
    formData.append("LastName", lastName);
    formData.append("Email", email);
    formData.append("Gender", gender);
    formData.append("ProfileImage", img);

    try {
      const response = await fetch(`${authURL}/update-profile/${userStored}`, {
        method: "PUT",
        body: formData,
      });

      const dataObj = await response.json();

      return dataObj;
    } catch (error) {
      console.error(`${error} X-X`);
    }
  }

  // ----------------------------
  const contextValue = {
    signupHandler,
    loginHandler,
    resetEmail,
    newPassword,
    logOut,
    getUser,
    updateUser,
    isAuthenticated,
    // currentUser,
    token,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

// CUSTOM HOOK
const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthContextProvider");
  }

  return context;
};

export default useAuth;


