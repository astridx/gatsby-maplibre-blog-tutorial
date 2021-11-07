import React, { useRef, useEffect, useState } from "react"
import maplibregl from "maplibre-gl"
import bbox from "@turf/bbox"
import { multiPoint } from "@turf/helpers"
import Markers from "./markers"
import "maplibre-gl/dist/maplibre-gl.css"

const mapContainerStyle = {
  width: "100%",
  height: "200px",
}

const places = [
  {
    name: "Spanien",
    longitude: -0.687787,
    latitude: 38.185674462487874,
  },
  {
    name: "Germany",
    longitude: 7.587787,
    latitude: 50.7438,
  },
  {
    name: "Frankreich",
    longitude: 3.687787,
    latitude: 45.753,
  },
]

const Map = () => {
  const mapContainerRef = useRef(null)

  const [map, setMap] = useState(null)

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [-0.687787, 38.185674462487874],
      zoom: 5,
    })
    map.addControl(new maplibregl.NavigationControl(), "top-right")

    setMap(map)

    return () => map.remove()
  }, [])

  useEffect(() => {
    if (!map) return

    if (places.length !== 0) {
      const coords = []
      places.forEach(place => {
        coords.push([place.longitude, place.latitude])
      })
      const feature = multiPoint(coords)
      const box = bbox(feature)

      map.fitBounds(
        [
          [box[0], box[1]],
          [box[2], box[3]],
        ],
        {
          padding: 20,
          maxZoom: 14,
          duration: 2000,
        }
      )
    } else {
      map.easeTo({
        center: [-73.9856, 40.7497],
        zoom: 10,
        duration: 2000,
      })
    }
  }, [map])

  return (
    <div ref={mapContainerRef} style={mapContainerStyle}>
      {places && map && <Markers map={map} places={places} />}
    </div>
  )
}

export default Map
