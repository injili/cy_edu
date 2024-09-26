import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import NotificationsIcon from '@mui/icons-material/Notifications';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY
const API_URL = import.meta.env.VITE_STRAPI_API_URL

export default function Navigation() {
    const { logout } = useAuth0();
    const [notification, setNotification] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        axios.get(`${API_URL}/notifications`, {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            }
        })
        .then(response => {
            const e = response.data.data.map(n => ({
                id: n.id,
                content: n.attributes.Content,
            }))
            setNotification(e)
        })
        .catch(error => {
            console.error("There was an error", error)
        })
},[])

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    }

    const Notifications = (
        <Box sx={{width: 500}} role="presentation">
            {notification.length > 0 ? (
                <div>
                    <button className="absolute top-2 right-2 m-2 p-2 rounded-lg text-forthprimary hover:bg-forthprimary hover:text-white" onClick={toggleDrawer(false)}><CloseIcon/></button>
                    <div className="flex flex-col items-center justify-center h-screen mx-4">
                        <h1 className="font-alata text-xl font-semibold my-4">NOTIFICATIONS</h1>
                        {notification.map((anotification, index) => (
                            <div key={index} className="p-4 border border-secondprimary m-1 rounded-lg">
                                {anotification.content}
                            </div>
                        ))}
                    </div>
                </div>
            ):(
                <p>There are no notifications</p>
            )}
        </Box>
    );

    return (
        <div>
            <div className="flex justify-center">
                <div className="w-[900px]">
                    <ul className="m-4 p-4 rounded-lg bg-secondprimary flex font-black gap-4 font-alata justify-center items-center text-firstprimary">
                        <Link to="/"><li className="hover:text-thirdprimary">DASHBOARD</li></Link>
                        <Link to="/training"><li className="hover:text-thirdprimary">TRAINING</li></Link>
                        <Link to="/interactive"><li className="hover:text-thirdprimary">VIDEOS AND CASE STUDIES</li></Link>
                        <Link to="/visualization"><li className="hover:text-thirdprimary">VISUALIZATION</li></Link>
                        <li>
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Log Out
                            </button>
                        </li>
                        <li><button className="hover:bg-white p-2 rounded-lg" onClick={toggleDrawer(true)}><NotificationsIcon/></button></li>
                    </ul>
                </div>
            </div>
            <MuiDrawer
                open={open}
                anchor="right"
                onClose={toggleDrawer(false)}
            >
                {Notifications}
            </MuiDrawer>
        </div>
        
    )
}