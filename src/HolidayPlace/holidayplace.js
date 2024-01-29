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
import { useNavigate } from 'react-router-dom';
import goa from '../Images/goa.jpg'
import goatemple from '../Images/goatemple.jpg'
import kerala from '../Images/kerala.jpg'
import keralatemple from '../Images/keralatemple.jpg'
import tamilnadu from '../Images/tamilnadu.jpg'
import tamilnadutemple from '../Images/tamilnadutemple.jpg'

export default function HolidayPlace() {

    const top100Films = [
        { title: 'Chennai', id: 1 },
        { title: 'Madurai', id: 2 },
        { title: 'Covai', id: 3 },
        { title: 'Erode', id: 4 },]

    const [uploadAt, setUploadAt] = React.useState(new Date());
    const onChangeUploadAt = () => {
        setUploadAt(new Date())
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
                {/* <Grid item xs={12} lg={2}>
                    <Button variant='contained' size='large' style={{ marginTop: 20 }} onClick={()=>}>Back</Button>
                </Grid> */}
            </Grid>&emsp;
            <Grid container spacing={2} item xs={12} lg={12} justifyContent={'space-evenly'}>
                <Grid item xs={12} lg={4}>
                    <Card variant='outlined' sx={{ maxWidth: 345, border: '1px solid #25ABF7', }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={tamilnadu}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Dazzling South Vacay
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                1. IconZip lining
                                2. IconVisit to Dubare Elephant Camp, Abbi Falls, Omkareshwara Temple
                                3. IconVisit to Raja's Seat, Bandipur National Park, Pykara Waterfalls
                            </Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: 'space-between', }}>
                            <Button variant='contained' size="small">37,000/Person</Button>
                            <Button variant='contained' size="small">Book</Button>
                        </CardActions>
                    </Card>&emsp;
                    <Card variant='outlined' sx={{ maxWidth: 345, border: '1px solid #25ABF7' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={tamilnadutemple}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Picturesque Ooty & Kodaikanal Vacay
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                1. IconZip lining
                                2. IconVisit to Dubare Elephant Camp, Abbi Falls, Omkareshwara Temple
                                3. IconVisit to Raja's Seat, Bandipur National Park, Pykara Waterfalls
                            </Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: 'space-between', }}>
                            <Button variant='contained' size="small">37,220/Person</Button>
                            <Button variant='contained' size="small">Book</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={4} direction={'row'} justifyContent={'space-between'}>
                    <Card variant='outlined' sx={{ maxWidth: 345, border: '1px solid #25ABF7' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={goatemple}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Peaceful Ooty Holiday
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                1. IconZip lining
                                2. IconVisit to Dubare Elephant Camp, Abbi Falls, Omkareshwara Temple
                                3. IconVisit to Raja's Seat, Bandipur National Park, Pykara Waterfalls
                            </Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: 'space-between', }}>
                            <Button variant='contained' size="small">29,258/Person</Button>
                            <Button variant='contained' size="small">Book</Button>
                        </CardActions>
                    </Card>&emsp;
                    <Card variant='outlined' sx={{ maxWidth: 345, border: '1px solid #25ABF7' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={goatemple}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Scenic South- Honeymoon Special
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                1. IconZip lining
                                2. IconVisit to Dubare Elephant Camp, Abbi Falls, Omkareshwara Temple
                                3. IconVisit to Raja's Seat, Bandipur National Park, Pykara Waterfalls
                            </Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: 'space-between', }}>
                            <Button variant='contained' size="small">37,000/Person</Button>
                            <Button variant='contained' size="small">Book</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={4} direction={'row'} justifyContent={'space-between'}>
                    <Card variant='outlined' sx={{ maxWidth: 345, border: '1px solid #25ABF7' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={kerala}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Incredible South Vacay
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                1. IconZip lining
                                2. IconVisit to Dubare Elephant Camp, Abbi Falls, Omkareshwara Temple
                                3. IconVisit to Raja's Seat, Bandipur National Park, Pykara Waterfalls
                            </Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: 'space-between', }}>
                            <Button variant='contained' size="small">37,000/Person</Button>
                            <Button variant='contained' size="small">Book</Button>
                        </CardActions>
                    </Card>&emsp;
                    <Card variant='outlined' sx={{ maxWidth: 345, border: '1px solid #25ABF7' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={keralatemple}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Short Getaway to Rameshwaram, Madurai & Kanyakumari
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                1. IconZip lining
                                2. IconVisit to Dubare Elephant Camp, Abbi Falls, Omkareshwara Temple

                            </Typography>
                        </CardContent>
                        <CardActions style={{ justifyContent: 'space-between', }}>
                            <Button variant='contained' size="small">47,004/Person</Button>
                            <Button variant='contained' size="small">Book</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}