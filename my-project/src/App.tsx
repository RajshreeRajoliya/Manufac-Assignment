import { Container, Title, Paper, Divider } from "@mantine/core";
import DataTable from "./components/DataTable";
import BarChart from "./components/BarChart";

function App() {
  return (
    <Container size="lg" mt="md">
      
      <Title align="center" order={1} mb="lg">
        Indian Agriculture Data Visualization
      </Title>

    
      <Paper shadow="md" radius="md" p="lg" withBorder>
        <Title order={2} mb="md">Crop Production Table</Title>
        <Divider mb="md" />
        <DataTable />
      </Paper>

     
      <Paper shadow="md" radius="md" p="lg" withBorder mt="lg">
        <Title order={2} mb="md">Average Crop Production</Title>
        <Divider mb="md" />
        <BarChart />
      </Paper>
    </Container>
  );
}

export default App;
