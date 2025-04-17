function calculateTreeHeight() {
    const input = `5
-1 0 0 1 1`;
    

    const lines = input.split('\n');
    const n = parseInt(lines[0]);
    const parentArray = lines[1].split(' ').map(Number);
    

    const tree = {};
    let root = -1;
    
    for (let i = 0; i < n; i++) {
        const parent = parentArray[i];
        if (parent === -1) {
            root = i;
        } else {
            if (!tree[parent]) {
                tree[parent] = [];
            }
            tree[parent].push(i);
        }
    }
    
    function dfs(node) {
        if (!tree[node]) {
            return 1;
        }
        let maxHeight = 0;
        for (const child of tree[node]) {
            const height = dfs(child);
            if (height > maxHeight) {
                maxHeight = height;
            }
        }
        return maxHeight + 1;
    }
    
    const height = dfs(root);
    console.log(height); 
}


calculateTreeHeight();