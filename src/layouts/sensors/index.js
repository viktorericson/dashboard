import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
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

function Sensors() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={4.5}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={3}>
              <BasicLineChart
                color="blue"
                title="Daily Temperature"
                description={
                  <>
                    <strong>+2°</strong> increase from yesterday.
                  </>
                }
                date="updated 4 min ago"
                chart={sales}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={3}>
              <SensorCard
                color="success"
                title="Sensor 1"
                description={
                  <>
                    <strong>Status: </strong> Running
                  </>
                }
                date="updated 4 min ago"
                placement="Home"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MDBox mb={6}>
              <IconButton size="large">
                <AddCircleRoundedIcon color="blue" />
              </IconButton>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Sensors;
