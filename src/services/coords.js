import OsGridRef from 'mt-osgridref'

/**
 * convert OS BNG GAZETTEER_ENTRY.GEOMETRY_X/Y to WGS84 lat/lon
 * @param {{ x: number, y: number }} BNG
 * @returns {{ lat: nummber, lng: number }}
 */
export function bngToLatLng({ x, y }) {
  const point = new OsGridRef(x, y)
  const { _lat, _lng } = OsGridRef.osGridToLatLong(point)
  return { lat: _lat, lng: _lng }
}
