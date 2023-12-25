const bfsSolution = (nodeMap, h, solution = [],movement) => {
    
    if (h[0] == 0 && h[1] == 0) {
        solution.push({bucketX:0,bucketY:0,explanation:"Water Jug Challenge"})
        return ;
    }
    /*
    The node map is recursively traversed at the positions stored in the h->head array
    */
    bfsSolution(nodeMap, nodeMap[h],solution,movement);
    const bucketX = h[0]// the cube x is extracted and stored in the bucketX variable.
    const bucketY = h[1]//the cube y is extracted and stored in the bucketY variable.
    const explanation = movement[h]
    
    /* 
    The solution is saved in the solution array passed by parameter
    */
    solution.push({bucketX,bucketY,explanation})
}

const breadthFirstSearch = (bucketX, bucketY, target) => {

    const nodeRe = {}; // Mark the nodes it's visited along the way.(registered node)
    const nodeMap = {};// It keeps a record of the movements made. (node map)
    let isSolvable = false;
    const movement = {} // returns the movement made (empty, transfer,fill).
    const queue = [];// It is a queue used to store the nodes that need to be explored.
    const solution = [] //It is an array used to store the found solution.

    queue.push([0, 0]);//The initial node [0, 0] is added to queue (queue).


    while (queue.length > 0) {// runs in a loop as long as the queue is not empty

        /*
        In each iteration of the while loop, the first element is extracted from the queue using 
        the shift() function and is assigned to the variable h -> head. If the queue is empty, 
        yhe variable u will be undefined.
        */
        let h = queue.shift(); 

        if (nodeRe[h] == 1) {
            /*
               If the node has already been visited, it is skipped and skipped to the next iteration.
            */
            continue;
        }
 
        if (h[0] > bucketX || h[1] > bucketY || h[0] < 0 || h[1] < 0) {
            /*
            If the node is outside the boundaries of (x, y) or has negative coordinates, it is ignored.
            */
            continue;
        }
        /*
        Mark the visited node.
        */
        nodeRe[h] = 1;

        /*
        Check if the target has been reached, i.e. if the amount of water in the bucket has been 
        reached X (h[0]) or in the cube Y (h[1]) equals the target. If the goal has been reached, 
        the isSolvable variable is set to true.
        */
        if (h[0] == target || h[1] == target) {
            isSolvable = true;
 
            bfsSolution(nodeMap,h,solution,movement)
      
            /*
            Then, depending on whether cube X or cube Y hit the target, 
            The resulting state is added to the solution. If cube X hit the target and cube Y 
            is not empty, the {bucketX:h[0],bucketY:0} status is added to the solution. If cube Y reached the target 
            and bucket X is not empty, the state {bucketX:0,bucketY:h[1]} is added to the solution.
            */
            if (h[0] == target) {
                if (h[1] != 0) {
                    solution.push({bucketX:h[0],bucketY:0, explanation:"Solved"})

                }
            } else {
                if (h[0] != 0) {
                    solution.push({bucketX:0,bucketY:h[1], explanation:"Solved"})

                }
            }
            
        return solution

        }
        /*
        We explore the possible movements from the current state of the jars and add 
        the resulting states to a queue. Each state represents the amount of water 
        in each jar.
        */

       /*Fill Bucket Y */
        // Check that the node at its position [[h[0], y]] is not visited.
        if (nodeRe[[h[0], bucketY]] != 1) {
            // if it's not, we add it to the queue.
            queue.push([h[0], bucketY]);
            // Their relationship is saved to track the path from the current node.
            nodeMap[[h[0], bucketY]] = h;
            // Their movement is saved.
            movement[[h[0], bucketY]] = "Fill bucket y"
            
        }
        /*Fill Bucket X */
        if (nodeRe[[bucketX, h[1]]] != 1) {
            queue.push([bucketX, h[1]]);
            nodeMap[[bucketX, h[1]]] = h;
            movement[[bucketX, h[1]]] = "Fill bucket x"

        }

        /* 
        Store the difference between the amount of water in the cube Y (h[1]) and 
        the amount of water in the target bucket (bucketY) before performing a 
        water transfer.
        */
        let d = bucketY - h[1];
 
        // Transfer Water from Bucket X to Bucket Y
        if (h[0] >= d) {
            /* 
            the amount of water in the resulting bucket is calculated before transfer, 
            subtracting the difference calculated above from the amount of water in cube X (h[0]). 
            This quantity is stored in variable c. 
            */
            let c = h[0] - d;
            /*
            It is checked if the resulting state (with the amount of water stored in C and 
            the amount of water in the bucketY ) is a valid state. 
            In other words, this state has not been visited previously
            */
            if (nodeRe[[c, bucketY]] != 1) {
                /*
                If the status is valid, it is added to the queue for further exploration
                */
                queue.push([c, bucketY]);
                /*
                the node map (nodeMap) is updated to keep track of movements made.
                */
                nodeMap[[c, bucketY]] = h;
                /* 
                we save the movement in the same coordinate where we save the route 
                tracking in the nodeMap 
                */
                movement[[c, bucketY]] = "Transfer bucket x to bucket y"
            }

            
        } else {
            let c = h[0] + h[1];
            
            if (nodeRe[[0, c]] != 1) {
                queue.push([0, c]);
                nodeMap[[0, c]] = h;
                movement[[0, c]] = "Transfer bucket x to bucket y"
            }
         
        }
        d = bucketX - h[0];
        // Transfer Water from Bucket Y to Bucket X
        if (h[1] >= d) {
            let c = h[1] - d;
            
            if (nodeRe[[bucketX, c]] != 1) {
                queue.push([bucketX, c]);
                nodeMap[[bucketX, c]] = h;
                movement[[bucketX, c]] = "Transfer bucket y to bucket x"
            }
            
        } else {
            let c = h[0] + h[1];
            
            if (nodeRe[[c, 0]] != 1) {
                queue.push([[c, 0]]);
                nodeMap[[c, 0]] = h;
                movement[[c, 0]] = "Transfer bucket y to bucket x"
            }
 
        }
        //empty bucket Y
        /*Check if cube Y (0) is empty 
        (i.e., if the amount of water in bucket Y (0) is equal to zero). 
        */
       if (nodeRe[[h[0], 0]] != 1) {
            /*If the cube Y (0) is empty, the resulting state is added to the queue 
            and the node map (nodeMap) is updated. */
            queue.push([h[0], 0]);
            nodeMap[[h[0], 0]] = h;
            movement[[h[0], 0]] = "Dumb bucket y"        
        }
        //empty bucket X
        if (nodeRe[[0, h[1]]] != 1) {
            queue.push([0, h[1]]);
            nodeMap[[0, h[1]]] = h;
            movement[[0, h[1]]] = "Dumb bucket x"
        }
    }
    if (!isSolvable) {
        solution.push({msg:"Solution not possible"})
        return solution      
    }
}

module.exports = {
    breadthFirstSearch
}