function inverterArray<T>(array: T[]): T[] {
    return array.slice().reverse();
}

console.log(inverterArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(inverterArray(["a", "b", "c", "d"])); // ["d", "c", "b", "a"]
