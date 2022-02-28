import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { Dispatch, useCallback, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setPageNumber as setPageNumber, updateExpertise } from "../Store/actionCreators";

function Expertise() {
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(setPageNumber(2));
  });

  const setExpertiseList = useCallback((expertiseList: string[]) => dispatch(updateExpertise(expertiseList)), [dispatch]);

  const name: string = useSelector((state: AppState) => state.user.name, shallowEqual);

  const expertiseList = useSelector((state: AppState) => state.user.expertise, shallowEqual);

  const handleChange = (excp: string) => {
    if (expertiseList.includes(excp)) {
      setExpertiseList(expertiseList.filter((x) => x !== excp));
    } else {
      setExpertiseList([...expertiseList, excp]);
    }
  };

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
      <h1>Hi {name}!</h1>
      <h3>What are your expertise?</h3>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <FormControlLabel
          control={<Checkbox />}
          label="Lifestyle"
          checked={expertiseList.includes("Lifestyle")}
          onChange={() => handleChange("Lifestyle")}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Beauty"
          checked={expertiseList.includes("Beauty")}
          onChange={() => handleChange("Beauty")}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Food"
          checked={expertiseList.includes("Food")}
          onChange={() => handleChange("Food")}
        />
      </Box>
    </Box>
  );
}

export default Expertise;
