import { useState } from 'react'
import ServerInfo from '../battlefield4/ServerInfo';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';
import { Box, Button, Typography, Fade, Backdrop, Modal } from '@mui/material';
import { BattlefieldV } from '../battlefieldV/BattlefieldV';
import { Battlefield1 } from '../battlefield1/Battlefield1';
import { BattlefieldHardline } from '../battlefieldHardline/BattlefieldHardline';
import { Career } from '../career/Career';
import { News } from '../news/News';
import { Watch } from '../watch/Watch';
import { Help } from './Help';

export const Main = () => {

    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [backgroundUrl, setBackgroundUrl] = useState("https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6038f70ef0141a2f22d50f58_menu__background.jpg");
    const [showQuitModal, setShowQuitModal] = useState(false);
    const renderPlayerComponent = () => {
        if (!selectedPlayer) return <ServerInfo />;

        switch (selectedPlayer.name) {
            case 'Battlefield V':
                return <BattlefieldV />;
            case 'Battlefield 1':
                return <Battlefield1 />;
            case 'Battlefield 4':
                return <ServerInfo />;
            case 'Battlefield Hardline':
                return <BattlefieldHardline />;
            case 'Career':
                return <Career />;
            case 'Watch':
                return <Watch />;
            case 'News':
                return <News />;
            case 'Help':
                return <Help />;
        }
    };

    return (
        <Box className="h-screen w-full flex text-white"
            sx={{
                backgroundImage: `linear-gradient(rgba(16, 16, 16, 0.6), rgba(16, 16, 16, 0.6)), url("${backgroundUrl}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
            }}
        >
            <LeftSideBar
                onPlayerSelect={(player) => {
                    setSelectedPlayer(player);
                    setBackgroundUrl(player.bgUrl);
                }}
                onQuitClick={() => setShowQuitModal(true)}
            />
            {renderPlayerComponent()}
            <RightSideBar />

            <Modal
                open={showQuitModal}
                onClose={() => { }}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                        sx: {
                            background: 'radial-gradient(circle, rgba(0,0,0,0.5), rgba(0, 0, 0, 0.5))',
                            backdropFilter: 'blur(5px)',
                        },
                    },
                }}
            >
                <Fade in={showQuitModal}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            color: 'white',
                            p: 4,
                            minWidth: 300,
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            QUIT
                        </Typography>
                        <Typography variant='caption' sx={{ my: 2 }}>
                            Do you really want to quit?
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 2 }}>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: 'white',
                                    borderColor: '#333',
                                    borderRadius: 0,
                                    '&:hover': {
                                        backgroundColor: 'white',
                                        color: '#333',
                                        cursor: 'inherit'
                                    },
                                }}
                                onClick={() => {
                                    setShowQuitModal(false);
                                }}
                            >
                                YES
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: 'white',
                                    borderColor: '#333',
                                    borderRadius: 0,
                                    '&:hover': {
                                        backgroundColor: 'white',
                                        color: '#333',
                                        cursor: 'inherit'
                                    },
                                }}
                                onClick={() => setShowQuitModal(false)}
                            >
                                NO
                            </Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </Box >
    )
}