function kmp(source, pattern) {
  let table = new Array(pattern.length).fill(0);
  {
    let i = 1,
      j = 0;
    while (i < pattern.length) {
      console.log(pattern[i], pattern[j]);
      if (pattern[i] === pattern[j]) {
        ++j, ++i;
        table[i] = j;
      } else {
        if (j > 0) {
          console.log(j > 0);
          j = table[j];
        } else {
          ++i;
        }
      }
    }
  }
  console.log(table);
  {
    let i = 0,
      j = 0;
    while (i < source.length) {
      if (pattern[j] === source[i]) {
        ++i, ++j;
      } else {
        if (j > 0) {
          j = table[j];
        } else {
          ++i;
        }
      }
      if (j === pattern.length) {
        return true;
      }
    }
    return false;
  }

}


function buildPatternTable(word) {
  const patternTable = [0];
  let prefixIndex = 0;
  let suffixIndex = 1;

  while (suffixIndex < word.length) {
    if (word[prefixIndex] === word[suffixIndex]) {
      patternTable[suffixIndex] = prefixIndex + 1;
      suffixIndex += 1;
      prefixIndex += 1;
    } else if (prefixIndex === 0) {
      patternTable[suffixIndex] = 0;
      suffixIndex += 1;
    } else {
      prefixIndex = patternTable[prefixIndex - 1];
    }
  }

  return patternTable;
}

//a b a b a b c a
//0 0 0 1 2 3 4 0 1

// abababc
// 0001234

let result = kmp('abababcabab', 'ABCDABD');
console.log(buildPatternTable("ABCDABD"))
console.log(result);
