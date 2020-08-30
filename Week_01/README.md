## 笔记
1. display: inline-block 对齐方式为 baseline 对齐
2. 多层 for 循环，跳出指定 for 循环可以加标签
```js
outer: for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (pattern[i][j])
                    continue
                let tmp = clone(pattern);
                tmp[i][j] = player;
                let r = bestChoice(tmp, 3 - player).result;

                if (-r > result) {
                    result = -r;
                    point = [j, i];
                }
                if (result == 1) {
                    break outer;
                }
            }
        }
```