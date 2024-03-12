import React, { useState } from "react";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Data
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// chart components
import BasicLineChart from "layouts/sensors/components/temperature";
import SensorCard from "./components/sensorcard";
import Icon from "@mui/material/Icon";
import { Button, IconButton } from "@mui/material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import BasicModal from "./components/modal";

function Sensors() {
  const { sales, tasks } = reportsLineChartData;
  const [sensors, setSensors] = useState([
    {
      color: "success",
      title: "Sensor 1",
      description: "Status: Running",
      date: "updated 4 min ago",
      placement: "Home",
    },
  ]);

  const handleAddSensor = () => {
    setSensors([
      ...sensors,
      {
        color: "warning",
        title: "New Sensor",
        description: "Status: Pending",
        date: "Just Added",
        placement: "Not Assigned",
      },
    ]);
  };
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={4.5}>
        <Grid container spacing={3}>
          {/* <Grid item xs={12} md={6} lg={4}> ... </Grid> */}
          {sensors.map((sensor) => (
            <Grid item xs={12} md={6} lg={4} key={sensor.title}>
              <MDBox mb={3}>
                <SensorCard {...sensor} />
              </MDBox>
            </Grid>
          ))}
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={6}>
              <IconButton size="large" onClick={handleOpen}>
                <AddCircleRoundedIcon color="blue" />
              </IconButton>
            </MDBox>
          </Grid>
        </Grid>
        <BasicModal open={open} onClose={handleClose} />
      </MDBox>
    </DashboardLayout>
  );
}

export default Sensors;
