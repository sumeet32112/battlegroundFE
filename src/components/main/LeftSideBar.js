import { Drawer, List, ListItem, Box, Tooltip } from '@mui/material';
import { useState } from 'react'

const LeftSideBar = ({ onPlayerSelect, onQuitClick }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const playerAvatars = [
        {
            "name": "Battlefield V",
            "url": "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601aafabd334e34cd4dbb8ba_side-menu__game-2.png",
            "bgUrl": "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6038d82494148a7057de18f8_BF5__BG.jpg"
        },
        {
            "name": "Battlefield 1",
            "url": "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601aafab108eb6365513203b_side-menu__game.png",
            "bgUrl": "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6038d61e9c58152bb9f4f670_BF1__background.jpg"
        },
        {
            "name": "Battlefield 4",
            "url": "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601aafac57edde91d49b301f_side-menu__game-1.png",
            "bgUrl": "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6038f70ef0141a2f22d50f58_menu__background.jpg"
        },
        {
            "name": "Battlefield Hardline",
            "url": "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601aafab2823bb5957cc1ffd_side-menu__game-3.png",
            "bgUrl": "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601aafab2823bb5957cc1ffd_side-menu__game-3.png"
        },
        {
            "name": "Career",
            "url": "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601aafaa108eb614c813203a_side-menu__career.png",
            "bgUrl": "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6038ecd59c5815c94ff56241_side-menu-BG.png"
        },
        {
            "name": "Watch",
            "url": "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601aafab68a3c97a6a478b8d_side-menu__watch.svg",
            "bgUrl": "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6038ecd59c5815c94ff56241_side-menu-BG.png"
        },
        {
            "name": "News",
            "url": "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601aafab332f0ade9870b435_side-menu__news.svg",
            "bgUrl": "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6038ecd59c5815c94ff56241_side-menu-BG.png"
        }
    ]

    const bootomIcon = [
        { name: 'Help', url: 'https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601aafabd71ff7186d1c97d5_side-menu__help.svg', bgUrl: 'https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6038ecd59c5815c94ff56241_side-menu-BG.png' },
        { name: 'Quit', url: 'https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601aafabc5fc83c1e7f50842_side-menu__quit.svg' }
    ]

    const defaultIndex = playerAvatars.findIndex(p => p.name === 'Battlefield 4');

    const handleClick = (icon, index) => {
        setActiveIndex(index);
        console.log('Clicked:', icon.name);
    };

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 60,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 60,
                    boxSizing: 'border-box',
                    backgroundColor: 'transparent',
                    backdropFilter: 'blur(12px)',
                    borderRight: '1px solid #333',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: 15,
                    paddingBottom: 2,
                    opacity: '70%'
                },
            }}
        >
            <Box>

                <List>
                    {playerAvatars.map((item, index) => (
                        <Tooltip title={item.name.toUpperCase()} placement="right" arrow key={index}>
                            <ListItem sx={{
                                justifyContent: 'center',
                                padding: 1,
                                position: 'relative',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    width: 4,
                                    height: 30,
                                    backgroundColor: activeIndex === index ? '#f5b506' : 'transparent', // cyan bar
                                    transition: 'all 0.3s ease',
                                },
                                '& img': {
                                    width: 30,
                                    height: 30,
                                    filter: activeIndex === index ? 'brightness(1.5)' : 'brightness(0.5)',
                                    transition: 'all 0.2s ease',
                                },
                                '&:hover img': {
                                    filter: 'brightness(1.2)',
                                },
                            }} onClick={() => {
                                handleClick(item, index);
                                onPlayerSelect(item);
                            }}
                            >
                                <img
                                    src={item.url}
                                    alt={`icon-${index}`}
                                />
                            </ListItem>
                        </Tooltip>
                    ))}
                </List>
            </Box>
            <Box>
                <List>
                    {bootomIcon.map((item, index) => {
                        const globalIndex = playerAvatars.length + index;
                        return (
                            <Tooltip title={item.name.toUpperCase()} placement="right" arrow key={globalIndex}>
                                <ListItem sx={{
                                    justifyContent: 'center',
                                    padding: 1,
                                    '& img': {
                                        width: 20,
                                        height: 15,
                                        filter: activeIndex === globalIndex ? 'brightness(1.2)' : 'brightness(0.5)',
                                        transition: 'all 0.2s ease',
                                    },
                                    '&:hover img': {
                                        filter: 'brightness(1)',
                                    },
                                }} onClick={() => {
                                    handleClick(item, globalIndex);
                                    if (item.name !== 'Quit') {
                                        onPlayerSelect(item);
                                    } else {
                                        onQuitClick();
                                    }
                                }}
                                >
                                    <img
                                        src={item.url}
                                        alt={`bottom-icon-${index}`}

                                    />
                                </ListItem>
                            </Tooltip>
                        )
                    }
                    )}
                </List>
            </Box>
        </Drawer>
    )
}

export default LeftSideBar;