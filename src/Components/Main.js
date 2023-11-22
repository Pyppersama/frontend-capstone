import React, {useReducer} from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import './style.css'
import Specials from './Specials.js'
import Testimonials from './Testimonials.js'
import Reservation from './Reservation.js';
import ConfirmedRes from './ConfirmedRes.js';
import Header from './Header.js';

function Main() {

    const seedRandom = function (seed) {
      var m = 2 **35 - 31;
      var a = 185852;
      var s = seed % m;
      return function (){
        return(s = s * a % m) / m;
      }
    }

    const fetchAPI = function(date) {
      let result = [];
      let random = seedRandom(date.getDate());
      for (let i = 17; i<=23; i++){
        if (random() <0.5){
              result.push(i + ':00');
        }
        if (random() > 0.5){
          result.push(i + ':30');
        }
      }
      return result;
    }

    const submitAPI = function(formData){
      return true;
    }

  const initialState ={availableTimes: fetchAPI(new Date())};
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes (state, date){
    return {availableTimes: fetchAPI(new Date())};
  }

  const navigate = useNavigate()
  const submitForm = (formData) => {
    if (submitAPI(formData)){
      navigate('/confirmedRes')
    }
  }

  return (
    <main>
      <Routes>
        <Route
          path='/'
          element=
          {
            <React.Fragment>
              <Header />
              <Specials />
              <Testimonials />
            </React.Fragment>
          }
        />

        <Route
          path='/Reservation'
          element={
            <Reservation
              availableTimes={state}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />

        <Route path='/confirmedRes' element={<ConfirmedRes />}/>
      </Routes>
    </main>
  )
}

export default Main