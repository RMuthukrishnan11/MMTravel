import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { useNavigate } from 'react-router-dom';
import { DatePicke, DatePicker, } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';

export default function Busview() {
    const history = useNavigate()
    const top100Films = [
        { title: 'Chennai', id: 1 },
        { title: 'Madurai', id: 2 },
        { title: 'Covai', id: 3 },
        { title: 'Erode', id: 4 },
        { title: 'Bangalore', id: 5 },
    ]

    const [options, setOptions] = React.useState({
        pickupLocation: "",
        dropLocation: "",
        fromDateTime: new Date().toLocaleDateString
    })
    console.log('option', options);
    const [uploadAt, setUploadAt] = React.useState(new Date());


    function handleInputChange(id, value) {
        setOptions(options => ({
            ...options,
            [id]: value
        }))
    }



    const handleChangeSearch = () => {
        history(
            '/bus/book',
            { state: options });
    }

    return (
        <Container maxWidth="xl" >
            <Typography >Enjoy your trip,Your buses are waiting.</Typography>
            <Grid container spacing={2}>
                <Grid item xs={3.5}>
                    <Autocomplete
                        id="highlights-demo"
                        name="pickupLocation"
                        sx={{ width: 300, height: 10 }}
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        onChange={(event, value) => handleInputChange('pickupLocation', value.title)}
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
                        name="dropLocation"
                        sx={{ width: 300, height: 10 }}
                        options={top100Films}
                        onChange={(event, value) => handleInputChange('dropLocation', value.title)}
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
                        // error={stripeError ? true : false}
                        // helperText={stripeError}
                        value={options.fromDateTime}
                        variant="outlined"
                        style={{ marginTop: 15 }}
                        required
                        // autoFocus
                        // StripeElement={CardElement}
                        onChange={(event) => {
                            handleInputChange('fromDateTime', event.target.value);
                        }}
                    ></TextField>
                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker',]}>
                            <DatePicker label="Basic date picker"
                                value={options.fromDateTime}
                                onChange={(newValue) => {
                                    const d = new Date(newValue).toLocaleDateString('fr-FR');
                                    handleInputChange('fromDateTime', d)
                                }
                            }
                            />
                        </DemoContainer>
                    </LocalizationProvider> */}
                </Grid>
                <Grid item xs={1.5}>
                    <Button variant='contained' size='large' style={{ marginTop: 20 }} onClick={handleChangeSearch}>Search</Button>
                </Grid>
            </Grid>
        </Container>
    );
}