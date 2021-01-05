// Select size input
// When size is submitted by the user, call makeGrid()
document.querySelector('#submit')
    .addEventListener('click', 
        function(e){
            e.preventDefault(); // To stop the page from refreshing
            makeGrid();
        });

function makeGrid() {
    clearGrid(); // To start with a clean table
    //Construct the grid:
    let w = document.querySelector('#inputWidth').value;
    let h = document.querySelector('#inputHeight').value;
    let txt ='';
    for(var i=0; i<h; i++)
    {
        txt += "<tr>"
        for(var j=0; j<w;j++)
            txt += "<td class='canvasCell' style='background-color: #ffffff;'>  </td>";
        
        txt += "</tr>"
    }
    document.querySelector('#pixelCanvas')
        .insertAdjacentHTML('afterbegin', txt);
  
    //Start painting:
    paint();
}

function clearGrid(){
        document.querySelectorAll('.canvasCell').forEach(function(t){
            t.remove();
        });
}

function paint()
{

    document.querySelector('#pixelCanvas')
    .addEventListener('click', function(e){
        //Update color setting:
        var color = document.querySelector('#colorPicker').value;
        //Paint the cell with the selected color
        e.target.style = `background-color: ${color}`;
    });
}