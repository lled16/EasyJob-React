import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import '../LoadingScreen/LoadingScreen.Module.css'

export default function LoadingScreen(){
    return (
        <Box sx={{ display: 'flex'}} className='loading'>
        <CircularProgress />
      </Box>
    )
}