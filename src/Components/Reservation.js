import React from 'react'
import './style.css'
import ReservationForm from './ReservationForm'


function Reservation(props) {

  return (
    <>
        <ReservationForm
          availableTimes={props.availableTimes}
          dispatch={props.dispatch}
          submitForm={props.submitForm}
        />
    </>
  )
}

export default Reservation