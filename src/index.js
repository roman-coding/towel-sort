// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) return [];

    const res = matrix.reduce((acc, cur, index) => {
        return acc.concat(index % 2 === 0 ? cur : cur.reverse());
    }, []);

    return res;
};
