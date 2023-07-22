"use client";

import { SearchRounded } from "@mui/icons-material";
import { Button, Grid, Modal } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CitySelector } from "@/components/city-selector/city-selector";
import { TCity } from "@/constants/city-list";


export default function Home() {
  const router = useRouter();
  const [cityModalActivity, setCityModalActivity] = useState<boolean>(false);

  const handleModalOpen = () => {
    setCityModalActivity(true);
  };

  const handleModalClose = () => {
    setCityModalActivity(false);
  };

  const handleCitySelect = (city: TCity) => {
    // todo bounds as circle area
    router.push(`/cars/search?address=${city.name}&bounds=`);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Button variant="contained" size={"large"} onClick={handleModalOpen}>
          <SearchRounded />
          <span>Начать поиск автомобилей</span>
        </Button>
      </Grid>

      <Modal open={cityModalActivity} onClose={handleModalClose}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh" }}
        >
          <CitySelector onSelect={handleCitySelect} />
        </Grid>
      </Modal>
    </Grid>
  );
}