function getTreeJson(rootNode, config = {}) {
    const { dataKey = 'val', leftChildKey = 'left', rightChildKey = 'right' } = config;

    function generateTreeJson(currentNode, position) {
        if (!currentNode) {
            return;
        }

        const leftObjStructure = generateTreeJson(currentNode[leftChildKey], 'left');
        const rightObjStructure = generateTreeJson(currentNode[rightChildKey], 'right');

        const objStructure = {
            name:
                currentNode[dataKey] || currentNode[dataKey] === 0 ? currentNode[dataKey].toString() : null,
            children: [],
            position
        };

        if (leftObjStructure) {
            objStructure.children.push(leftObjStructure);
        }
        if (rightObjStructure) {
            objStructure.children.push(rightObjStructure);
        }

        return objStructure;
    }

    return generateTreeJson(rootNode, 'center');
}

function createGraph({
    title,
    data,
    host = document.getElementById('diagram-container'),
    graphHeight = 500,
    graphWidth = 500
}) {
    // ************** Generate the tree diagram	 *****************

    let errMsg;
    if (!data) {
        errMsg = 'Please pass data';
    }

    if (!host) {
        errMsg = 'Please pass host';
    }

    if (errMsg) {
        console.error(errMsg);
        return errMsg;
    }

    if (title) {
        var h = document.createElement('h4'); // Create a <h1> element
        var t = document.createTextNode(title); // Create a text node
        h.appendChild(t);
        host.appendChild(h);
    }

    // console.log('host: ', host);

    const calculatedHostHeight = graphHeight || (host.clientHeight > 0 ? host.clientHeight : 500);
    const calculatedHostWidth = graphWidth || (host.clientWidth > 0 ? host.clientWidth : 500);

    // console.log('calculatedHostHeight: ', calculatedHostHeight);
    // console.log('calculatedHostWidth: ', calculatedHostWidth);

    const margin = { top: 40, right: 120, bottom: 20, left: 120 },
        width = calculatedHostWidth - margin.right - margin.left,
        height = calculatedHostHeight - margin.top - margin.bottom;

    var i = 0;

    var tree = d3.layout.tree().size([height, width]);

    var diagonal = d3.svg.diagonal().projection(function (d) {
        return [d.x, d.y];
    });

    var svg = d3
        .select(host)
        .append('svg')
        // .attr('width', width + margin.right + margin.left)
        // .attr('height', height + margin.top + margin.bottom)
        .attr('width', calculatedHostWidth + margin.right + margin.left)
        .attr('height', calculatedHostHeight)
        // .attr('height', 'auto')
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    // .attr('transform', 'translate(' + 100 + ',' + margin.top + ')');

    const root = data;

    update(root);

    function update(source) {
        // Compute the new tree layout.
        var nodes = tree.nodes(root).reverse(),
            links = tree.links(nodes);

        // Normalize for fixed-depth.
        nodes.forEach(function (d) {
            d.y = d.depth * 70;
        });

        // Declare the nodes…
        var node = svg.selectAll('g.node').data(nodes, function (d) {
            return d.id || (d.id = ++i);
        });

        // Enter the nodes.
        var nodeEnter = node
            .enter()
            .append('g')
            .attr('class', function (d) {
                // console.log('d: ', d);
                let classes = 'node ' + d.position;
                if (d.name === null) {
                    classes = classes + ' empty';
                }
                return classes;
            })
            .attr('transform', function (d) {
                return 'translate(' + d.x + ',' + d.y + ')';
            });

        nodeEnter
            .append('circle')
            .attr('r', 10)
            .style('fill', '#fff');

        nodeEnter
            .append('text')
            .attr('y', function (d) {
                return d.children || d._children ? -18 : 18;
            })
            .attr('dy', '.35em')
            .attr('text-anchor', 'middle')
            .text(function (d) {
                return d.name;
            })
            .style('fill-opacity', 1);

        // Declare the links…
        var link = svg.selectAll('path.link').data(links, function (d) {
            return d.target.id;
        });

        // Enter the links.
        link
            .enter()
            .insert('path', 'g')
            .attr('class', 'link')
            .attr('d', diagonal);
    }
}
