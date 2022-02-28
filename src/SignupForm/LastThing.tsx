import { Box, Button, TextField } from "@mui/material";
import { Dispatch, useCallback, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setPageNumber, updateBrands, updateExpertise } from "../Store/actionCreators";

function LastThing() {
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(setPageNumber(3));
  });

  const setBrandList = useCallback((BrandList: string[]) => dispatch(updateBrands(BrandList)), [dispatch]);

  const brandsList = useSelector((state: AppState) => state.user.brands, shallowEqual);

  const [brandName, setBrandName] = useState('');

  function addBrand() {
    if (brandName === '') {
      return;
    }
    setBrandList([...brandsList, brandName]);
  }


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
      <h1>One last thing</h1>
      <h3>Have you collaborated with brands in the past?</h3>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TextField
          margin="none"
          required
          fullWidth
          id="brandName"
          label="Enter Brand Name"
          name="brandName"
          autoFocus
          onChange={(e) => setBrandName(e.target.value)}
        />
        <Button variant="contained" onClick={() => addBrand()}>Add</Button>
      </Box>
      {brandsList.map((brand) => {
        return (
          <>
            <span>@{brand}</span>
          </>
        );
      })}
    </Box>
  );
}

export default LastThing;
