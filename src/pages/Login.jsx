import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "./../context/authContext";

// ================================================

// ===================================================
function Login() {

  const navigate = useNavigate();
  const { loginHandler } = useAuth();

  //
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //
  const [showPassword, setShowPassword] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorRegex, setErrorRegex] = useState(false);
  const [errorAlert, setErrorAlert] = useState("");

  const checkFields = email !== "" && password !== "";

  useEffect(() => {
    setErrorRegex("");
  }, [email, password]);

  const submitHandler = async (e) => {
    e.preventDefault();

    // REGEX TESTS
    const cEmail = EMAIL_REGEX.test(email);
    const cPassword = PWD_REGEX.test(password);

    if (!cPassword || !cEmail) {
      setErrorRegex(true);
      return;
    } else {
      setErrorRegex(false);
    }

    try {
      setLoading(true);

      const response = await loginHandler(email, password);

      // GETTING RESPONSE
      if (!response.ok) {
        setEmail("");
        setPassword("");

        setErrorAlert("An error occur...");

        throw new Error("An error occur...");
      }

      const data = await response.json();

      if (data?.success) {
        setEmail("");
        setPassword("");
        // localStorage.setItem("userID", data.userId);
        // setToken(data.accessToken);

        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex item-center justify-center text-[40px]">Login</div>
    // <ContentBox color={colors.surface[500]}>
    //   <GridBox direction="row" spacing={4} color={colors.surface[400]}>
    //     <LogoBox />

    //     <FormBox justifyContent="center" spacing={3} color={colors.text[88]}>
    //       <Box>
    //         <TitleBox color={colors.text[88]}>Log into your account</TitleBox>
    //         <Box>
    //           <TitleTag component="span" color={colors.greenAccent[500]}>
    //             {" "}
    //             Don't have an account?{" "}
    //             <Link
    //               to="../signup"
    //               style={{ fontSize: "0.8rem", textDecoration: "none" }}
    //             >
    //               {" "}
    //               <Typography
    //                 sx={{
    //                   display: "inline",
    //                   fontSize: "0.8rem",
    //                   color: theme.palette.info.main,
    //                 }}
    //               >
    //                 Sign Up
    //               </Typography>
    //             </Link>{" "}
    //             instead{" "}
    //           </TitleTag>
    //         </Box>
    //       </Box>

    //       <form onSubmit={submitHandler}>
    //         <Stack spacing={1.7}>
    //           {/* =================== EMAIL================== */}
    //           <InputContainer error={error} variant="standard">
    //             <LabelBox htmlFor="email" color={colors.text[48]}>
    //               Email
    //             </LabelBox>

    //             <Tooltip
    //               TransitionComponent={Fade}
    //               TransitionProps={{ timeout: 500 }}
    //               title={
    //                 <>
    //                   {errorRegex && (
    //                     <Typography
    //                       sx={{
    //                         fontSize: "0.7rem",
    //                         color: theme.palette.secondary.main,
    //                       }}
    //                     >
    //                       Invalid entry
    //                     </Typography>
    //                   )}
    //                   <Typography sx={{ fontSize: "0.7rem" }}>
    //                     <InfoRoundedIcon
    //                       color="info"
    //                       sx={{ fontSize: "18px" }}
    //                     />{" "}
    //                     example@gmail.com
    //                   </Typography>
    //                 </>
    //               }
    //               arrow
    //             >
    //               <InputBox
    //                 id="email"
    //                 size="small"
    //                 type="email"
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //                 required
    //                 error={errorRegex}
    //                 aria-describedby="component-error-text"
    //               />
    //             </Tooltip>
    //           </InputContainer>

    //           {/* =================== PASSWORD================== */}
    //           <InputContainer variant="standard" sx={{ width: "100%" }}>
    //             <LabelBox htmlFor="password" color={colors.text[48]}>
    //               Password
    //             </LabelBox>
    //             <Tooltip
    //               TransitionComponent={Fade}
    //               TransitionProps={{ timeout: 500 }}
    //               title={
    //                 <>
    //                   {errorRegex && (
    //                     <Typography
    //                       sx={{
    //                         fontSize: "0.7rem",
    //                         color: theme.palette.secondary.main,
    //                       }}
    //                     >
    //                       Invalid entry
    //                     </Typography>
    //                   )}
    //                   <Typography sx={{ fontSize: "0.7rem" }}>
    //                     <InfoRoundedIcon
    //                       color="info"
    //                       sx={{ fontSize: "18px" }}
    //                     />{" "}
    //                     Must be atleast 8 characters.
    //                     <br />
    //                     Must include uppercase and lowercase letters, a number
    //                     and a special character.
    //                   </Typography>
    //                 </>
    //               }
    //               arrow
    //             >
    //               <InputBox
    //                 id="Password"
    //                 size="small"
    //                 type={showPassword ? "text" : "password"}
    //                 value={password}
    //                 onChange={(e) => setPassword(e.target.value)}
    //                 required
    //                 error={errorRegex}
    //                 aria-describedby="component-error-text"
    //                 endAdornment={
    //                   <InputAdornment position="end">
    //                     <IconButton
    //                       aria-label="toggle password visibility"
    //                       onClick={handleClickShowPassword}
    //                       onMouseDown={handleMouseDownPassword}
    //                       // edge="end"
    //                     >
    //                       {showPassword ? (
    //                         <Visibility sx={{ fontSize: "14px" }} />
    //                       ) : (
    //                         <VisibilityOff sx={{ fontSize: "14px" }} />
    //                       )}
    //                     </IconButton>
    //                   </InputAdornment>
    //                 }
    //               />
    //             </Tooltip>

    //             <ForgotBox>
    //               <Link to="../passreset" className="link-color">
    //                 Forgot Password?
    //               </Link>
    //             </ForgotBox>
    //             <FormHelperText
    //               id="component-error-text"
    //               sx={{ display: error ? "block" : "none" }}
    //             >
    //               Incorrect entry.
    //             </FormHelperText>
    //           </InputContainer>

    //           {/* =================SUBMIT========== */}
    //           <div>
    //             <ButtonBox
    //               type="submit"
    //               variant="contained"
    //               disabled={!checkFields}
    //             >
    //               Log in
    //             </ButtonBox>

    //             {loading ? <LinearProgress color="success" /> : ""}

    //             {errorAlert && (
    //               <Stack direction="row" alignItems="center" spacing={1} mt={1}>
    //                 <ErrorOutlineRoundedIcon
    //                   color="error"
    //                   sx={{ fontSize: "18px" }}
    //                 />
    //                 <Typography sx={{ fontSize: "0.7rem" }}>
    //                   {errorAlert}
    //                 </Typography>
    //               </Stack>
    //             )}
    //           </div>
    //         </Stack>
    //       </form>

    //       {/* ==================== OTHERS================ */}
    //       <Stack alignItems="center" spacing={1}>
    //         <StyledText>or continue using</StyledText>
    //         <AuthBox />
    //       </Stack>
    //     </FormBox>
    //   </GridBox>
    // </ContentBox>
  );
}

export default Login;
