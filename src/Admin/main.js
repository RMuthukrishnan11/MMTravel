import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';
import { CardHeader, Divider, Grid, IconButton, TextField, styled, useScrollTrigger } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsCarFilledRoundedIcon from '@mui/icons-material/DirectionsCarFilledRounded';
import HouseboatRoundedIcon from '@mui/icons-material/HouseboatRounded';
import Cabview from '../components/Cabview';
import Busview from '../components/Busview';
import HolidayView from '../components/Holidayview';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #fff',
    boxShadow: 24,
    p: 2,
};


export default function AdminMain() {
    const [open, setOpen] = React.useState(false)
    const [openHoliday, setOpenHoliday] = React.useState(false)
    const onChangeCreateHoliday = () => {
        setOpenHoliday(true)
    }

    const onChangeCreateBus = () => [
        setOpen(true)
    ]
    const handleClose = () => setOpen(false);
    const handleCloseHoliday = () => {
        setOpenHoliday(false)
    }
    return (
        <React.Fragment>
            {/* <CssBaseline /> */}
            <Container maxWidth="sm" sx={{ padding: 2 }}>
                <Grid container>
                    <Grid xs={12} padding={2} >
                        <Card sx={{
                            ":hover": {
                                backgroundColor: '#fff',
                                color: "blue"
                            }
                        }} style={{ backgroundColor: '#ECFDFE', padding: 15, textAlign: 'center', cursor: 'pointer' }} onClick={onChangeCreateBus}>Create Bus</Card>
                    </Grid>
                    <Grid xs={12} padding={2} >
                        <Card sx={{
                            ":hover": {
                                backgroundColor: '#fff',
                                color: "blue"
                            }
                        }} style={{ backgroundColor: '#ECFDFE', padding: 15, textAlign: 'center', cursor: 'pointer' }} onClick={onChangeCreateHoliday}>Create Holiday Package</Card>
                    </Grid>
                </Grid>
                {open ? (
                    <div>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ color: 'blueviolet' }}>
                                    Create Bus
                                </Typography>
                                <Divider style={{color:"blueviolet"}}/>
                                <Grid padding={2} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
                                    <TextField autoFocus value={new Date()} id="outlined-basic" type='date' label="From Date" variant="outlined" size='small' style={{ padding: 2, width: 225 }} /><br /><br />
                                    <TextField value={new Date()} id="outlined-basic" type='date' label="To Date" variant="outlined" size='small' style={{ padding: 2, width: 225 }} /><br /><br />
                                    <TextField id="outlined-basic" type='text' label="Vehicle Type" variant="outlined" size='small' style={{ padding: 2 }} /><br /><br />
                                    <TextField id="outlined-basic" type='text' label="Vehicle Name" variant="outlined" size='small' style={{ padding: 2 }} /><br /><br />
                                    <TextField id="outlined-basic" type='number' label="Vehicle Number" variant="outlined" size='small' style={{ padding: 2 }} /><br /><br />
                                    <TextField id="outlined-basic" type='number' label="Price" variant="outlined" size='small' style={{ padding: 2 }} /><br /><br />
                                    <TextField id="outlined-basic" type='textF' label="Current Location" variant="outlined" size='small' style={{ padding: 2 }} />
                                </Grid>
                                <Grid justifyContent={'space-between'} alignItems={'space-between'} textAlign={'center'}>
                                    <Button variant='contained' style={{ textAlign: 'center', justifyContent: 'center' }}>Save</Button>&emsp;
                                    <Button variant='contained' style={{ textAlign: 'center', justifyContent: 'center' }} onClick={() => setOpen(false)}>Cancel</Button>
                                </Grid>
                            </Box>
                        </Modal>
                    </div>
                ) : ""}
                {openHoliday ? (
                    <div>
                        <Modal
                            open={openHoliday}
                            onClose={handleCloseHoliday}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ color: 'blueviolet' }}>
                                    Create Holiday Package
                                </Typography>
                                <Divider style={{color:"blueviolet"}}/>
                                <Grid padding={2} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
                                    <TextField id="outlined-basic" type='text' label="Package Name" variant="outlined" size='small' style={{ padding: 2 }} /><br /><br />
                                    <TextField id="outlined-basic" type='text' label="Destination" variant="outlined" size='small' style={{ padding: 2 }} /><br /><br />
                                    <TextField id="outlined-basic" type='number' label="Price" variant="outlined" size='small' style={{ padding: 2 }} /><br /><br />
                                    <TextField id="outlined-basic" type='textF' label="Duration In Days" variant="outlined" size='small' style={{ padding: 2 }} /><br /><br />
                                    <TextField id="outlined-basic" type='number' label="Description" variant="outlined" size='small' style={{ padding: 2 }} />
                                </Grid>
                                <Grid justifyContent={'space-between'} alignItems={'space-between'} textAlign={'center'}>
                                    <Button variant='contained' style={{ textAlign: 'center', justifyContent: 'center' }}>Save</Button>&emsp;
                                    <Button variant='contained' style={{ textAlign: 'center', justifyContent: 'center' }} onClick={() => setOpenHoliday(false)}>Cancel</Button>
                                </Grid>
                            </Box>
                        </Modal>
                    </div>
                ) : ""}
            </Container>
        </React.Fragment>
    );
}