/**
 * Coordinates and distance calculation utility for West Midlands postcode areas.
 */

interface GeoCoord {
  lat: number;
  lng: number;
}

const POSTCODE_COORDS: Record<string, GeoCoord> = {
  // Birmingham districts
  B: { lat: 52.4862, lng: -1.8904 },
  B1: { lat: 52.478, lng: -1.902 },
  B2: { lat: 52.479, lng: -1.898 },
  B3: { lat: 52.484, lng: -1.902 },
  B4: { lat: 52.485, lng: -1.892 },
  B5: { lat: 52.472, lng: -1.895 },
  B15: { lat: 52.463, lng: -1.921 }, // Edgbaston
  B17: { lat: 52.460, lng: -1.961 }, // Harborne
  B29: { lat: 52.435, lng: -1.944 }, // Selly Oak
  B72: { lat: 52.563, lng: -1.825 }, // Sutton Coldfield
  B73: { lat: 52.548, lng: -1.848 }, // Boldmere
  B74: { lat: 52.589, lng: -1.841 }, // Four Oaks
  B90: { lat: 52.404, lng: -1.821 }, // Shirley
  B91: { lat: 52.413, lng: -1.778 }, // Solihull
  B92: { lat: 52.437, lng: -1.776 }, // Olton
  B93: { lat: 52.378, lng: -1.737 }, // Knowle/Dorridge
  // Wolverhampton & Black Country
  WV: { lat: 52.5862, lng: -2.1288 },
  WV1: { lat: 52.587, lng: -2.128 },
  WV6: { lat: 52.602, lng: -2.164 },
  DY: { lat: 52.5123, lng: -2.0811 }, // Dudley
  DY1: { lat: 52.513, lng: -2.083 },
  DY8: { lat: 52.457, lng: -2.148 }, // Stourbridge
  WS: { lat: 52.5843, lng: -1.9823 }, // Walsall
  WS1: { lat: 52.583, lng: -1.981 },
  // Coventry & Warwickshire
  CV: { lat: 52.4068, lng: -1.5197 },
  CV1: { lat: 52.407, lng: -1.507 },
  CV32: { lat: 52.296, lng: -1.534 } // Leamington Spa
};

function haversineMiles(c1: GeoCoord, c2: GeoCoord): number {
  const R = 3958.8; // Earth radius in miles
  const dLat = ((c2.lat - c1.lat) * Math.PI) / 180;
  const dLng = ((c2.lng - c1.lng) * Math.PI) / 180;
  const lat1 = (c1.lat * Math.PI) / 180;
  const lat2 = (c2.lat * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

/**
 * Extracts the outer postcode prefix (e.g. 'B15' from 'B15 2TT', or 'B' if unknown).
 */
export function extractOutwardCode(postcode: string): string {
  const clean = postcode.toUpperCase().trim().replace(/[^A-Z0-9]/g, '');
  const match = clean.match(/^([A-Z]{1,2}\d{1,2}[A-Z]?)/);
  return match?.[1] ?? '';
}

/**
 * Estimates distance in miles between two UK postcodes.
 * Defaults to 12 miles if postcodes cannot be resolved.
 */
export function estimatePostcodeDistance(fromPostcode: string, toPostcode: string): number {
  const code1 = extractOutwardCode(fromPostcode);
  const code2 = extractOutwardCode(toPostcode);

  const coord1 = POSTCODE_COORDS[code1] || POSTCODE_COORDS[code1.replace(/\d.*$/, '')] || POSTCODE_COORDS.B;
  const coord2 = POSTCODE_COORDS[code2] || POSTCODE_COORDS[code2.replace(/\d.*$/, '')] || POSTCODE_COORDS.B;

  if (code1 && code2 && code1 === code2) {
    return 3; // Local move within same outward postal sector
  }

  const straightLine = haversineMiles(coord1, coord2);
  // Real driving distance is approximately 1.3x straight-line in urban/suburban UK networks
  return Math.max(3, Math.round(straightLine * 1.3));
}
