import Box from '@mui/material/Box';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AppRoutes from './routes'

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header title="DevOn - Day care system " />
      <Sidebar />
      <Box component="main"
        sx={{
          flexGrow: 1, bgcolor: 'background.default', p: 3,
          marginTop: `60px`
        }}
      >
        <AppRoutes />
      </Box>
    </Box>
  )
}

export default App
