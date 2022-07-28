/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {
    return function(n: number): number {
        if (n === 1) return 1;
        let lower: number = 1;
        let upper: number = n;
        let mid = Math.ceil(n / 2);
        while(lower + 1 !== upper) {
            if(isBadVersion(mid)) {
                upper = mid;
                mid = Math.floor((upper + lower) / 2)
            } else {
                lower = mid;
                mid = Math.floor((upper + lower) / 2)
            }
        }
        return isBadVersion(lower) ? lower : upper;
    };
};