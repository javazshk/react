import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Home from '../pages/home';
import Contact from '../pages/contact';
import About from '../pages/about';
import Careers from '../pages/Careers';
import { Container } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import HelpIcon from '@material-ui/icons/Help';
import HomeIcon from '@material-ui/icons/Home';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default function SimpleTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Container maxWidth="md">
                <AppBar position="relative" color="inherit">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="fullWidth">
                        <Tab label="Home" icon={<HomeIcon color="secondary"/>}/>
                        <Tab label="About us" icon={<HelpIcon color="secondary"/>} />
                        <Tab label="Careers" icon = {<FolderSpecialIcon color="secondary"/>}/>
                        <Tab label="Contact us" icon={<PhoneIcon color="secondary"/>} />
                    </Tabs>
                </AppBar>
                {value === 0 && <Home />}
                {value === 1 && <About />}
                {value === 2 && <Careers />}
                {value === 3 && <Contact />}
            </Container>
        </>
    );
}
