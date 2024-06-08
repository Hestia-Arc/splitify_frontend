import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "./../context/authContext";
import { EMAIL_REGEX, PWD_REGEX } from "../utils/auth";

// ==========================================
function SignUp() {
  const { signupHandler } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // eslint-disable-next-line
  const [error, setError] = useState(false);
  const [errorRegex, setErrorRegex] = useState(false);
  const [errorAlert, setErrorAlert] = useState("");

  const checkIndividuals =
    firstName !== "" &&
    lastName !== "" &&
    email !== "" &&
    password !== "";

  const checkCorporates =
   
    email !== "" &&
    password !== "";

  const handleChange = (event) => {
    setAccountType(event.target.value);
  };

  useEffect(() => {
    setErrorRegex("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    // let dataError;

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

      if (accountType === "Individual") {
        response = await signupIndividualHandler(
          firstName,
          lastName,
          email,
          password,
          dob
        );
      } else {
        response = await signupBusinessHandler(
          businessName,
          email,
          password,
          doi
        );
      }

      // GETTING RESPONSE STATUS
      console.log(response);
      console.log(response?.status);

      if (response.status === 400) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setDob("");
        setDoi("");
        setPassword("");

        // dataError = response.json();

        throw new Error("An error occur");
      }

      if (response.status === 200) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setDob("");
        setDoi("");
        setPassword("");

        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      setErrorAlert(`An error occur.`);
    } finally {
      setLoading(false);
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex item-center justify-center text-[40px]">signup</div>
    // <ContentBox color={colors.surface[500]}>
    //   <GridBox
    //     direction="row"
    //     spacing={4}
    //     sx={{ height: "600px", minWidth: "680px" }}
    //     color={colors.surface[400]}
    //   >
    //     <LogoBox />

    //     <FormBox
    //       justifyContent="center"
    //       spacing={3}
    //       color={colors.text[88]}
    //       // sx={{ background: theme.palette.primary.main[700] }}
    //     >
    //       <Box>
    //         <TitleBox color={colors.text[88]}>Let's help you</TitleBox>
    //         <TitleTag color={colors.greenAccent[500]}>
    //           Sign up with ease
    //         </TitleTag>
    //       </Box>

    //       {/*===================FORM=============  */}
    //       <form onSubmit={handleSubmit}>
    //         <Stack spacing={1.4}>
    //           {/* =================== ACCOUNT TYPE================== */}
    //           <InputContainer error={error} variant="standard">
    //             <LabelBox htmlFor="account-type" color={colors.text[48]}>
    //               Account Type{" "}
    //             </LabelBox>

    //             <Select
    //               id="account-type"
    //               value={accountType}
    //               onChange={handleChange}
    //               inputProps={{
    //                 sx: {
    //                   background: "none !important",
    //                   // color: theme.palette.neutral.neutralBlack,
    //                 },
    //               }}
    //               sx={{
    //                 border: "1px solid ",
    //                 // borderColor: theme.palette.stroke.stroke100,
    //                 // background: "rgba(103, 160, 158, 0.16)",
    //                 borderBottom: "1px solid #0e625f",
    //                 borderRadius: "5px",
    //                 padding: "0px 10px !important",
    //                 height: "36px",
    //                 marginTop: "2px !important",
    //                 fontSize: "0.9rem",
    //               }}
    //             >
    //               <MenuItem value="Individual">Individual</MenuItem>
    //               <MenuItem value="Corporate">Corporate</MenuItem>
    //             </Select>
    //           </InputContainer>

    //           {/* =================== NAMES================== */}
    //           {accountType === "Individual" ? (
    //             // ------------ FIRST/LAST NAME
    //             <Stack direction="row" spacing={1.7}>
    //               <InputContainer error={error} variant="standard">
    //                 <LabelBox htmlFor="first-name" color={colors.text[48]}>
    //                   First Name
    //                 </LabelBox>
    //                 <InputBox
    //                   id="first-name"
    //                   size="small"
    //                   type="text"
    //                   value={firstName}
    //                   onChange={(e) => setFirstName(e.target.value)}
    //                   required
    //                   // placeholder="Placeholder"
    //                   // defaultValue="name"
    //                   aria-describedby="component-error-text"
    //                 />
    //                 <FormHelperText
    //                   id="component-error-text"
    //                   sx={{ display: error ? "block" : "none" }}
    //                 >
    //                   Incorrect entry.
    //                 </FormHelperText>
    //               </InputContainer>

    //               <InputContainer error={error} variant="standard">
    //                 <LabelBox htmlFor="last-name" color={colors.text[48]}>
    //                   Last Name
    //                 </LabelBox>
    //                 <InputBox
    //                   id="last-name"
    //                   size="small"
    //                   type="text"
    //                   value={lastName}
    //                   onChange={(e) => setLastName(e.target.value)}
    //                   required
    //                   // placeholder="Placeholder"
    //                   // defaultValue="name"
    //                   aria-describedby="component-error-text"
    //                 />
    //                 <FormHelperText
    //                   id="component-error-text"
    //                   sx={{ display: error ? "block" : "none" }}
    //                 >
    //                   Incorrect entry.
    //                 </FormHelperText>
    //               </InputContainer>
    //             </Stack>
    //           ) : (
    //             // ------BIZ NAME
    //             <InputContainer error={error} variant="standard">
    //               <LabelBox htmlFor="business-name" color={colors.text[48]}>
    //                 Business Name
    //               </LabelBox>
    //               <InputBox
    //                 id="business-name"
    //                 size="small"
    //                 type="text"
    //                 value={businessName}
    //                 onChange={(e) => setBusinessName(e.target.value)}
    //                 required
    //                 // placeholder="Placeholder"
    //                 // defaultValue="name"
    //                 aria-describedby="component-error-text"
    //               />
    //             </InputContainer>
    //           )}

             

    //           {/* =================== EMAIL================== */}
    //           <Box sx={{ width: "100%" }}>
    //             <InputContainer error={error} variant="standard">
    //               <LabelBox htmlFor="email" color={colors.text[48]}>
    //                 Email
    //               </LabelBox>

    //               <Tooltip
    //                 TransitionComponent={Fade}
    //                 TransitionProps={{ timeout: 500 }}
    //                 title={
    //                   <>
    //                     {errorRegex && (
    //                       <Typography
    //                         sx={{
    //                           fontSize: "0.7rem",
    //                           // color: theme.palette.secondary.main,
    //                         }}
    //                       >
    //                         Invalid entry
    //                       </Typography>
    //                     )}
    //                     <Typography sx={{ fontSize: "0.7rem" }}>
    //                       <InfoRoundedIcon
    //                         color="info"
    //                         sx={{ fontSize: "18px" }}
    //                       />{" "}
    //                       example@gmail.com
    //                     </Typography>
    //                   </>
    //                 }
    //                 arrow
    //               >
    //                 <InputBox
    //                   id="email"
    //                   size="small"
    //                   type="email"
    //                   value={email}
    //                   onChange={(e) => setEmail(e.target.value)}
    //                   error={errorRegex}
    //                   required
    //                   // placeholder="Placeholder"
    //                   // defaultValue="name"
    //                   aria-describedby="component-error-text"
    //                 />
    //               </Tooltip>
    //             </InputContainer>
    //           </Box>

    //           {/* =================== PASSWORD================== */}
    //           <Box>
    //             <InputContainer variant="standard">
    //               <LabelBox htmlFor="password" color={colors.text[48]}>
    //                 Password
    //               </LabelBox>
    //               <Tooltip
    //                 TransitionComponent={Fade}
    //                 TransitionProps={{ timeout: 500 }}
    //                 title={
    //                   <>
    //                     {errorRegex && (
    //                       <Typography
    //                         sx={{
    //                           fontSize: "0.7rem",
    //                           // color: theme.palette.secondary.main,
    //                         }}
    //                       >
    //                         Invalid entry
    //                       </Typography>
    //                     )}
    //                     <Typography sx={{ fontSize: "0.7rem" }}>
    //                       <InfoRoundedIcon
    //                         color="info"
    //                         sx={{ fontSize: "18px" }}
    //                       />{" "}
    //                       Must be atleast 8 characters.
    //                       <br />
    //                       Must include uppercase and lowercase letters, a number
    //                       and a special character.
    //                     </Typography>
    //                   </>
    //                 }
    //                 arrow
    //               >
    //                 <InputBox
    //                   id="Password"
    //                   size="small"
    //                   type={showPassword ? "text" : "password"}
    //                   value={password}
    //                   onChange={(e) => setPassword(e.target.value)}
    //                   // onFocus={() => set}
    //                   required
    //                   error={errorRegex}
    //                   aria-describedby="component-error-text"
    //                   endAdornment={
    //                     <InputAdornment position="end">
    //                       <IconButton
    //                         aria-label="toggle password visibility"
    //                         onClick={handleClickShowPassword}
    //                         onMouseDown={handleMouseDownPassword}
    //                         // edge="end"
    //                       >
    //                         {showPassword ? (
    //                           <Visibility sx={{ fontSize: "14px" }} />
    //                         ) : (
    //                           <VisibilityOff sx={{ fontSize: "14px" }} />
    //                         )}
    //                       </IconButton>
    //                     </InputAdornment>
    //                   }
    //                 />
    //               </Tooltip>
    //             </InputContainer>
    //           </Box>

    //           {/* =================SUBMIT========== */}
    //           <div>
    //             <ButtonBox
    //               variant="contained"
    //               type="submit"
    //               disabled={
    //                 accountType === "Individual"
    //                   ? !checkIndividuals
    //                   : !checkCorporates
    //               }
    //             >
    //               SIGN UP
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
    //         <Stack direction="row" spacing={0.5}>
    //           <StyledText>Already have an account?</StyledText>
    //           <Link to="../login" style={{ textDecoration: "none" }}>
    //             <Typography
    //               sx={{ fontSize: "0.8rem", color: theme.palette.info.main }}
    //             >
    //               Log In
    //             </Typography>
    //           </Link>
    //         </Stack>
    //       </Stack>
    //     </FormBox>
    //   </GridBox>
    // </ContentBox>
  );
}

export default SignUp;
