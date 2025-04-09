#!/bin/sh

INPUT_README="./README.md"
TEMP_README="./TEMP_README.md"
MERMAID="./doc/dependencies.mmd"

flag=0

while IFS= read -r line || [ -n "$line" ]; do     # Using IFS mode can avoid missing spaces
  if [ $flag -eq 0 ]; then
    printf "%s\n" "$line" >> "$TEMP_README"
    if [ "$line" = "\`\`\`mermaid" ]; then
      flag=1
      while IFS= read -r mermaid_line; do
        printf "%s\n" "$mermaid_line" >> "$TEMP_README"
      done < "$MERMAID"
    fi
  else
    if [ "$line" = "\`\`\`" ]; then
      printf "%s\n" "$line" >> "$TEMP_README"
      flag=0
      break
    fi
  fi
done < "$INPUT_README"

mv "$TEMP_README" "$INPUT_README"