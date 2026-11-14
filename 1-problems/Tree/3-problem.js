// diameter problem
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode("1");
root.left = new TreeNode("2");
root.right = new TreeNode("3");

root.left.left = new TreeNode("4");
root.left.right = new TreeNode("5");

root.left.left.left = new TreeNode("8");
root.left.left.right = new TreeNode("9");

root.right.left = new TreeNode("6");
root.right.right = new TreeNode("7");

root.right.left.left = new TreeNode("10");
root.right.left.right = new TreeNode("11");
function diameter(root) {
  let diameter = 0;

  function height(node) {
    if (!node) {
      return -1;
    }

    let left = height(node.left);
    let right = height(node.right);

    diameter = Math.max(diameter, left + right + 2);
    return 1 + Math.max(left, right);
  }

  height(root);
  return diameter;
}

console.log(diameter(root));

//            1
//           / \
//     //   2   3
//     //  / \  /\
//     // 4   5 6 7
// since using if(!node) return 0, diameter = Mtah.max(diameter, left+ right)
// diameter = 0
// diameter(1)
// |    call diameter(2)
// |   |
// |   |___diameter(4)
// |   |   |___diameter(null) return 0
// |   |   |___diameter(null) return 0
// |   |   |____ diameter = Math.max(diameter, left + right ) = (0 , (0+0)) = 0
// |           return 1 + Math.max(0, 0) = 1
// |   |
// |   |___diameter(5)
// |   |   |___diameter(null) return 0
// |   |   |___diameter(null) return 0
// |   |   |____ diameter = Math.max(diameter, left + right ) = (0 , (0+0)) = 0
// |   |         return 1 + Math.max(0, 0) = 1
// |   |
// |   |____ diameter = Math.max(diameter, left + right ) = max(0, 1+1 ) = 2
// |       return height = 2
// |
// |____diameter(3)
// |   |____diameter(6)
// |   |   |____diameter(null) return 0
// |   |   |____diameter(null) return 0
// |   |   |____ diameter = (0, (0+0)) = 0
// |   |           height = 1
// |   |____diameter(7)
// |   |   |____diameter(null) return 0
// |   |   |____diameter(null) return 0
// |   |   |____ diameter = (0, (0+0)) = 0
// |   |           height = 1
// |   |
// |   |____ diameter = (0, (1+1)) = 2
// |         height = 2
// |
// |____ diameter = (2, (2+2)) = 4
//       height = 3
