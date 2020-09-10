export function pullStack(items: any[], lockMap: number[]): any[] {
  const [first, ...rest] = items;
  const newStack = [first, ...rest, items[findFirstUnlocked(items, lockMap)]];
  return newStack.reduce((shifted, item, index) => {
    if (lockMap.includes(index)) {
      return [...shifted, item];
    }
    return [...shifted, newStack[findRightUnlocked(index, lockMap)]];
  }, []).slice(0, -1);
}
//First next unlocked item
export function findRightUnlocked(index: number, lockMap: number[]): number {
  let nextUnlockedIndex = ++index;
  while (lockMap.includes(nextUnlockedIndex)) {
    nextUnlockedIndex++;
  }
  return nextUnlockedIndex;
}
export function findFirstUnlocked(items: number[], lockMap: number[]): number {
  if (!lockMap.length) {
    return 0;
  }
  for (let i = 0; i < items.length; i++) {
    if (!lockMap.includes(i)) {
      return i;
    }
  }
}
export function pushStack(items: any, lockMap: number[]): any {
  const reverseArray = items.reverse();
  let newLockMap = [];
  lockMap.forEach(index => {
    newLockMap = [...newLockMap, (items.length - 1) - index];
  })
  return pullStack(reverseArray, newLockMap).reverse();
}
