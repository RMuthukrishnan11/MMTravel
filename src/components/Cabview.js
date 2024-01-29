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

export default function Cabview() {
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
    const onChangeCab = () => {
        history('/cab/book')
    }
    return (
        <Container maxWidth="xl" >
            <Typography >Enjoy your trip,Your cabs are waiting.</Typography>
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
                    <Button variant='contained' size='large' style={{ marginTop: 20 }} onClick={onChangeCab}>Search</Button>
                </Grid>
            </Grid>
        </Container>
    );
}