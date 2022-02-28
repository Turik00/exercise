import { Box, TextField } from "@mui/material";
import { useCallback, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { addName, setPageNumber } from "../Store/actionCreators";

function Welcome() {


  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    dispatch(setPageNumber(1))});

  const name: string = useSelector(
    (state: AppState) => state.user.name,
    shallowEqual
  )


  const setName = useCallback(
    (name: string) => dispatch(addName(name)),
    [dispatch]
  )

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "33%",
      }}
    >
      <h1>Welcome!</h1>
      <h3>How should we call you?</h3>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        autoFocus
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

    </Box>
  );
}

export default Welcome;


