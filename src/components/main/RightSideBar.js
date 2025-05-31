import { useState } from 'react';
import { Drawer, List, ListItem, Typography, Box } from '@mui/material';

const RightSideBar = () => {
    const friends = [
        { name: 'MaryJane', status: 'Online', avatar: 'https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1585908791f051d4af4_home__friend-picture-MaryJane.png' },
        { name: '420', status: 'Offline', avatar: 'https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1583424fd3ddf23a848_home__friend-picture-420.png' },
    ];

    const statusSections = [
        {
            label: 'Online',
            icon: 'https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab159d334e32483dbbcbb_online.svg',
            color: 'lightgreen',
        },
        {
            label: 'Offline',
            icon: 'https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab15904900760dbfa7f70_offline.svg',
            color: 'gray',
        },
    ];

    const [open, setOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Drawer
            anchor="right"
            variant="permanent"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            sx={{
                flexShrink: 0,
                zIndex: 1300,
                '& .MuiDrawer-paper': {
                    width: '27vh',
                    boxSizing: 'border-box',
                    backgroundColor: open ? 'rgba(0, 0, 0, 0.6)' : 'transparent',
                    backdropFilter: 'blur(10px)',
                    transition: 'transform 0.3s ease',
                    transform: open ? 'translate3d(0, 0, 0)' : 'translate3d(19vh, 0, 0)',
                    overflowX: 'hidden',
                    borderLeft: 'none',
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    height: '100vh',
                    opacity: open ? '100%' :'60%'
                },
            }}
        >

            <Box mt={2}>
                {open && <hr className='border-t border-gray-600 my-1 ml-2'></hr>}
                <Typography variant="subtitle2" color="white" ml={1}>
                    <Box display="flex" alignItems="center" gap={1}>
                        <img src='https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab15999e303e7c202c28c_squad.svg' alt=''></img>
                        {open && <Typography variant="caption" color="white">Squad</Typography>}
                    </Box>

                </Typography>
                <List>
                    <ListItem
                        sx={{
                            marginLeft: 1,
                            padding: 0,
                            '&:hover': {
                                backgroundColor: '#ffffff',
                                '& .squad-name': {
                                    color: '#666666',
                                },
                            },
                        }}
                    >
                        <Box
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: isHovered ? 0 : 1,
                                width: '100%',
                            }}
                        >
                            <img
                                src={
                                    isHovered
                                        ? 'https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1596100550691c84f76_home__join-black.svg'
                                        : 'https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab158769fa828e95f98df_home__join-default.svg'
                                }
                                alt="squad"
                                width={30}
                                height={30}
                            />
                            {open && <Typography variant="caption" color='white' className='squad-name'>Squad Join</Typography>}
                        </Box>
                    </ListItem>
                </List>

                {statusSections.map(({ label, icon, color }) => (
                    <Box key={label} mt={1}>
                        {open && <hr className='border-t border-gray-600 my-1 ml-2'></hr>}
                        <Box display="flex" alignItems="center" gap={1} ml={1} mb={1}>
                            <img src={icon} alt={`${label} icon`} />
                            {open && (
                                <Typography variant="caption" color="white">
                                    {label.toUpperCase()}
                                </Typography>
                            )}
                        </Box>

                        {friends
                            .filter(friend => friend.status.toLowerCase() === label.toLowerCase())
                            .map((friend, index) => (
                                <ListItem key={friend.name + index}
                                    sx={{
                                        marginLeft: 1,
                                        padding: 0,
                                        '&:hover': {
                                            backgroundColor: '#ffffff',
                                            '& .friend-name': {
                                                color: '#666666',
                                            },
                                            '& .friend-status': {
                                                color: '#666666',
                                            },
                                            '& .img-status': {
                                                filter: 'brightness(1.2)',
                                            },
                                        },
                                    }}
                                >
                                    <Box className='img-status'
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            width: '100%',
                                            position: 'relative',
                                            filter: friend.status === 'Online' ? 'brightness(1.2)' : 'brightness(0.5)',
                                            transition: 'filter 0.3s ease',
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                left: 0,
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                width: 3,
                                                height: 36,
                                                backgroundColor: friend.status === 'Online' ? 'green' : 'grey',

                                            },
                                        }}
                                    >
                                        <img
                                            src={friend.avatar}
                                            alt={friend.name}
                                            width={36}
                                            height={36}
                                        />
                                        {open && (
                                            <Box display='grid'>
                                                <Typography variant="caption" color="#ffffff" className="friend-name">
                                                    {friend.name}
                                                </Typography>
                                                <Typography variant="caption" color="#ffffff" className="friend-status" >
                                                    {friend.status}
                                                </Typography>
                                            </Box>
                                        )}
                                    </Box>
                                </ListItem>
                            ))}
                    </Box>
                ))}
            </Box>
        </Drawer >
    );
};

export default RightSideBar;
