import re

with open('components/home/FlashDeals.tsx', 'r') as f:
    content = f.read()

# Fix the JSX
content = content.replace("        {filteredDeals.length > 0 && (\n          </div>\n        <div className=\"mt-8 text-center sm:hidden\">", 
                          "        </div>\n        {filteredDeals.length > 0 && (\n          <div className=\"mt-8 text-center sm:hidden\">")

# Fix the Skeleton close div
content = content.replace("           </div>\n        </div>\n      </section>\n    );\n  }",
                          "           </div>\n        </div>\n        </div>\n      </section>\n    );\n  }")

# Check where the group div starts in skeleton
skeleton_match = re.search(r'(<div className="relative group">[\s\S]*?<div ref=\{sliderRef\} className="flex flex-row overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar">)', content)

with open('components/home/FlashDeals.tsx', 'w') as f:
    f.write(content)
print("JSX Fixed")
