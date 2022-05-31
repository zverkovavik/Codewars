// We should form right markup based on current string (this is a single string with /n for turning out on the next line)

// div
//     span
//     span
//     img
//         src somefile.png
// div
//     div
//       div
//     div

const pairedTags = new Set(['div', 'span']);
const twoLineTags = new Set(['div']);
const unpairedTags = new Set(['img']);

let s = 'div\n    span\n    span\n    img\n        src somefile.png\ndiv\n    div\n        div\n    div';

//  we find the count of spaces
function findLevel(line) {
    let count = 0;
    if (typeof line === 'string') {
        line = line.split('');
    }
    for (let i of line)
        if (i === ' ') {
            count += 1;
        } else {
            return count;
        }
}

// recursive function created dynamic nested array 
function buildTree(lines) {
    // levels is the count of spaces in each line
    let levels = [];
    if (!lines.length) {
        return 0;
    }

    // we define node as an array which consists of a tag on the first place and a content on the second place
    let subNodes = [];
    for (let line of lines) {
        levels.push(findLevel(line));
    }
    let i = 0;
    while (i < lines.length) {
        if (findLevel(lines[i]) === Math.min(...levels)) {
            let wordLine = lines[i];
            // content is all lines from current word line until next line which level is more or equal  
            let content = [];
            let j = i + 1;
            while (j < lines.length) {
                let lineLvl = findLevel(lines[j])
                if (lineLvl > Math.min(...levels)) {
                    content.push(lines[j])
                } else {
                    i = j - 1;
                    break;
                }
                j += 1;
            }
            subNodes.push([wordLine, content]);
        }
        i += 1;
    }
    // we redefine mutable object lines
    lines.splice(0, lines.length);
    for (let element of subNodes) {
        lines.push(element);
    }

    for (let line of lines) {
        buildTree(line[1]);
    }
}

function wordProcessing(wordLine, empty) {
    let lvl = findLevel(wordLine);
    let word = wordLine.trim();
    let openTagLine = '';
    let closeTagLine = '';

    if (pairedTags.has(word)) {
        if (empty) {
            if (twoLineTags.has(word)) {
                openTagLine = `${' '.repeat(lvl)}<${word}>\n`
                closeTagLine = `${' '.repeat(lvl)}</${word}>\n`
            } else {
                openTagLine = `${' '.repeat(lvl)}<${word}>`
                closeTagLine = `</${word}>\n`
            }
        } else {
            openTagLine = `${' '.repeat(lvl)}<${word}>\n`
            closeTagLine = `${' '.repeat(lvl)}</${word}>\n`
        }
    } else if (unpairedTags.has(word)) {
        openTagLine = `${" ".repeat(lvl)}<${word}`
        closeTagLine = "/>\n"
    } else {
        let [attribute, argument] = word.split(' ');
        openTagLine = ` ${attribute}=${argument} `
        closeTagLine = ""
    }

    return [openTagLine, closeTagLine];
}

//      
function treeToStr(trees) {
    // This is condition of recursion stop
    if (!trees.length) {
        return '';
    }
    let s = '';
    for (let wordLine of trees) {
        wordLine = wordLine[0];

        let empty = !(wordLine[1].length);
        let [openTag, closeTag] = wordProcessing(wordLine, empty);
        s += openTag;
        s += treeToStr(wordLine[1]);
        s += closeTag;
    }
    return s;
}

const lines = s.split('\n');
buildTree(lines);
let processed_s = treeToStr(lines);
console.log(processed_s);
