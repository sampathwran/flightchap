const fs = require('fs');
let file = 'components/home/FlashDeals.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  "        {filteredDeals.length > 0 && (\n          </div>\n        <div className=\"mt-8 text-center sm:hidden\">",
  "        </div>\n        {filteredDeals.length > 0 && (\n          <div className=\"mt-8 text-center sm:hidden\">"
);

content = content.replace(
  "           </div>\n        </div>\n      </section>\n    );\n  }",
  "           </div>\n        </div>\n        </div>\n      </section>\n    );\n  }"
);

fs.writeFileSync(file, content, 'utf8');
console.log("JSX Fixed");
