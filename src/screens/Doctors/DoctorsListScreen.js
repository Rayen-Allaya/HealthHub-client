import { useRoute } from "@react-navigation/native";
import { baseUrl } from "../../../apiUrl";
import DoctorsGrid from "../../components/doctorsList/DoctorsGrid";
import React, { useEffect, useState } from "react";

export const DoctorsListScreen = () => {
  const [doctors, setDoctors] = useState();
  const route = useRoute();
  const params = route.params;
  const speciality = params && params.speciality ? params.speciality : "";
  const governorate = params && params.governorate ? params.governorate : "";
  const name = params && params.name ? params.name : "";

  useEffect(() => {
    (async function () {
      const response = await fetch(
        `http://${baseUrl()}/api/doctors?name=${name}&governorate=${governorate}&speciality=${speciality}`
      );

      const res = await response.json();
      setDoctors(res);
    })();
  }, [name, governorate, speciality]);

  return (
    <>
      <DoctorsGrid doctors={doctors} />
    </>
  );
};
