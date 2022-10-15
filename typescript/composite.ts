type LeafNode = {
    data : string
};
type SubTree = {
    children : Array<LeafNode | SubTree >
}
type Tree = LeafNode | SubTree;

let tree : Tree = {
    children : [
        {
            data : "1"
        },
        {
            children : [
                {
                    data : "1"
                }
            ]
        }
     ]
}
console.log("Tree ",tree);