import React, { useState } from 'react'


function ReservationForm(props) {

    const [date, setDate] = useState('');
    const [times, setTimes] = useState('');
    const [guest, setGuest] = useState(1);
    const [occassion, setOcassion] = useState("occasion");

    const handleDateChange = (e) => setDate(e.target.value);
    const handleGuestsChange = (e) => setGuest(parseInt(e.target.value, 10));
    const handleOcassionChange = (e) => setOcassion(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);

        console.log("Date:", date);
        console.log("Time:", times);
        console.log("Number of Guests:", guest);
        console.log("Occasion:", occassion);
    }



  return (
    <form
        // style= {{display: 'grid', maxWidth: '200px', gap: '20px'}}
        className='specials'
        onSubmit={handleSubmit}
    >
        <fieldset>
            <div>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={handleDateChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    value={times}
                    onChange={(e) => setTimes(e.target.value)}
                >
                    <option value=''>Select a Time</option>
                        {/* <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option> */}
                    {
                        props.availableTimes.availableTimes.map(availableTimes => {
                            return <option key={availableTimes}>{availableTimes}</option>
                        })
                    }
                </select>
            </div>

            <div>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1" max="10"
                    id="guests"
                    value={guest}
                    onChange={handleGuestsChange}
                />
            </div>

            <div>
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={occassion}
                    onChange={handleOcassionChange}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Date</option>
                </select>
            </div>

        <input
            type="submit"
            value="Make Your reservation"
        />
        </fieldset>

    </form>
  )
}

export default ReservationForm