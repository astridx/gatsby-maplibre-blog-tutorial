import React, { useRef, useEffect, useState } from "react"
import maplibregl from "maplibre-gl"
import "maplibre-gl/dist/maplibre-gl.css"

const mapContainerStyle = {
  width: "100%",
  height: "200px",
}

const Map = () => {
  const mapContainerRef = useRef(null)

  const [map, setMap] = useState(null)

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: 'https://demotiles.maplibre.org/style.json',
      center: [-0.687787, 38.185674462487874],
      zoom: 5,
    })
    map.addControl(new maplibregl.NavigationControl(), "top-right")

    setMap(map)

    return () => map.remove()
  }, [])

  return <div ref={mapContainerRef} style={mapContainerStyle} />
}

export default Map
