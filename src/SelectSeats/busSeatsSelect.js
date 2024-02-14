import { Box, Grid, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';

function BusSeatsSelects() {
    const seats = [
        { no: '1', isBooked: false },
        { no: '2', isBooked: true },
        { no: '3', isBooked: false },
        { no: '4', isBooked: false },
        { no: '5', isBooked: false },
        { no: '6', isBooked: true },
        { no: '7', isBooked: false },
        { no: '8', isBooked: true },
        { no: '9', isBooked: false },
        { no: '10', isBooked: true },
    ];
    const seats2 = [
        { no: '11', isBooked: false },
        { no: '12', isBooked: true },
        { no: '13', isBooked: false },
        { no: '14', isBooked: false },
        { no: '15', isBooked: false },
        { no: '16', isBooked: true },
        { no: '17', isBooked: false },
        { no: '18', isBooked: true },
        { no: '19', isBooked: false },
        { no: '20', isBooked: true },
    ];
    const seats3 = [
        { no: '21', isBooked: false },
        { no: '22', isBooked: true },
        { no: '23', isBooked: false },
        { no: '24', isBooked: false },
        { no: '25', isBooked: false },
        { no: '26', isBooked: true },
        { no: '27', isBooked: false },
        { no: '28', isBooked: true },
        { no: '29', isBooked: false },
        { no: '30', isBooked: true },
    ];
    const seats4 = [
        { no: '31', isBooked: false },
        { no: '32', isBooked: true },
        { no: '33', isBooked: false },
        { no: '34', isBooked: false },
        { no: '35', isBooked: false },
        { no: '36', isBooked: true },
        { no: '37', isBooked: false },
        { no: '38', isBooked: true },
        { no: '39', isBooked: false },
        { no: '40', isBooked: true },
    ];
    const seats5 = [
        { no: '41', isBooked: false },
        { no: '42', isBooked: true },
        { no: '43', isBooked: false },
        { no: '44', isBooked: false },
        { no: '45', isBooked: false },
        { no: '46', isBooked: true },
        { no: '47', isBooked: false },
        { no: '48', isBooked: true },
        { no: '49', isBooked: false },
        { no: '50', isBooked: true },
    ];
    const seats6 = [
        { no: '51', isBooked: false },
        { no: '52', isBooked: true },
        { no: '53', isBooked: false },
        { no: '54', isBooked: false },
        { no: '55', isBooked: false },
        { no: '56', isBooked: true },
        { no: '57', isBooked: false },
        { no: '58', isBooked: true },
        { no: '59', isBooked: false },
        { no: '60', isBooked: true },
    ];
    const navigate = useNavigate();
    const [selectedSeats, setSelectedSeats] = useState([]);
    const toggleSeat = (e) => {
        const seatNo = e.target.id;
        if (selectedSeats.includes(seatNo)) {
            const index = selectedSeats.indexOf(seatNo);
            selectedSeats.splice(index, 1);
        } else {
            selectedSeats.push(e.target.id);
        }
        console.log(selectedSeats);
    };

    const proceedToPassengerDetails = (e) => {
        // dispatch({ type: 'SEAT_SELECTION', seats: selectedSeats });
        // navigate('/passengerInfo');
    };
    // const selectedBus =
    //     buses.find((bus) => bus.id === details.selectedBusId) || {};
    // console.log(selectedBus);
    return (
        <Box sx={{
            justifyContent: 'center', alignItems: 'center', marginLeft: 35, marginTop: 2
        }}>
            <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Typography style={{ fontSize: 18, fontWeight: 'bold', color: 'blue', marginBottom: 2, marginLeft: 140 }}>The selected bus name is Krishna Travels</Typography>
                <div class="seat-container" style={{ justifyContent: 'center' }}>
                    <Grid container item xs={12} lg={12}>
                        <Grid item xs={12} lg={1}>
                            {seats.map((seat, index) => {
                                return (
                                    <div>
                                        <IconButton
                                            disabled={seat.isBooked}
                                            onClick={toggleSeat}
                                            type="checkbox"
                                            id={seat.no}>
                                            <ChairOutlinedIcon sx={{ color: seat.isBooked ? "green" : 'blue' }}
                                            />
                                        </IconButton>
                                        <label for={seat.no}>{seat.no}</label>
                                    </div>
                                )
                            })}
                        </Grid>
                        <Grid item xs={12} lg={1}>
                            {seats2.map((seat, index) => {
                                return (
                                    <div>
                                        <IconButton
                                            disabled={seat.isBooked}
                                            onClick={toggleSeat}
                                            type="checkbox"
                                            id={seat.no}>
                                            <ChairOutlinedIcon sx={{ color: seat.isBooked ? "green" : 'blue' }}
                                            />
                                        </IconButton>
                                        <label for={seat.no}>{seat.no}</label>
                                    </div>
                                )
                            })}
                        </Grid>
                        <Grid item xs={12} lg={2}>
                            {seats3.map((seat, index) => {
                                return (
                                    <div>
                                        <IconButton
                                            disabled={seat.isBooked}
                                            onClick={toggleSeat}
                                            type="checkbox"
                                            id={seat.no}>
                                            <ChairOutlinedIcon sx={{ color: seat.isBooked ? "green" : 'blue' }}
                                            />
                                        </IconButton>
                                        <label for={seat.no}>{seat.no}</label>
                                    </div>
                                )
                            })}
                        </Grid>
                        <Grid item xs={12} lg={1}>
                            {seats4.map((seat, index) => {
                                return (
                                    <div>
                                        <IconButton
                                            disabled={seat.isBooked}
                                            onClick={toggleSeat}
                                            type="checkbox"
                                            id={seat.no}>
                                            <ChairOutlinedIcon sx={{ color: seat.isBooked ? "green" : 'blue' }}
                                            />
                                        </IconButton>
                                        <label for={seat.no}>{seat.no}</label>
                                    </div>
                                )
                            })}
                        </Grid>
                        <Grid item xs={12} lg={1}>
                            {seats5.map((seat, index) => {
                                return (
                                    <div>
                                        <IconButton
                                            disabled={seat.isBooked}
                                            onClick={toggleSeat}
                                            type="checkbox"
                                            id={seat.no}>
                                            <ChairOutlinedIcon sx={{ color: seat.isBooked ? "green" : 'blue' }}
                                            />
                                        </IconButton>
                                        <label for={seat.no}>{seat.no}</label>
                                    </div>
                                )
                            })}
                        </Grid>
                        <Grid item xs={12} lg={1}>
                            {seats6.map((seat, index) => {
                                return (
                                    <div>
                                        <IconButton
                                            disabled={seat.isBooked}
                                            onClick={toggleSeat}
                                            type="checkbox"
                                            id={seat.no}>
                                            <ChairOutlinedIcon sx={{ color: seat.isBooked ? "green" : 'blue' }}
                                            />
                                        </IconButton>
                                        <label for={seat.no}>{seat.no}</label>
                                    </div>
                                )
                            })}
                        </Grid>
                    </Grid>
                </div>
                <Grid container item xs={12} lg={6} justifyContent={'space-between'} >
                    <button style={{  color: '#fff', backgroundColor: 'orange', fontWeight: 'bold', cursor: 'pointer' }} class="proceed" onClick={proceedToPassengerDetails}>
                        Cancel
                    </button>
                    <button style={{  color: '#fff', backgroundColor: 'green', fontWeight: 'bold', cursor: 'pointer' }} class="proceed" onClick={proceedToPassengerDetails}>
                        Proceed
                    </button>
                </Grid>

            </div >
        </Box>
    );
};
export default BusSeatsSelects;
