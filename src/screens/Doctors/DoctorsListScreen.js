import { baseUrl } from "../../../apiUrl";
import DoctorsGrid from "../../components/doctorsList/DoctorsGrid";
import React, { useEffect, useState } from "react";

export const DoctorsListScreen = () => {
  const [doctors, setDoctors] = useState();

  useEffect(() => {
    (async function () {
      const response = await fetch(`http://${baseUrl()}/api/doctors`);
      const res = await response.json();
      setDoctors(res);
    })();
  }, []);

  return (
    <>
      <DoctorsGrid doctors={doctors} />
    </>
  );
};
