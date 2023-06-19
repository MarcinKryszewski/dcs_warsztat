import { useContext, useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import useTheme from "@mui/material/styles/useTheme";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import { tokens } from "@/assets/themes/theme";
import { HeaderTitleContext } from "@/context/HeaderTitleContext";

export default function PartsStatusAdd() {
  const { titleText, setTitleText } = useContext(HeaderTitleContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const navigate = useNavigate();
  const { state } = useLocation();

  const taskId = useParams().id;
  const statuses = ["SPECYFIKOWANIE", "ZAMÓWIONE", "DOSTĘPNE"];
  const [partsStatus, setPartsStatus] = useState({
    status: "",
    comment: "",
  });

  useEffect(() => {
    setTitleText({
      title: "Status części",
      subtitle: "Edytuj status",
    });
  }, []);

  function AddPartsStatus() {
    console.log(partsStatus);
  }

  function PartStatusColor(status) {
    if (status == "SPECYFIKOWANIE") return theme.palette.info.main;
    if (status == "ZAMÓWIONE") return theme.palette.warning.main;
    if (status == "DOSTĘPNE") return theme.palette.success.main;
  }

  return (
    <Box ml={2} mt={4}>
      <Stack direction="column" spacing={3} width={"100%"} height={"100%"}>
        <Stack direction="row" spacing={3} width={"100%"} height={"100%"}>
          <Stack spacing={2} width={"30%"}>
            {statuses.map((StatusText) => (
              <Button
                onClick={() =>
                  setPartsStatus({ ...partsStatus, status: StatusText })
                }
              >
                <Box
                  key={StatusText}
                  width="90%"
                  p="5px"
                  display="flex"
                  justifyContent="center"
                  backgroundColor={() => PartStatusColor(StatusText)}
                  borderRadius="4px"
                  height={"100%"}
                  border={
                    partsStatus.status == StatusText ? "5px solid" : "0px solid"
                  }
                  borderColor={"white"}
                >
                  <Typography color={colors.grey[700]} sx={{ fontWeight: 600 }}>
                    {StatusText}
                  </Typography>
                </Box>
              </Button>
            ))}
          </Stack>
          <TextField
            label="OPIS"
            multiline
            minRows={8}
            height={"100%"}
            width={"100%"}
            sx={{
              width: "100%",
              height: "100%",
            }}
            value={partsStatus.comment}
            onChange={(event) =>
              setPartsStatus({ ...partsStatus, comment: event.target.value })
            }
            color="secondary"
          />
        </Stack>
        <Stack direction="row" spacing={5} justifyContent="center">
          <Button
            variant="contained"
            color="success"
            onClick={() => AddPartsStatus()}
            sx={{ boxShadow: `0 0 10px 1px ${colors.greenAccent[400]};` }}
          >
            <Typography>ZAPISZ</Typography>
          </Button>
          <Button
            variant="outlined"
            color="info"
            onClick={() => navigate(-1)}
            sx={{ boxShadow: `0 0 10px 1px ${colors.blueAccent[400]};` }}
          >
            <Typography>WYJDŹ</Typography>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
