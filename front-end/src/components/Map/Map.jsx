import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';


const Map = ({width, height}) => {
  const position = [51.505, -0.09]
  const [offices,setOffices] = useState([])
  useEffect(()=>{
    fetch('http://172.233.40.193:3001/complaints/offices/1').then(r=>r.json()).then(({data})=>setOffices(data))
  },[])
  return (
    <div id='map' className='max-h-96 '>
      <MapContainer center={[42.69097,23.340241]} zoom={11} style={{ height: '400px', width: '100%' }}>

      {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}> */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          offices ? offices.map(({location:{lat,long},contacts})=>(
            <Marker position={[lat, long]}>
            <Popup>
             {contacts.email} <br /> {contacts.phone}
            </Popup>
          </Marker>
          )) : <></>
        }
  </MapContainer>

    </div>
    
  )
}

export default Map