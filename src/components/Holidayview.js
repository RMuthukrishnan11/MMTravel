import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Container, Grid, useScrollTrigger } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import CommuteIcon from '@mui/icons-material/Commute';
import andaman from '../Images/andaman.jpg';
import chennai from '../Images/chennai.jpg';
import goa from '../Images/goa.jpg';
import kashmir from '../Images/kashmir.jpg';
import kerala from '../Images/kerala.jpg';
import maldives from '../Images/maldives.jpg';
import tamilnadu from '../Images/tamilnadu.jpg';
import andamantemple from '../Images/andamantemple.jpg'
import keralatemple from '../Images/keralatemple.jpg'
import tamilnadutemple from '../Images/tamilnadutemple.jpg'
import chennaitemple from '../Images/tamilnadutemple.jpg'

export default function HolidayPackage() {
    const history = useNavigate()
    const top100Films = [
        { title: 'Chennai', id: 1 },
        { title: 'Madurai', id: 2 },
        { title: 'Covai', id: 3 },
        { title: 'Erode', id: 4 },]

    const [uploadAt, setUploadAt] = React.useState(new Date());
    const onChangeUploadAt = () => {
        setUploadAt(new Date())
    }
    const onChangeHoliday = () => {
        history('/holiday/book')
    }
    const [search, setSearch] = React.useState(true)
    const [honeyMoon, setHoneyMoon] = React.useState(false)
    const [temple, setTemple] = React.useState(false)
    const [trip, setTrip] = React.useState(false)
    const onClickSearch = () => {
        setSearch(true)
        setHoneyMoon(false)
        setTemple(false)
        setTrip(false)
    }

    const onClickTemple = () => {
        setSearch(false)
        setHoneyMoon(false)
        setTemple(true)
        setTrip(false)
    }
    const onClickHoneyMoon = () => {
        setSearch(false)
        setHoneyMoon(true)
        setTemple(false)
        setTrip(false)
    }

    const onClickTrip = () => {
        setSearch(false)
        setHoneyMoon(false)
        setTemple(false)
        setTrip(true)
    }
    return (
        <Container maxWidth="xl" >
            <Grid container item xs={12} lg={12} sx={{ backgroundColor: '#E9F7EF', padding: 2, display: 'flex' }}>
                <Grid item xs={12} lg={3} display={'flex'}>
                    <Box sx={{ backgroundColor: '#E9F7EF', color: 'blue', display: 'flex' }} onClick={onClickSearch}>
                        <Typography sx={{
                            ":hover": {
                                backgroundColor: '#fff',
                                color: 'blue',
                                cursor: 'pointer'
                            },
                            border: search ? '2px solid #0AEEF9' : "",
                            color: search ? "#1D8348" : "black",
                            backgroundColor: search ? "white" : "",
                            fontWeight: search ? "bold" : "",
                            cursor: 'pointer',
                            display: 'flex'
                        }}><LocationSearchingIcon style={{ color: '#1D8348' }} />&nbsp;Search&nbsp;</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={3} display={'flex'}>
                    <Box sx={{ backgroundColor: '#E9F7EF', color: 'blue', display: 'flex' }} onClick={onClickHoneyMoon}>
                        <Typography sx={{
                            ":hover": {
                                backgroundColor: '#fff',
                                color: 'blue',
                                cursor: 'pointer'
                            },
                            border: honeyMoon ? '2px solid #0AEEF9' : "",
                            backgroundColor: honeyMoon ? "white" : "",
                            color: honeyMoon ? "#1D8348" : "black",
                            fontWeight: honeyMoon ? "bold" : "",
                            cursor: 'pointer',
                            display: 'flex'
                        }}><BedroomChildIcon style={{ color: '#1D8348' }} />&nbsp;Honeymoon&nbsp;</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={3} display={'flex'}>
                    <Box sx={{ backgroundColor: '#E9F7EF', color: 'blue', display: 'flex' }} onClick={onClickTemple} >
                        <Typography sx={{
                            ":hover": {
                                backgroundColor: '#fff',
                                color: 'blue',
                                cursor: 'pointer'
                            },
                            backgroundColor: temple ? "white" : "",
                            color: temple ? "#1D8348" : "black",
                            border: temple ? '2px solid #0AEEF9' : "",
                            fontWeight: temple ? "bold" : "",
                            cursor: 'pointer',
                            display: 'flex'
                        }}><TempleHinduIcon style={{ color: '#1D8348' }} />&nbsp;Temple&nbsp;</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={3} display={'flex'}>
                    <Box sx={{ backgroundColor: '#E9F7EF', color: 'blue', display: 'flex' }} onClick={onClickTrip}>
                        <Typography sx={{
                            ":hover": {
                                backgroundColor: '#fff',
                                color: 'blue',
                                cursor: 'pointer'
                            },
                            border: trip ? '2px solid #0AEEF9' : "",
                            backgroundColor: trip ? "white" : "",
                            color: trip ? "#1D8348" : "black",
                            fontWeight: trip ? "bold" : "",
                            display: 'flex',
                            cursor: 'pointer'
                        }}><CommuteIcon style={{ color: '#1D8348', }} />&nbsp;Trip&nbsp;</Typography>
                    </Box>
                </Grid>
            </Grid>
            {search ? (
                <Grid container spacing={2}>
                    <Grid item xs={3.5}>
                        <Autocomplete
                            id="highlights-demo"
                            sx={{ width: 300 }}
                            options={top100Films}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => (
                                <TextField {...params} label="From Location" margin="normal" />
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
                    <Grid item xs={3.5}>
                        <Autocomplete
                            id="highlights-demo"
                            sx={{ width: 300 }}
                            options={top100Films}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => (
                                <TextField {...params} label="To Location" margin="normal" />
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
                    <Grid item xs={3.5}>
                        <TextField
                            type="date"
                            margin="none"
                            fullWidth
                            label="Choose Date"
                            // error={stripeError ? true : false}
                            // helperText={stripeError}
                            value={uploadAt}
                            variant="outlined"
                            style={{ marginTop: 15 }}
                            required
                            // autoFocus
                            // StripeElement={CardElement}
                            onChange={event => {
                                setUploadAt(event.target.value);
                            }}
                        ></TextField>
                    </Grid>
                    <Grid item xs={1.5}>
                        <Button variant='contained' size='large' style={{ marginTop: 20 }} onClick={onChangeHoliday}>Search</Button>
                    </Grid>
                </Grid>
            ) : ""}
            {honeyMoon ? (
                <Grid container item xs={12} lg={12}>
                    <Grid item xs={12} lg={3}>
                        <Typography style={{ fontWeight: 'bold', color: 'blue' }}> Make My Trip Honeymoon Packages</Typography>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <a href='/holiday/place'>Goa</a><br />
                        <a href='/holiday/place'>Tamil Nadu</a><br />
                        <a href='/holiday/place'>Chennai</a><br />
                        <a href='/holiday/place'>Kerala</a><br />
                        <a href='/holiday/place'>Kashmir</a><br />
                        <a href='/holiday/place'>Maldives</a><br />
                        <a href='/holiday/place'>Andaman</a>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img style={{ height: 100, width: 100, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={andaman} onClick={() => history('/holiday/place')} ></img>
                        <img style={{ height: 100, width: 100, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={chennai} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 100, width: 100, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={goa} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 100, width: 100, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={kashmir} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 100, width: 100, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={kerala} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 100, width: 100, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={maldives} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 100, width: 100, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={tamilnadu} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 100, width: 100, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={andaman} onClick={() => history('/holiday/place')}></img>
                        {/* <img style={{ height: 100, width: 100, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={chennai} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 100, width: 100, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={goa} onClick={() => history('/holiday/place')}></img> */}
                        {/* <Grid item xs={12} lg={6} display={'flex'}>
                            <div className="imagecontainer">
                                <img style={{ height: 100, width: 100 ,cursor:'pointer' }} src={andaman} alt="Avatar" className="image"></img>
                                <a className="overlay" href='/holiday/place'>Andaman</a>
                            </div>
                            <div className="imagecontainer">
                                <img style={{ height: 100, width: 100 ,cursor:'pointer' }} src={chennai} alt="Avatar" className="image"></img>
                                <a className="overlay" href='/holiday/place'>Chennai</a>
                            </div>
                            <div className="imagecontainer">
                                <img style={{ height: 100, width: 100 ,cursor:'pointer' }} src={goa} alt="Avatar" className="image"></img>
                                <a className="overlay" href='/holiday/place'>Goa</a>
                            </div>
                            <div className="imagecontainer">
                                <img style={{ height: 100, width: 100 ,cursor:'pointer' }} src={kashmir} alt="Avatar" className="image"></img>
                                <a className="overlay" href='/holiday/place'>Kashmir</a>
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={6} >
                            <div className="imagecontainer">
                                <img style={{ height: 100, width: 100 ,cursor:'pointer' }} src={kerala} alt="Avatar" className="image"></img>
                                <a className="overlay" href='/holiday/place'>Kerala</a>
                            </div>
                            <div className="imagecontainer">
                                <img style={{ height: 100, width: 100 ,cursor:'pointer' }} src={maldives} alt="Avatar" className="image"></img>
                                <a className="overlay" href='/holiday/place'>Maldives</a>
                            </div>
                            <div className="imagecontainer">
                                <img style={{ height: 100, width: 100 ,cursor:'pointer' }} src={tamilnadu} alt="Avatar" className="image"></img>
                                <a className="overlay" href='/holiday/place'>Tamil Nadu</a>
                            </div>
                        </Grid> */}
                    </Grid>
                </Grid>
            ) : ""}
            {temple ? (
                <Grid container item xs={12} lg={12}>
                    <Grid item xs={12} lg={3}>
                        <Typography style={{ fontWeight: 'bold', color: 'blue' }}>Explore Your Temple Trip</Typography>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <a href='/holiday/place'>Goa</a><br />
                        <a href='/holiday/place'>Tamil Nadu</a><br />
                        <a href='/holiday/place'>Chennai</a><br />
                        <a href='/holiday/place'>Kerala</a><br />
                        <a href='/holiday/place'>Kashmir</a><br />
                        <a href='/holiday/place'>Maldives</a><br />
                        <a href='/holiday/place'>Andaman</a>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img style={{ height: 150, width: 150, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={andamantemple} onClick={() => history('/holiday/place')} ></img>
                        <img style={{ height: 150, width: 150, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={tamilnadutemple} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 150, width: 150, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={keralatemple} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 150, width: 150, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={chennaitemple} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 150, width: 150, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={andamantemple} onClick={() => history('/holiday/place')} ></img>
                        <img style={{ height: 150, width: 150, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={keralatemple} onClick={() => history('/holiday/place')}></img>
                        {/* <img style={{ height: 100, width: 100, cursor: 'pointer' }} src={kerala} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 100, width: 100, cursor: 'pointer' }} src={maldives} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 100, width: 100, cursor: 'pointer' }} src={tamilnadu} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 100, width: 100, cursor: 'pointer' }} src={andaman} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 100, width: 100, cursor: 'pointer' }} src={chennai} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 100, width: 100, cursor: 'pointer' }} src={goa} onClick={() => history('/holiday/place')}></img> */}
                        {/* <Grid item xs={12} lg={6} display={'flex'}>
                         <div className="imagecontainer">
                             <img style={{ height: 100, width: 100 ,cursor:'pointer' }} src={andaman} alt="Avatar" className="image"></img>
                             <a className="overlay" href='/holiday/place'>Andaman</a>
                         </div>
                         <div className="imagecontainer">
                             <img style={{ height: 100, width: 100 ,cursor:'pointer' }} src={chennai} alt="Avatar" className="image"></img>
                             <a className="overlay" href='/holiday/place'>Chennai</a>
                         </div>
                         <div className="imagecontainer">
                             <img style={{ height: 100, width: 100 ,cursor:'pointer' }} src={goa} alt="Avatar" className="image"></img>
                             <a className="overlay" href='/holiday/place'>Goa</a>
                         </div>
                         <div className="imagecontainer">
                             <img style={{ height: 100, width: 100 ,cursor:'pointer' }} src={kashmir} alt="Avatar" className="image"></img>
                             <a className="overlay" href='/holiday/place'>Kashmir</a>
                         </div>
                     </Grid>
                     <Grid item xs={12} lg={6} >
                         <div className="imagecontainer">
                             <img style={{ height: 100, width: 100 ,cursor:'pointer' }} src={kerala} alt="Avatar" className="image"></img>
                             <a className="overlay" href='/holiday/place'>Kerala</a>
                         </div>
                         <div className="imagecontainer">
                             <img style={{ height: 100, width: 100 ,cursor:'pointer' }} src={maldives} alt="Avatar" className="image"></img>
                             <a className="overlay" href='/holiday/place'>Maldives</a>
                         </div>
                         <div className="imagecontainer">
                             <img style={{ height: 100, width: 100 ,cursor:'pointer' }} src={tamilnadu} alt="Avatar" className="image"></img>
                             <a className="overlay" href='/holiday/place'>Tamil Nadu</a>
                         </div>
                     </Grid> */}
                    </Grid>
                </Grid>
            ) : ""}
            {trip ? (
                <Grid container item xs={12} lg={12}>
                    <Grid item xs={12} lg={3}>
                        <Typography style={{ fontWeight: 'bold', color: 'blue' }}> Make My Trip Packages</Typography>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <a href='/holiday/place'>Goa</a><br />
                        <a href='/holiday/place'>Tamil Nadu</a><br />
                        <a href='/holiday/place'>Chennai</a><br />
                        <a href='/holiday/place'>Kerala</a><br />
                        <a href='/holiday/place'>Kashmir</a><br />
                        <a href='/holiday/place'>Maldives</a><br />
                        <a href='/holiday/place'>Andaman</a>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img style={{ height: 100, width: 100, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={andaman} onClick={() => history('/holiday/place')} ></img>
                        <img style={{ height: 100, width: 100, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={chennai} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 100, width: 100, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={goa} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 100, width: 100, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={kashmir} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 100, width: 100, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={kerala} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 100, width: 100, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={maldives} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 100, width: 100, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={tamilnadu} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 100, width: 100, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={andaman} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 100, width: 100, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={chennai} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 100, width: 100, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={goa} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 100, width: 100, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={maldives} onClick={() => history('/holiday/place')}></img>
                        <img style={{ height: 100, width: 100, cursor: 'pointer', padding: 5, borderRadius: '10px' }} src={tamilnadu} onClick={() => history('/holiday/place')}></img>
                        {/* <Grid item xs={12} lg={6} display={'flex'}>
                          <div className="imagecontainer">
                              <img style={{ height: 100, width: 100 ,cursor:'pointer' }} src={andaman} alt="Avatar" className="image"></img>
                              <a className="overlay" href='/holiday/place'>Andaman</a>
                          </div>
                          <div className="imagecontainer">
                              <img style={{ height: 100, width: 100 ,cursor:'pointer' }} src={chennai} alt="Avatar" className="image"></img>
                              <a className="overlay" href='/holiday/place'>Chennai</a>
                          </div>
                          <div className="imagecontainer">
                              <img style={{ height: 100, width: 100 ,cursor:'pointer' }} src={goa} alt="Avatar" className="image"></img>
                              <a className="overlay" href='/holiday/place'>Goa</a>
                          </div>
                          <div className="imagecontainer">
                              <img style={{ height: 100, width: 100 ,cursor:'pointer' }} src={kashmir} alt="Avatar" className="image"></img>
                              <a className="overlay" href='/holiday/place'>Kashmir</a>
                          </div>
                      </Grid>
                      <Grid item xs={12} lg={6} >
                          <div className="imagecontainer">
                              <img style={{ height: 100, width: 100 ,cursor:'pointer' }} src={kerala} alt="Avatar" className="image"></img>
                              <a className="overlay" href='/holiday/place'>Kerala</a>
                          </div>
                          <div className="imagecontainer">
                              <img style={{ height: 100, width: 100 ,cursor:'pointer' }} src={maldives} alt="Avatar" className="image"></img>
                              <a className="overlay" href='/holiday/place'>Maldives</a>
                          </div>
                          <div className="imagecontainer">
                              <img style={{ height: 100, width: 100 ,cursor:'pointer' }} src={tamilnadu} alt="Avatar" className="image"></img>
                              <a className="overlay" href='/holiday/place'>Tamil Nadu</a>
                          </div>
                      </Grid> */}
                    </Grid>
                </Grid>
            ) : ""}
        </Container>
    );
}