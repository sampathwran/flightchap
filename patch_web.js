const fs = require('fs');
const file = 'components/home/TopDestinations.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the rating and reviews boxes
content = content.replace(
  /<div className="absolute top-3 left-3 bg-white\/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-gray-800 flex items-center shadow-sm">\s*<span className="text-yellow-500 mr-1">.*?<\/span> \{city\.rating\}\s*<\/div>\s*<div className="absolute bottom-3 right-3 bg-black\/60 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-white">\s*\{city\.reviews\} \{t\('reviews'\)\}\s*<\/div>/s,
  {city.stopovers && (
                          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-gray-800 flex items-center shadow-sm">
                            <span className="text-[#673AB7] mr-1">✈️</span> {city.stopovers}
                          </div>
                        )}
                        {city.duration && (
                          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-white flex items-center">
                            <span className="mr-1">⏱️</span> {city.duration}
                          </div>
                        )}
);

// Replace Meta Info section
content = content.replace(
  /\{city\.bestTime && \(\s*<div className="flex items-center text-xs text-gray-600 font-medium">\s*<span className="mr-2 text-sm">.*?<\/span> \{t\('bestTime'\)\} \{city\.bestTime\}\s*<\/div>\s*\)\}\s*\{city\.startingPrice && \(\s*<div className="flex items-center text-xs text-gray-600 font-medium">\s*<span className="mr-2 text-sm">.*?<\/span> \{t\('startingFrom'\)\} <span className="font-bold text-gray-900 ml-1">\\$\{city\.startingPrice\} \{t\('perNight'\)\}<\/span>\s*<\/div>\s*\)\}/s,
  {city.airlines && (
                            <div className="flex items-center text-xs text-gray-600 font-medium">
                              <span className="mr-2 text-sm">🛫</span> Airlines: <span className="font-bold text-gray-900 ml-1">{city.airlines}</span>
                            </div>
                          )}
                          {city.baggage && (
                            <div className="flex items-center text-xs text-gray-600 font-medium mt-1">
                              <span className="mr-2 text-sm">🧳</span> Baggage: <span className="font-bold text-gray-900 ml-1">{city.baggage}</span>
                            </div>
                          )}
                          {city.startingPrice && (
                            <div className="flex items-center text-xs text-gray-600 font-medium mt-1">
                              <span className="mr-2 text-sm">💰</span> Starting from: <span className="font-bold text-[#673AB7] ml-1">\</span>
                            </div>
                          )}
);

fs.writeFileSync(file, content);
console.log('Web app updated');
