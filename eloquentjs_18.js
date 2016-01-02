// fun with combining words
<select multiple>
  <option value="AA">TRY</option>
  <option value="1F">SELECT</option>
  <option value="DD">THIS</option>
  <option value="69">WORDS</option>
</select> = <span id="output">0</span>
<script>
  var select = document.querySelector("select");
  var output = document.querySelector("#output");
  select.addEventListener("change", function() {
    var hexColor, option;
    var counter = [];
    var opLen = select.options.length;
    for(var i = 0; i < opLen; i++) {
      option = select.options[i];
        if (option.selected) {
          counter.push(option);  
        }
    }
    if(counter.length === 3) {
        hexColor = '#';
      counter.map(function(el, indx) {
          hexColor += el.value;
        });
    } else {
      hexColor = '#FFFFFF';
    }
    output.textContent = hexColor;
    body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = hexColor;
    counter = [];
  });
</script>


// A JS Workbench
<textarea id="code">return "hi";</textarea>
<button id="button">Run</button>
<pre id="output"></pre>

<script>
  var run = document.getElementById('button');
  run.addEventListener('click', function() {
    var code = document.getElementById('code');
    var out = document.getElementById('output');
    var call = new Function('', code.textContent)();
    out.textContent = call.toString();
  });
  
</script>



// Autocompletion 
<input type="text" id="field">
<div id="suggestions" style="cursor: pointer"></div>

<script>
  // Builds up an array with global variable names, like
  // 'alert', 'document', and 'scrollTo'
  var terms = [];
  for (var name in window)
    terms.push(name);

  // Your code here.
  var text = document.getElementById('field');
  var len, res, content;
  var sugg = document.getElementById('suggestions');
  
  text.addEventListener('keyup', function() {
    sugg.innerHTML = "";
    text = document.getElementById('field');
    content = text.value;
    len = content.length;
    if(len === 0) {
      sugg.textContent = "";
        return;
    }
    res = terms.filter(function(el, indx) {
      return el.slice(0, len).toLowerCase() === content.toLowerCase();
    });
    if(!res.length) {
      sugg.innerHTML = "";
        return;
    } 
    res.forEach(function(el) {
      var str = '<h3>' + el + '</h3>\n';
        sugg.innerHTML = sugg.innerHTML + str;
    }); 
  });
  
  sugg.addEventListener('click', function(e) {
    var choose = e.target.textContent;
    text.value = choose;
    sugg.textContent = "";
  });
</script>