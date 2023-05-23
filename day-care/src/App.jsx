import Box from '@mui/material/Box';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AppRoutes from './routes'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header title="DevOn - Day care system " />  {/* Application header */}
      <Sidebar /> {/* Application side menu has loaded */}
      <Box component="main"
        sx={{
          flexGrow: 1, bgcolor: 'background.default', p: 3,
          marginTop: `60px`
        }}
      >
        <AppRoutes /> {/* All the routes and pages were render */}
        <ToastContainer /> {/* This is for global toast message handler */}
      </Box>
    </Box>
  )
}

export default App
