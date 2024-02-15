import { Button, Card, Typography } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Typography>This is Sail weather app</Typography>
      <Button variant='contained'>hello</Button>
      <Button variant='contained'> Fetch Weather </Button>
      <Card>
        <Typography sx={{ height: 145, backgroundColor: "red" }}>
          This is Lagos
        </Typography>
      </Card>
    </div>
  );
}

export default App;
