const fs = require('fs');
let file = 'components/home/BlogPreview.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  `           </div>
        </div>
      </section>
    );
  }

  if (posts.length === 0)`,
  `           </div>
          </div>
        </div>
      </section>
    );
  }

  if (posts.length === 0)`
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed BlogPreview JSX');
