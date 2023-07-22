import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const StyledCitySelector = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#ffffff",
  padding: 30,
  borderRadius: 5,
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const StyledCities = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gap: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
}));

export const StyledType = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    marginRight: theme.spacing(2),
    marginBottom: 0,
  },
}));

export const StyledTypeWord = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

export const StyledTypeList = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const StyledTypeItem = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  justifyContent: "flex-start",
}));