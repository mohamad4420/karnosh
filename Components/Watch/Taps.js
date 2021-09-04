import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import dynamic from 'next/dynamic'
const Comment = dynamic(() => import('./Comment'))
const Related = dynamic(() => import('./Related/Related'))
const Epesedos = dynamic(() => import('./Epesedos'))
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
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

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
     position:"relative",
     top:"-10px",
    flexGrow: 1,
    direction:"rtl",
  },
}));

export default function TabsWrappedLabel() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab
          style={{color:"#fff"}}
            value="one"
            label="الحلقات"
            wrapped
            {...a11yProps('one')}
          />
          <Tab value="two"  style={{color:"#fff"}} label="التعليقات" {...a11yProps('two')} />
          <Tab value="three"  style={{color:"#fff"}} label="اشياء مشابهه" {...a11yProps('three')} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
        <Epesedos/>
      </TabPanel>
      <TabPanel value={value} index="two">
        <Comment/>
      </TabPanel>
      <TabPanel value={value} index="three">
        <Related/>
      </TabPanel>
    </div>
  );
}
