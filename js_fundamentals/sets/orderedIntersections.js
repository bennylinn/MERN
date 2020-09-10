/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

/**
 * Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * @param   {Array<number>} sortedA
 * @param   {Array<number>} sortedB
 *          @sortedA and @sortedB are both sorted multisets
 *          (multi in that it can contain multiple dupes)
 * @return  {Array<number>}
 *          The sorted set intersection: a new array that
 *          is sorted and contains only the shared values
 *          between the two arrays deduped
 * Time:    O(...)
 * Space:   O(...)
 */

// const numsA1 = [0, 1, 2, 2, 2, 7];
// const numsB1 = [2, 2, 6, 6, 7];

function orderedIntersection(sortedA = [], sortedB = []) {
    // if either array is undefined or empty we return empty array
    if (sortedA === [] || sortedB === []) {
        return [];
    }

    let intersection = []; // 2, 7

    for(var i=0; i < sortedA.length; i++) {
        // check if we've seen this number
        if(intersection.includes(sortedA[i])) {
            continue
        // else check if current number is in second array
        } else if (sortedB.includes(sortedA[i])) {
            intersection.push(sortedA[i]);
        }
    }

    return intersection;
}

function orderedIntersection2(sortedA = [], sortedB = []) {
    // if either array is undefined or empty we return empty array
    if (sortedA === [] || sortedB === []) {
        return [];
    }
    let intersection = [];
    if (sortedA.length < sortedB.length) {
        var shorter = sortedA;
        var longer = sortedB;
    } else {
        var shorter = sortedB
        var longer = sortedA
    }
    let index = 0;
    
    for(var i=0; i < shorter.length; i++) {
        while(shorter[i] > longer[index]) {
            index++;
        }
        if(shorter[i] < longer[index]) {
            continue
        } else if (shorter[i] === longer[index] && !intersection.includes(shorter[i])) {

            intersection.push(shorter[i])
        }
    }
    
    return intersection;
}

module.exports = { orderedIntersection };
