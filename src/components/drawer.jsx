import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import { useState } from "react"

export default function MyDrawer() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    }

    const DrawerList = (
        <Box sx={{width: 300}} role="presentation" onClick={toggleDrawer(false)}>
            <p>The content in the drawer</p>
        </Box>
    );

    return (
        <div>
            <button onClick={toggleDrawer(true)}> Open Drawer</button>
            <MuiDrawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </MuiDrawer>
        </div>
    )
}