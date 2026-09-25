const fs = require('fs');
let file = 'components/home/BlogPreview.tsx';
let content = fs.readFileSync(file, 'utf8');

// The main section looks like this at the end:
//           ))}
//         </div>
//       </div>
//     </section>
// We need to add one more </div> to close the relative group
content = content.replace(
  `          ))}
        </div>
      </div>
    </section>`,
  `          ))}
          </div>
        </div>
      </div>
    </section>`
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed main section closing tag');
