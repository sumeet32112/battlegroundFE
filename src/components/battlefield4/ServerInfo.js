import { useEffect, useState } from 'react';
import './GameSettings.css';
import { Box, Button, Typography } from '@mui/material';

const ServerInfo = () => {
    const [infoData, setInfoData] = useState({});
    const [isLoadinginfo, setIsLoadinginfo] = useState(true);
    const [error, setError] = useState(null);

    const mapRotation = [
        {
            "id": 1,
            "name": "Conquest Large Dawnbreaker",
            "displayName": "Dawnbreaker",
            "gameMode": "Conquest Large",
            "image": "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png"
        },
        {
            "id": 2,
            "name": "Conquest Large Propaganda",
            "displayName": "Propaganda",
            "gameMode": "Conquest Large",
            "image": "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png"
        },
        {
            "id": 3,
            "name": "Conquest Large Operation Locker",
            "displayName": "Operation Locker",
            "gameMode": "Conquest Large",
            "image": "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d9b48792dbe261e07_browser__SI-next-image%20-%2004.png"
        },
        {
            "id": 4,
            "name": "Conquest Large Lancang Dam",
            "displayName": "Lancang Dam",
            "gameMode": "Conquest Large",
            "image": "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d8123214d0747f2a1_browser__SI-next-image%20-%2005.png"
        },
        {
            "id": 5,
            "name": "Conquest Large Siege Of Shanghai",
            "displayName": "Siege Of Shanghai",
            "gameMode": "Conquest Large",
            "image": "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076cab09f17a68176928_browser__SI-next-image%20-%2001.png"
        },
        {
            "id": 6,
            "name": "Conquest Large Golmud Railway",
            "displayName": "Golmud Railway",
            "gameMode": "Conquest Large",
            "image": "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d00244d9e5298944f_browser__SI-next-image%20-%2003.png"
        },
        {
            "id": 2,
            "name": "Conquest Large Propaganda",
            "displayName": "Propaganda",
            "gameMode": "Conquest Large",
            "image": "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png"
        },
        {
            "id": 7,
            "name": "Conquest Large Siege Of Shanghai",
            "displayName": "Siege Of Shanghai",
            "gameMode": "Conquest Large",
            "image": "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076cab09f17a68176928_browser__SI-next-image%20-%2001.png"
        }
    ]


    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoadinginfo(true);
                const res = await fetch('/api/server-info');
                if (!res.ok) throw new Error('Network response was not ok');
                const data = await res.json();
                setInfoData(data);
            } catch (err) {
                console.error('API fetch error:', err);
                setError(err.message);
            } finally {
                setIsLoadinginfo(false);
            }
        };
        fetchData();
    }, []);

    return (
        <Box className="container">
            <Box >
                <Typography variant="body2" fontWeight="medium" display='flex' >
                    <img className='mx-1' src='https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab18f590879292f1d4be4_battlepacks__L-arrow.svg' alt='' height={10} width={10}></img>
                    <span className="mx-2 hover-bright">MULTIPLAYER</span>
                    <span className="mx-1">/</span>
                    <span className="mx-2 hover-bright">SERVER BROWSER</span>
                    <span >/</span>
                </Typography>
                <Typography variant="h4" fontWeight="bold">SERVER INFO</Typography>
            </Box>

            <Box mt={10} className="split-container">
                <Box className="left-panel">


                    <Typography variant="h5" className='server-name'>! RC3-BASEMAPS</Typography>
                    <Typography variant="subtitle2" className="mt-2 text-sm custom-text-gray" display='flex'>
                        <img src='https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab30e95dc4c011f935453_america-flag.svg' alt='flag'></img>
                        <span className="mx-2">CONQUEST LARGE</span>
                        <span className='mx-1'> - </span>
                        <span className='mx-1'>LANCANG DAM</span>
                        <span className='mx-1'> - </span>
                        <span className='mx-1'>CUSTOM</span>
                        <span className='mx-1'> - </span>
                        <span className='mx-1'>60 HZ</span>
                    </Typography>
                    <Typography variant="body2" className="mt-1 text-sm custom-text-gray">
                        Server protected by The K-50 AntiCheat. Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord
                    </Typography>

                    <Box className="server-buttons mt-4">
                        <Button className='options-button arial-font' color="inherit">JOIN</Button>
                        <Button className='options-button arial-font' color="inherit">SPECTATE</Button>
                        <Button className='options-button arial-font' color="inherit">JOIN AS COMMANDER</Button>
                        <Button className='options-button arial-font' color="inherit">
                            ⭐ 13672
                        </Button>
                    </Box>
                    {!isLoadinginfo ?
                        <>
                            {/* Info Blocks */}
                            <Box className="server-current-stats arial-font grid grid-cols-3">
                                <Box>
                                    <Typography fontWeight="bold" className='text-gray-300'>PLAYERS</Typography>
                                    <Typography className="text-xl">{infoData?.players?.current}/{infoData?.players?.max}</Typography>
                                </Box>
                                <Box>
                                    <Typography fontWeight="bold" className='text-gray-300'>PING</Typography>
                                    <Typography className="text-xl">{infoData?.ping}ms</Typography>
                                </Box>
                                <Box>
                                    <Typography fontWeight="bold" className='text-gray-300'>TICKRATE</Typography>
                                    <Typography className="text-xl mt-1">{infoData?.tickrate} Hz</Typography>
                                </Box>
                            </Box>

                            <Box className="server-settings">
                                <Box className="child-box">
                                    <Typography className="headings">SETTINGS</Typography>
                                    {Object.entries(infoData?.settings || {}).map(([key, value]) => (
                                        <>
                                            <Typography key={key} className="items arial-font text-gray-300">
                                                <div>{key.toUpperCase()}</div> <div className='ml-2'>{typeof value === 'boolean' ? (value ? "ON" : "OFF") : String(value).toUpperCase()}</div>
                                            </Typography>
                                            <hr className='border-t border-gray-600'></hr>
                                        </>
                                    ))}
                                </Box>

                                <Box className="child-box">
                                    <Typography className="headings">ADVANCED</Typography>
                                    {Object.entries(infoData?.advanced || {}).map(([key, value]) => (
                                        <>
                                            <Typography key={key} className="items arial-font text-gray-300">
                                                <div>{key.toUpperCase()}</div> <div className='ml-2'>{typeof value === 'boolean' ? (value ? "ON" : "OFF") : String(value).toUpperCase()}</div>
                                            </Typography>
                                            <hr className='border-t border-gray-600'></hr>
                                        </>
                                    ))}
                                </Box>

                                <Box className="child-box">
                                    <Typography className="headings">RULES</Typography>
                                    {Object.entries(infoData?.rules || {}).map(([key, value]) => (
                                        <>
                                            <Typography key={key} className="items arial-font text-gray-300">
                                                <div>{key.toUpperCase()}</div> <div className='ml-2'>{typeof value === 'boolean' ? (value ? "ON" : "OFF") : String(value).toUpperCase()}</div>
                                            </Typography>
                                            <hr className='border-t border-gray-600'></hr>
                                        </>
                                    ))}
                                </Box>
                            </Box>
                        </>
                        : <Box>Loading...</Box>
                    }

                    <Box className="mt-10">
                        <Typography fontWeight="bold" className="mb-2">MAP ROTATION</Typography>
                        <Box className="grid grid-cols-4 gap-4 mx-2">
                            {(mapRotation).map((map, i) => (
                                <Box key={i} className="server-map" fontWeight="bold">
                                    <img src={map?.image} alt="" />
                                    <Box className="map-text">
                                        <div className='mx-2 mt-1'>{map?.gameMode}</div>
                                        <div className='mx-2 mb-1'>{map?.displayName}</div>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
                <Box className="right-panel"></Box>
            </Box>
        </Box>
    );
}

export default ServerInfo;
