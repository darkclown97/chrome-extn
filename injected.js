
function toDomNode(node, nodeInfo) {
    nodeInfo.tag = node.tagName ? node.tagName.toLowerCase() : ''
    nodeInfo.cls = node.className ? node.className.toString().split(' ') : ''
    nodeInfo.children = []

    var numChilds = node.childElementCount
    for(var i=0; i<numChilds; i++) {
      nodeInfo.children.push(toDomNode(node.children[i], {}));
    }
    return nodeInfo;
}

var info = toDomNode(document.body, {});

function receivedMessage(event){
      if(event.data==='send screen data'){
        console.log(info);
        window.parent.postMessage(info,'*');
      }
}

window.addEventListener('message',receivedMessage);
