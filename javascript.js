		var numsquares = 6;
		var colors = [];
		var pickedColor;
		var squares = document.querySelectorAll(".square");
		
		var colorDisplay = document.getElementById("colorDisplay");
        var messageDisplay = document.getElementById("message");
        var h1 = document.querySelector("h1");
        var resetbutton = document.querySelector("#reset");
        var modebutton = document.querySelectorAll(".mode");

        init();

        function init()
        {


        managemodebutton();
        managesquares();
		reset();

        }



        function managemodebutton()
        {
        	for(var i = 0; i < modebutton.length; i++)
        {
        modebutton[i].addEventListener("click",function()
        {
        	modebutton[0].classList.remove("selected");

        	modebutton[1].classList.remove("selected");
        	this.classList.add("selected");
        	if(this.textContent === "Easy")
        	numsquares = 3;
        	else
        		numsquares = 6;

        	reset();



        });
      }
        }

     function managesquares()
     {
     	
		for(var i=0;i<squares.length;i++)
		{
			
			

			//add clicl listeners to squares
			squares[i].addEventListener("click",function()
			{
				//grab color of clicked square
				var clickedColor = this.style.background;
				//compare color to picked color
				if( clickedColor === pickedColor )
				{
				messageDisplay.textContent = "Correct!";
				changeall(clickedColor);
				h1.style.background = clickedColor;
				resetbutton.textContent = "play again?"
				}
				else
				{ 
				messageDisplay.textContent = "Try again!";
				this.style.background = '#232323';  
				}
			});

		}
     }

     function reset()
     {

        	colors = generateRandomColor(numsquares);
        	pickedColor = selectrandom();
            colorDisplay.textContent = pickedColor;
            resetbutton.textContent = "New Colors";
			
        	for(var i=0;i<squares.length;i++)
        	{
        		if(colors[i])
        		{        		squares[i].style.display = "block";

        		squares[i].style.background = colors[i];
        	    }
        	    else
        	    	squares[i].style.display = "none";

        	}

            h1.style.background = "steelblue";
            messageDisplay.textContent = "";
           
     }




        resetbutton.addEventListener("click",function()
        {
        	reset();

        });

		
		function changeall(color)
		{
			for( var i = 0;i<squares.length;i++)
				squares[i].style.background = color;
		} 



		function selectrandom()
		{
			var random = Math.floor(Math.random() * colors.length);
			return colors[random];
		}


		function generateRandomColor(num)
		{
			var arr = [];

			for(var i=0 ;i< num;i++)
			{
				
				arr.push(randomColor());
			}

			return arr;
		}


		function randomColor()
		{
			var r = Math.floor(Math.random() * 256);

			var g = Math.floor(Math.random() * 256);

			var b = Math.floor(Math.random() * 256);

			return "rgb(" + r + ", " + g + ", " + b + ")";
			
 		}