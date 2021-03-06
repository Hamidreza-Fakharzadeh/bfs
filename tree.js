class Nodes {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}
const a = new Nodes('a');
const b = new Nodes('b');
const c = new Nodes('c');
const d = new Nodes('d');
const e = new Nodes('e');
const f = new Nodes('f');

//        a
//       / \
//      b   c
//     / \   \
//    d   e   f

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const bfs = (root) => {
	const queue = [ root ];
	let arr = [];

	while (queue.length > 0) {
		const curr = queue.shift();
		arr.push(curr.val);

		if (curr.left !== null) {
			queue.push(curr.left);
		}
		if (curr.right !== null) {
			queue.push(curr.right);
		}
	}

	return arr;
};

bfs(a);
console.log(bfs(a))
