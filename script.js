const heading = document.querySelector('#head1');
const input = document.querySelectorAll('.btn');
var size = 32;

function onClickHandler(event) {
  var click = event.target.value;
  console.log(click);
  if (click === "+") {
    size += 2;
    console.log(size);
    heading.style.fontSize = `${size}px`


  }
  else {
    size -= 2;
    heading.style.fontSize = `${size}px`

  }
}


input.forEach(inp => {
  inp.addEventListener('click', onClickHandler)
})

