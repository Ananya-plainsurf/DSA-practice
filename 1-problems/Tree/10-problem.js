// Lowest common ancestor of a binary tree

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//          3
//        /   \
//       5     1
//      / \   / \
//     6   2 0   8
//        / \
//       7   4

const root = new TreeNode(3);

root.left = new TreeNode(5);
root.right = new TreeNode(1);

root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);

root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);

root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

// function solve(root, target) {
//   function dfs(node, path) {
//     if (!node) return null;

//     path.push(node.val);

//     if (node.val === target) {
//       return [...path];
//     }

//     let left = dfs(node.left, path);
//     if (left) return left; // early termination

//     let right = dfs(node.right, path);
//     if (right) return right; // early termination

//     path.pop();
//     return null;
//   }

//   return dfs(root, []);
// }
// // dfs(root, [], "4");
// // console.log(result);

// function lca(node, p, q) {
//   let pPath = solve(root, p);
//   let qPath = solve(root, q);

//   console.log(pPath);
//   console.log(qPath);

//   let ans = null;

//   let n = Math.min(pPath.length, qPath.length);

//   for (let i = 0; i < n; i++) {
//     if (pPath[i] === qPath[i]) {
//       ans = pPath[i];
//     } else {
//       break;
//     }
//   }

//   return ans;
// }

function lca(root, p, q) {
  function dfs(node) {
    if (!node) return null;

    if (node.val === p || node.val === q) return node.val;

    let left = dfs(node.left);
    let right = dfs(node.right);

    if (left && right) return node.val;

    if (left) return left;

    return right;
  }
  return dfs(root);
}

console.log(lca(root, 5, 1));

//     function dfs(node, path){
//         if(!node) return null;

//         path.push(node.val);

//         if(node.val === target){
//             return [...path]
//         }

//         let left = dfs(node.left, path);
//         if(left) return left;

//         let right = dfs(node.right, path);
//         if (right) return right;

//         path.pop();
//         return null
//     }
//     return dfs(nodes, [])
// }
// var lowestCommonAncestor = function(root, p, q) {
//     let pVal = solve(root, p);
//     let qVal = solve(root, q);
//     let ans = null;
//     let n = Math.max(pVal.length, qVal.length);

//     for(let i = 0; i < n; i++){
//         if (pVal[i] === qVal[i]){
//             ans = pVal[i]
//         } else{
//             break;
//         }
//     }

//     return ans
// };
