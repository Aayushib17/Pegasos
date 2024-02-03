import React from 'react'
import { useContext } from 'react'
import {Box, IconButton, useTheme} from "@mui/material"
import { ColorModeContext, tokens } from '../../theme'
import { InputBase } from '@mui/material'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
function Topbar() {
  const theme=useTheme();
  const colors=tokens(theme.palette.mode);
  const colorMode=useContext(ColorModeContext)
  return (
  <Box display="flex" justifyContent="space-around" p={2}>
{/* Searchbar */}
<Box display="flex" 
backgroundColor={colors.primary[400]}
borderRadius="3px">
<InputBase sx={{ ml: 2 , flex: 1 }} placeholder="Search"/>
<IconButton type="button" sx={{p:1}}>
    <SearchOutlinedIcon />
  </IconButton>
</Box>
{/* Icons */}
<Box display="flex" >
<IconButton onClick={colorMode.toggleColorMode}>
  {theme.palette.mode==='dark'?(
   <LightModeOutlinedIcon/> 
  ):(<DarkModeOutlinedIcon />)}
    
    </IconButton>
  <IconButton>
<NotificationsNoneOutlinedIcon/>
  </IconButton>
  <IconButton>
    <PersonOutlineOutlinedIcon/>
    </IconButton> 
    <IconButton>
<SettingsOutlinedIcon/>
  </IconButton>
</Box>
  </Box>
 
  )
}

export default Topbar;
