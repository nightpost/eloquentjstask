// second
<style>
  div>div {
    display: inline-block;
    width: 32%;
    border: 1px solid black;
    text-align: center;
    font-size: 32px;
    font-family: Arial;
    font-weight: 400;
  }
  h1{
    text-align: center;
  	font-size: 32px;
  }
</style>
<h1></h1>
<div id="wrapper">
  <div id='1' data-tabname="one">Tab one</div>
  <div id='2' data-tabname="two">Tab two</div>
  <div id='3' data-tabname="three">Tab three</div>
</div>
<script>
  var wrapper = document.getElementById('wrapper');
  wrapper.addEventListener('click', function(event) {
    var topic = document.querySelector('h1');
  	topic.textContent = event.target.getAttribute('data-tabname').toUpperCase();
    event.stopPropagation();
  });
  
  function asTabs(node) {
    if(lastEventL) {
      node.removeEventListener(lastEventL);
    }
    var lastEventL = function (event) {
      	var id = event.target.id;
    	var ul = document.createElement('ul');
      	var childs = node.childNodes;
    	for(var i = 0; i < childs.length; i++) {
          	var cur = childs[i];
        	if(cur.nodeType === 1) {
            	var li = document.createElement('li');
              	li.textContent = cur.getAttribute('data-tabname');
              	ul.appendChild(li);
            }
        }
      	event.target.appendChild(ul);
    }
    node.addEventListener('click', lastEventL);
  }
  asTabs(document.querySelector("#wrapper"));
</script>