const fs = require('fs');
let content = fs.readFileSync('components/home/TopDestinations.tsx', 'utf8');

const newMeta = `{city.airlines && (
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
                              <span className="mr-2 text-sm">💰</span> Starting from: <span className="font-bold text-[#673AB7] ml-1">\${city.startingPrice}</span>
                            </div>
                          )}`;

content = content.replace(/\{city\.bestTime && \([\s\S]*?\{t\('perNight'\)\}<\/span>\s*<\/div>\s*\)\}/, newMeta);

const newImageOverlay = `{city.stopovers && (
                          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-gray-800 flex items-center shadow-sm">
                            <span className="text-[#673AB7] mr-1">✈️</span> {city.stopovers}
                          </div>
                        )}
                        {city.duration && (
                          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-white flex items-center">
                            <span className="mr-1">⏱️</span> {city.duration}
                          </div>
                        )}`;

content = content.replace(/<div className="absolute top-3 left-3 bg-white\/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-gray-800 flex items-center shadow-sm">[\s\S]*?\{city\.reviews\} \{t\('reviews'\)\}\s*<\/div>/, newImageOverlay);

fs.writeFileSync('components/home/TopDestinations.tsx', content, 'utf8');
console.log("Patched successfully!");
