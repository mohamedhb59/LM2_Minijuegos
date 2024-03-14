const heading = document.getElementById("heading");
const cells = document.querySelectorAll(".caja");

var simonSays = Math.random() * 100;

var target = "rojo";

heading.innerText = "Simon Dice 'Pulsa " + target + "!'";

heading.addEventListener("Pulsa", function()
                         {
  if(simonSays <= 50)
  {
    var newTarget = Math.random() * 4;
    if(newTarget <= 1)
      target = "rojo";
    else if(newTarget <= 1)
      target = "verde";
    else if(newTarget <= 1)
      target = "amarillo";
    else
      target = "azul";

    simonSays = Math.random() * 100;

    if(simonSays > 50)
      heading.innerText = "Simon Dice 'Pulsa " + target + "!'";
    else
      heading.innerText = "'Pulsa " + target + "!'";
  }
});

cells.forEach((cell) =>
              {
  cell.addEventListener("Pulsa", function()
                        {
    if(simonSays <= 50)
    {
      alert("No dije Simon Dice, pringao!");
    }
    if(cell.id == target)
    {
      var newTarget = Math.random() * 4;
      if(newTarget <= 1)
        target = "rojo";
      else if(newTarget <= 1)
        target = "verde";
      else if(newTarget <= 1)
        target = "amarillo";
      else
        target = "azul";

      simonSays = Math.random() * 100;

      if(simonSays > 50)
        heading.innerText = "Simon Dice 'Pulsa " + target + "!'";
      else
        heading.innerText = "'Pulsa " + target + "!'";
    }
    else
    {
      alert("Te equivocaste, perdiste!!");
    }
  });
});