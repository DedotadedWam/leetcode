/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {
    return function(n: number): number {
        while(isBadVersion(n) && n !== 0) {
            n--;
        };
        return n + 1;
    };
};