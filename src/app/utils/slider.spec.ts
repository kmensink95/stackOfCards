import { pullStack, findFirstUnlocked, pushStack } from './slider'

describe('pullStack', () => {
    it('should change the order of items', () => {
        const input = [1,2,3,4,5];
        const lockMap = [0];
        const expectResult = [1, 3, 4, 5, 2];
        expect(pullStack(input, lockMap)).toEqual(expectResult);
    })

    it('should change the order of items with second locked', () => {
        const input = [1,2,3,4,5];
        const lockMap = [1];
        const expectResult = [3, 2, 4, 5, 1];
        expect(pullStack(input, lockMap)).toEqual(expectResult);
    })

    it('should change the order of items with first 2 locked', () => {
        const input = [1,2,3,4,5];
        const lockMap = [0, 1];
        const expectResult = [1, 2, 4, 5, 3];
        expect(pullStack(input, lockMap)).toEqual(expectResult);
    })

    it('should change the order of items with third locked', () => {
        const input = [1,2,3,4,5];
        const lockMap = [2];
        const expectResult = [2, 4, 3, 5, 1];
        expect(pullStack(input, lockMap)).toEqual(expectResult);
    })

    it('should change the order of items with second and third locked', () => {
        const input = [1,2,3,4,5];
        const lockMap = [1, 2];
        const expectResult = [4, 2, 3, 5, 1];
        expect(pullStack(input, lockMap)).toEqual(expectResult);
    })

    it('should change the order of items with first and third locked', () => {
        const input = [1,2,3,4,5];
        const lockMap = [0, 2];
        const expectResult = [1,4,3,5,2];
        expect(pullStack(input, lockMap)).toEqual(expectResult);
    })

    it('should change the order of items with no locked numbers', () => {
        const input = [1,2,3,4,5];
        const lockMap = [];
        const expectResult = [2, 3, 4, 5, 1];
        expect(pullStack(input, lockMap)).toEqual(expectResult);
    })
})

describe('findFirstUnlocked', () => {
    it('shoudl find the first unlocked item inside an array of items', () => {
        const input = [1,2,3,4,5];
        const lockMap = [1];
        const expectResult = 0;
        expect(findFirstUnlocked(input, lockMap)).toEqual(expectResult);
    })
})

describe('pushStack', () => {
    it('should reverse the order of items when there are none locked', () => {
        const input = [1,2,3,4,5];
        const lockMap = [];
        const expectResult = [5, 1, 2, 3, 4];
        expect(pushStack(input, lockMap)).toEqual(expectResult);
    })
    it('should reverse the order of items when the first is locked', () => {
        const input = [1,2,3,4,5];
        const lockMap = [0];
        const expectResult = [1, 5, 2, 3, 4];
        expect(pushStack(input, lockMap)).toEqual(expectResult);
    })
    it('should reverse the order of items when the first and second items are locked', () => {
        const input = [1,2,3,4,5];
        const lockMap = [0, 1];
        const expectResult = [1, 2, 5, 3, 4];
        expect(pushStack(input, lockMap)).toEqual(expectResult);
    })
    it('should reverse the order of items when the first item is locked', () => {
        const input = [1,2,3,4,5];
        const lockMap = [1];
        const expectResult = [5, 2, 1, 3, 4];
        expect(pushStack(input, lockMap)).toEqual(expectResult);
    })
    it('should reverse the order of items with only first number unlocked', () => {
        const input = [1,2,3,4,5];
        const lockMap = [1, 2];
        const expectResult = [5, 2, 3, 1, 4];
        expect(pushStack(input, lockMap)).toEqual(expectResult);
    })
    it('should reverse the order of items with second locked', () => {
        const input = [1,2,3,4,5];
        const lockMap = [2];
        const expectResult = [5, 1, 3, 2, 4];
        expect(pushStack(input, lockMap)).toEqual(expectResult);
    })
    it('should reverse the order of items with first and second locked', () => {
        const input = [1,2,3,4,5];
        const lockMap = [0, 2];
        const expectResult = [1, 5, 3, 2, 4];
        expect(pushStack(input, lockMap)).toEqual(expectResult);
    })
})