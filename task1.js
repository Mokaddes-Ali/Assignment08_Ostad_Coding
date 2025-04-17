class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function buildTree(n, nodes) {
    const treeNodes = [];
    for (let i = 0; i < n; i++) {
        treeNodes.push(new TreeNode(nodes[i].val));
    }
    for (let i = 0; i < n; i++) {
        const leftIndex = nodes[i].left;
        const rightIndex = nodes[i].right;
        if (leftIndex !== -1) {
            treeNodes[i].left = treeNodes[leftIndex];
        }
        if (rightIndex !== -1) {
            treeNodes[i].right = treeNodes[rightIndex];
        }
    }
    return treeNodes[0];
}

function inOrderTraversal(root) {
    const result = [];
    function traverse(node) {
        if (node === null) return;
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }
    traverse(root);
    return result.join('');
}

function preOrderTraversal(root) {
    const result = [];
    function traverse(node) {
        if (node === null) return;
        result.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root);
    return result.join('');
}

function postOrderTraversal(root) {
    const result = [];
    function traverse(node) {
        if (node === null) return;
        traverse(node.left);
        traverse(node.right);
        result.push(node.val);
    }
    traverse(root);
    return result.join('');
}

function main(input) {
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0]);
    const nodes = [];
    
    for (let i = 1; i <= n; i++) {
        const [val, left, right] = lines[i].split(' ').map(Number);
        nodes.push({ val, left, right });
    }
    
    const root = buildTree(n, nodes);
    
    console.log(inOrderTraversal(root));
    console.log(preOrderTraversal(root));
    console.log(postOrderTraversal(root));
}

// Example usage:
const input = `5
4 1 2
2 -1 -1
5 3 4
1 -1 -1
3 -1 -1`;

main(input);