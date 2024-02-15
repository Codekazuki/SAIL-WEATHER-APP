import { Button, Card, Typography } from "@mui/material";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Typography>This is Sail weather app</Typography>
      <Button variant='contained'>hello</Button>
      <Button variant='contained'> Fetch Weather </Button>
      <Card sx={{ height: 285 }}>
        <Typography sx={{ height: 145, backgroundColor: "red" }}>
          This is Lagos d
        </Typography>
        <Typography sx={{ color: "green" }}>
          This is Sail weather app
        </Typography>
        <AccessibilityIcon />
      </Card>
    </div>
  );
}

export default App;
