import React, { useRef, useEffect } from "react"
import maplibregl from "maplibre-gl"

const Marker = ({ map, place }) => {
  const markerRef = useRef()

  useEffect(() => {
    const marker = new maplibregl.Marker(markerRef)
      .setLngLat([place.longitude, place.latitude])
      .addTo(map)

    return () => marker.remove()
  })

  return <div ref={markerRef} />
}

const Markers = ({ map, places }) => {
  return (
    <>
      {places &&
        places.map(place => (
          <Marker key={place.name} map={map} place={place} />
        ))}
    </>
  )
}

export default Markers
