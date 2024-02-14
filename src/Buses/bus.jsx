import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Container, Divider, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import TimelineConnector from '@mui/lab/TimelineConnector';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { StepConnector } from '@mui/material';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import HotelIcon from '@mui/icons-material/Hotel';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import StarRateIcon from '@mui/icons-material/StarRate';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GET_BOOKING, headers } from '../ApiServices/ServiceUrls'

export default function Buses() {
    const location = useLocation();
    const navigate=useNavigate()

    const top100Films = [
        { title: 'Chennai', id: 1 },
        { title: 'Madurai', id: 2 },
        { title: 'Covai', id: 3 },
        { title: 'Erode', id: 4 },
        { title: 'Bangalore', id: 5 },
    ]
    const searchOption = location.state;
    const [uploadAt, setUploadAt] = React.useState(new Date());
    const [tripData, setTripData] = React.useState([{
        tripBookingId: "",
        pickupLocation: "",
        fromDateTime: "",
        dropLocation: "",
        toDateTime: "",
        distanceInKm: 0,
        estimateFare: "",
        cancelReason: "",
        bookingStatus: false,
        schedulePickupTime: "",
        scheduleDepatureTime: "",
        conformationCode: "",
        travellersAdult: 0,
        travellersChildrens: 0,
        totalTravellersCount: 0,
        cab: {
            cabId: 0,
            vehicleType: "",
            vehicleName: "",
            vehicleNumber: "",
            perKmRate: 0.0,
            vehicleCurLocation: "",
            vehicleCurStatus: false
        }
    }])
    const onChangeUploadAt = () => {
        setUploadAt(new Date())
    }

    React.useEffect(() => {
        console.log(searchOption);
        getTripDetails();
    }, [])

    const getTripDetails = () => {
        try {
            axios.post(GET_BOOKING, searchOption, headers).then((res) => {
                console.log(res.data)
                setTripData(res.data)
            }).catch((err) => {
                console.log(err)
            })
        } catch (e) {
            console.log(e)
        }

    }

    const handleSelectSeats = () => {
        navigate('/seat/selection')
    }
    return (
        <Container maxWidth="xl" style={{ overflow: 'auto' }}>
            <Grid container style={{ backgroundColor: 'rgb(53 51 51)', marginTop: 4, paddingLeft: 15, borderRadius: '5px', paddingBottom: 7 }} >
                <Grid item xs={12} lg={2}>
                    <Autocomplete
                        id="highlights-demo"
                        sx={{ width: 150 }}
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => (
                            <TextField {...params} label="From Location" margin="normal" size='small' variant="filled" style={{ backgroundColor: '#fff', color: 'blue', borderRadius: '10px' }} />
                        )}
                        renderOption={(props, option, { inputValue }) => {
                            const matches = match(option.title, inputValue, { insideWords: true });
                            const parts = parse(option.title, matches);

                            return (
                                <li {...props}>
                                    <div>
                                        {parts.map((part, index) => (
                                            <span
                                                key={index}
                                                style={{
                                                    fontWeight: part.highlight ? 100 : 100,
                                                }}
                                            >
                                                {part.text}
                                            </span>
                                        ))}
                                    </div>
                                </li>
                            );
                        }}
                    />
                </Grid>
                <Grid item xs={12} lg={2}>
                    <Autocomplete
                        id="highlights-demo"
                        sx={{ width: 150 }}
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => (
                            <TextField {...params} label="To Location" margin="normal" size='small' variant="filled" style={{ backgroundColor: '#fff', color: 'blue', borderRadius: '10px' }} />
                        )}
                        renderOption={(props, option, { inputValue }) => {
                            const matches = match(option.title, inputValue, { insideWords: true });
                            const parts = parse(option.title, matches);
                            return (
                                <li {...props}>
                                    <div>
                                        {parts.map((part, index) => (
                                            <span
                                                key={index}
                                                style={{
                                                    fontWeight: part.highlight ? 100 : 100,
                                                }}
                                            >
                                                {part.text}
                                            </span>
                                        ))}
                                    </div>
                                </li>
                            );
                        }}
                    />
                </Grid>
                <Grid item xs={12} lg={2}>
                    <TextField
                        type="date"
                        margin="none"
                        label="Choose Date"
                        // error={stripeError ? true : false}
                        // helperText={stripeError}
                        value={uploadAt}
                        variant="filled"
                        size='small'
                        style={{ marginTop: 15, width: 150, backgroundColor: '#fff', color: 'blue', borderRadius: '10px' }}
                        required
                        // autoFocus
                        // StripeElement={CardElement}
                        onChange={event => {
                            setUploadAt(event.target.value);
                        }}
                    ></TextField>
                </Grid>
                <Grid item xs={12} lg={2}>
                    <Button variant='contained' size='large' style={{ marginTop: 20 }}>Search</Button>
                </Grid>
            </Grid>&emsp;
            <Grid container spacing={2} item xs={12} lg={12}>
                <Grid item xs={12} lg={3}>
                    <Card variant="outlined" elevation={8} style={{ borderRadius: "10px", borderColor: "#25ABF7", width: '100%', backgroundColor: '#EBFCFC' }} >
                        <Grid container item xs={12} lg={12} direction={'column'} padding={1}>
                            <span style={{ fontSize: 14, fontWeight: 'bold', }}>Ac</span>
                            <Grid container item xs={12} lg={12} direction={'row'} justifyContent={'space-evenly'} marginTop={1}>
                                <Box sx={{ backgroundColor: '#fff ', color: '#68867A', fontSize: 15, borderRadius: '5px', padding: 1 }}>
                                    <AcUnitIcon style={{ height: 12 }} />AC</Box>
                                <Box sx={{ backgroundColor: '#fff ', color: '#68867A', fontSize: 15, borderRadius: '5px', padding: 1 }}>
                                    <SevereColdIcon style={{ height: 12 }} />Non AC</Box>
                            </Grid>&nbsp;<Divider />
                            <span style={{ fontSize: 14, fontWeight: 'bold' }}>Seat Type</span>
                            <Grid container item xs={12} lg={12} direction={'row'} justifyContent={'space-evenly'} marginTop={1}>
                                <Box sx={{ backgroundColor: '#fff ', color: '#68867A', fontSize: 15, borderRadius: '5px', padding: 1 }}>
                                    <HotelIcon style={{ height: 12 }} />Sleeper</Box>
                                <Box sx={{ backgroundColor: '#fff ', color: '#68867A', fontSize: 15, borderRadius: '5px', padding: 1 }}>
                                    <AirlineSeatReclineExtraIcon style={{ height: 12 }} />Seater</Box>
                            </Grid>&nbsp;<Divider />
                            <span style={{ fontSize: 14, fontWeight: 'bold' }}>Pickup Time - Erode</span>
                            <Grid container item xs={12} lg={12} direction={'row'} justifyContent={'space-evenly'} marginTop={1}>
                                <Box sx={{ backgroundColor: '#fff ', color: '#68867A', fontSize: 15, borderRadius: '5px', padding: 1 }}>
                                    <WbSunnyIcon style={{ height: 12 }} />6 AM to 6 PM</Box>
                                <Box sx={{ backgroundColor: '#fff ', color: '#68867A', fontSize: 15, borderRadius: '5px', padding: 1 }}>
                                    <DarkModeIcon style={{ height: 12 }} />6 PM to 12 AM</Box>
                            </Grid>&nbsp;<Divider />
                            <span style={{ fontSize: 14, fontWeight: 'bold' }}>Drop Time - Erode</span>
                            <Grid container item xs={12} lg={12} direction={'row'} justifyContent={'space-evenly'} marginTop={1}>
                                <Box sx={{ backgroundColor: '#fff ', color: '#68867A', fontSize: 15, borderRadius: '5px', padding: 1 }}>
                                    <WbSunnyIcon style={{ height: 12 }} />6 AM to 6 PM</Box>
                                <Box sx={{ backgroundColor: '#fff ', color: '#68867A', fontSize: 15, borderRadius: '5px', padding: 1 }}>
                                    <DarkModeIcon style={{ height: 12 }} />6 PM to 12 AM</Box>
                            </Grid>&nbsp;<Divider />
                        </Grid>
                    </Card>
                </Grid>
                {
                    tripData.map((data) => {
                        return (
                            <Grid item xs={12} lg={9} direction={'row'} justifyContent={'space-between'}>
                                <Card variant="outlined" elevation={8} style={{ borderRadius: "10px", borderColor: "#25ABF7", width: '100%', backgroundColor: '#EBFCFC' }} >
                                    <Grid container item xs={12} lg={12} style={{ padding: 5 }}>
                                        <Grid item xs={12} lg={3}>
                                            <Typography sx={{ fontSize: 18, fontWeight: "bold", borderRadius: '4px' }} color="text.secondary" gutterBottom>
                                                <span >{data.pickupLocation} - {data.dropLocation}</span><br />
                                                <span style={{ color: '#3C3D3C', fontSize: 12 }}>{data.cab.vehicleType}</span><br />
                                                <Box sx={{ backgroundColor: '#68867A ', width: 60, color: '#fff', fontSize: 15, borderRadius: '5px' }}>
                                                    <StarRateIcon style={{ height: 12 }} />4.8</Box>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} lg={6}>
                                            <Typography sx={{ fontSize: 18, fontWeight: "bold", borderRadius: '4px' }} color="text.secondary" gutterBottom>
                                                <span style={{ fontSize: 18, fontWeight: 'bold' }}>{data.schedulePickupTime}</span>
                                                <span style={{ fontSize: 12 }}>   ----- 00hrs 39mins -----
                                                    &nbsp;<span style={{ fontSize: 18, fontWeight: 'bold' }}>{data.schedulePickupTime}</span></span><br /><br />
                                                <Box sx={{ backgroundColor: '#EAE42D', width: 150, color: '#fff', fontSize: 15, borderRadius: '5px' }}>
                                                    <GpsFixedIcon style={{ height: 15 }} />Live Tracking</Box>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} lg={3} justifyContent={'flex-end'} alignItems={'flex-end'} textAlign={'end'}>
                                            <Typography sx={{ fontSize: 18, fontWeight: "bold", borderRadius: '4px' }} color="text.secondary" gutterBottom>
                                                <span style={{ fontSize: 20, fontWeight: 'bold', color: "green" }}>Rs.{data.estimateFare}</span><br /><br />
                                                <span style={{ fontSize: 11 }}>17 Seats Left | 5 Window Seats</span>
                                            </Typography>
                                        </Grid>
                                    </Grid><Divider />
                                    <Grid container item xs={12} lg={12} padding={1}>
                                        <Grid item xs={12} lg={10}>

                                        </Grid>
                                        <Grid item xs={12} lg={2} justifyContent={'flex-end'} alignItems={'flex-end'} textAlign={'end'}>
                                            <Button variant='contained' onClick={() => handleSelectSeats()}>Select Seats</Button>
                                        </Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        )
                    })
                }

            </Grid>
        </Container>
    );
}