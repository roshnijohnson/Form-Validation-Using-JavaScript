window.onload = function(){

    //there will be one span element for each input field
    // when the page is loaded, we create them and append them to corresponding input elements 
	// they are initially empty and hidden

	var email = document.getElementById("email");
    var span1 = document.createElement("span");
	span1.style.display = "none"; //hide the span element
    email.parentNode.appendChild(span1);

    var password = document.getElementById("pwd");
    var span2 = document.createElement("span");
	span2.style.display = "none"; //hide the span element
    password.parentNode.appendChild(span2);

    var confirmpassword = document.getElementById("confirm");
    var span3 = document.createElement("span");
	span3.style.display = "none"; //hide the span element
    confirmpassword.parentNode.appendChild(span3);

    email.onfocus = function focusemail(){
        span1.innerHTML = "Email must be of the format abc@def.xyz";
        span1.style.display = "block";
    }

    email.onblur = function bluremail(){
        span1.style.display = "none";
    }

    password.onfocus = function focuspassword(){
        span2.innerHTML = "The password field should contain at least six characters, one uppercase letter, one number and one special character (!,@,#,$,%,^,&,*,+).";
        span2.style.display = "block";
    }

    password.onblur = function blurpassword(){
        span2.style.display = "none";
    }

    confirmpassword.onfocus = function focuspassword(){
        span3.textContent = "Password and confirm password fields should match";
        span3.style.display = "block";
    }

    confirmpassword.onblur = function blurpassword(){
        span3.style.display = "none";
    }


    var form = document.getElementById("myForm");
    form.onsubmit = function validator(e){
        

        const rex1 = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!rex1.test(email.value))
        {
            span1.className = "error";
            span1.textContent = "Enter a valid email.";
            span1.style.display = "block";
            return false;
        }
        const rex2 = /^[a-zA-Z0-9!@#$%^&*]{6,20}$/;
        if(!rex2.test(password.value))
        {
            span2.className = "error";
            span2.textContent = "The password field should contain at least six characters, one uppercase letter, one number and one special character (!,@,#,$,%,^,&,*,+).";
            span2.style.display = "block";
            return false;
            
        }
        
         if(password.value!=confirmpassword.value)
        {
            span3.className = "error";
            span3.textContent = "Password and confirm password fields should match.";
            span3.style.display = "block"; 
            return false;
        }
        
     return true;
    	e.preventDefault();

    }


}