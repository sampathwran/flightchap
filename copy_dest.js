const fs = require('fs');

let FlightchapCode = fs.readFileSync('C:\\src\\Flightchap-web\\src\\components\\PopularDestinations.tsx', 'utf8');

// Modify the code to remove dependencies
FlightchapCode = FlightchapCode.replace(/import \{ useTranslation \} from "@\/lib\/i18n";\n/g, '');
FlightchapCode = FlightchapCode.replace(/import \{ trackEvent \} from "@\/lib\/analytics";\n/g, '');
FlightchapCode = FlightchapCode.replace(/const \{ t \} = useTranslation\(\);\n/g, '');

// Fix 't' function calls
FlightchapCode = FlightchapCode.replace(/t\("Best Destinations"\)/g, '"Top Destinations"');
FlightchapCode = FlightchapCode.replace(/t\("Explore the world's top countries and vibrant cities."\)/g, '"Explore the world\'s top countries and vibrant cities."');

// Change references from '@/firebase' to '../../lib/firebase'
FlightchapCode = FlightchapCode.replace(/import \{ db \} from "@\/firebase";/g, "import { db } from '../../lib/firebase';");

// Change component name if necessary
FlightchapCode = FlightchapCode.replace(/export default function PopularDestinations/g, 'export default function TopDestinations');

// Fix trackEvent and View Hotels
FlightchapCode = FlightchapCode.replace(/trackEvent\("clicks"\);/g, '');
FlightchapCode = FlightchapCode.replace(/View Hotels/g, 'Find Flights');

// Write to flightchap
fs.writeFileSync('C:\\src\\flightchap\\components\\home\\TopDestinations.tsx', FlightchapCode, 'utf8');
console.log('Successfully copied and patched PopularDestinations for flightchap');
