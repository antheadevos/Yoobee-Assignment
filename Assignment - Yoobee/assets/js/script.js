function addLi()
            {

                var ulist = document.getElementById('ulist').value,
                    listNode = document.getElementById('list'),
                    liNode = document.createElement("LI"),
                    txtNode = document.createTextNode(ulist);
            
                 liNode.appendChild(txtNode);
                 listNode.appendChild(liNode);
                
            }