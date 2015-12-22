//Build a table
//create a function which build a table using input array
<style>
  /* Defines a cleaner look for tables */
  table  { border-collapse: collapse; }
  td, th { border: 1px solid black; padding: 3px 8px; }
  th     { text-align: left; }
  .tdNumber { text-align: rught; }
</style>

<script>
  function buildTable(data) {
    var tr, th, td;
    var table = document.createElement('table');
    data.forEach(function(el, indx){
        tr = document.createElement('tr');
      if(indx === 0) {
            var key = Object.keys(el);
            for(var i = 0; i < key.length; i++) {
              th = document.createElement('th');
                th.textContent = key[i];
                tr.appendChild(th);
            }
      }
        for(var atr in el) {
              td = document.createElement('td');
                td.textContent = el[atr];
                tr.appendChild(td);
              if(typeof el[atr] === 'number') {
                  td.setAttribute('style', 'text-align: right');
                }
            }
      table.appendChild(tr);
    });
    return table;
  }

  document.body.appendChild(buildTable(MOUNTAINS));
</script>



//Elements by tag name
//there is a function byTagName() that is the implementation of JS standart function getElementByTagName
<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>

    function byTagName(node ,tag) {
      tag = tag.toUpperCase();
      var result = [];
        
      function findAllNodes(curNode) {
        if(curNode.nodeName === tag) { result.push(curNode); }
          var children = curNode.childNodes;
          for(var i = 0; i < children.length; i++) {
            findAllNodes(children[i]);
          }
      }
      
      findAllNodes(node);
      return result;
    }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  var para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
</script>