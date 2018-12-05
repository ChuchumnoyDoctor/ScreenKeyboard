let shift = false;
let caps_lock = false;
class klaviatura
{
	keypress(klavisha)
	{
		
		if(klavisha  === "caps lock")
	    {
	    	if(caps_lock === false)
	    	{
	    		caps_lock = true;
		    	this.upCase();
		    	return;
	    	}

	    	if(caps_lock === true)
	    	{
	    		caps_lock = false;
		    	this.downCase();
		    	return;
	    	}
	    	
	    }

	    if(klavisha === "shift")
	    {
	    	if(shift === false)
	    	    {	
	    	    	shift = true;
	    	    	if(caps_lock === false)
	    	    	{
		    			this.upCase();		    			
		    			return;
		    		}
		    		else
		    		{
		    			this.downCase();	    			
	    				return;
		    		}
	    		}
	    	if(shift === true)
	    		{
	    			shift = false;
	    			if(caps_lock === false)
	    			{
	    				this.downCase();	    			
	    				return;
	    			}
	    			else
		    		{
		    			this.upCase();	    			
	    				return;
		    		}
	    			
	    		}       	
	    }	

	    if(klavisha === "delete")
	    {
	    	document.getElementById("write").innerHTML = document.getElementById("write").innerHTML.slice(0,document.getElementById("write").innerHTML.length-1)
	    	return;
	    }

	    if(klavisha === '&nbsp;')
	    {
	    	document.getElementById("write").innerHTML += " ";
	    	return;
	    }

	    if(klavisha === 'tab')
	    {
	    	document.getElementById("write").innerHTML += "   ";
	    	return;
	    }
	    


	    if(klavisha === "enter")
	    {
	    	if(document.getElementById("write").innerHTML === "London is the capital of Great Britain")
	    		{
	    			alert("Exellent!");
	    			return;

	    		}
	    	else
			    {
			    	alert("Wrong!");
			    	return;
			    }
	    		   	
	    }
	    


	    if(klavisha === "")
	    {
	    (document.getElementById('write').innerHTML = "London is the capital of Great Britain")
	    	return;
	    }




		document.getElementById('write').innerHTML += klavisha;
		this.radnom_abc();
		this.random_chislo()
		if(caps_lock === true)
		{
			shift = false;
			this.upCase();
		}
		else 
		{			
			shift = false;
			this.downCase();
		}
		
   	}

   	upCase()
   	{
   		
   		let element_letter = document.getElementsByClassName('letter');
   		for (let j = 0; j<element_letter.length; j++)
   		{
   			element_letter[j].innerHTML = element_letter[j].innerHTML.toUpperCase();
		}
		
	}

	downCase()
	{
		let element = document.getElementsByClassName('letter');
		for (let j = 0; j<element.length; j++)
		{
				element[j].innerHTML = element[j].innerHTML.toLowerCase();
			
		}
		
	}

	randomInteger(min,max)
	{
		let rand = min + Math.random() * (max + 1 - min);
		rand = Math.floor(rand);
		return rand;
	}
	
	radnom_abc()
	{
		let num = document.getElementsByClassName('letter');
		let mass = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
		for(let i=0;i<num.length; i++)
		{
			if(num[i].getAttribute("class") === "letter")
			{
				let rand = this.randomInteger(0, mass.length-1);
				num[i].innerHTML = mass[rand];
				mass.splice(rand, 1);
			}
		}
	}	

	random_chislo()
	{
		let num = document.getElementsByClassName('symbol');
		let mass = ["`","-","=","[","]","'",";",",",".","/","1","2","3","4","5","6","7","8","9","0"]
		for(let i=0;i<num.length; i++)
		{
			if(num[i].getAttribute("class") === "symbol")
			{
				let rand = this.randomInteger(0, mass.length-1);
				num[i].innerHTML = mass[rand];
				mass.splice(rand, 1);
			}
		}
	}	
}	    		    	 	
let addText = (abc) =>
{
	let klavisha = new klaviatura();
	klavisha.keypress(abc);
	
}