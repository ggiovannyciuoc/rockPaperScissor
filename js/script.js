
var player_option_selected=0;
var pc_selec=0;
var py_score=0;
var pc_score=0;

document.getElementById("btn_rock").addEventListener("click", function() {
   
    document.getElementById('player_selection').src='img/rock1.png'

    player_option_selected=0;

    pc_selection()
    return player_option_selected;
    
       
  
  });

  document.getElementById("btn_paper").addEventListener("click", function() {
    document.getElementById('player_selection').src='img/paper1.png'
    
    
    player_option_selected=1;

    pc_selection()
    return player_option_selected;
  });

  document.getElementById("btn_scissors").addEventListener("click", function() {
    document.getElementById('player_selection').src='img/scissors1.png'
    player_option_selected=2;

    pc_selection()
    return Number(player_option_selected);
  });

  
  function pc_selection () {

    let pc_image = ['img/rock1.png','img/paper1.png','img/scissors1.png'];
    let pc_selec = Math.floor(Math.random()*pc_image.length);
    document.getElementById('pc_selection').src=pc_image[pc_selec]
    
    function winner(){

        if (player_option_selected===0 && pc_selec===1)
        {
            
            document.getElementById("message").innerHTML = "PC wins!";
            pc_score+=1;
            document.getElementById("pc_s").innerHTML = pc_score;
        }

        else if (player_option_selected===0 && pc_selec===2)
        {
            
            document.getElementById("message").innerHTML = "PLAYER wins!";
            py_score+=1;
            document.getElementById("py_s").innerHTML = py_score;
        }

        else if (player_option_selected===1 && pc_selec===0){
            
            document.getElementById("message").innerHTML = "PLAYER wins!";
            
            py_score+=1;
            document.getElementById("py_s").innerHTML = py_score;
        
        }

        else if (player_option_selected===1 && pc_selec===2)
        {
            document.getElementById("message").innerHTML = "PC wins!";
            pc_score+=1;
            document.getElementById("pc_s").innerHTML = pc_score;
        }

        else if (player_option_selected===2 && pc_selec===1)
        {
            
            document.getElementById("message").innerHTML = "PLAYER wins!";
            py_score+=1;
            document.getElementById("py_s").innerHTML = py_score;
        }

        else if (player_option_selected===2 && pc_selec===0)
        {
            
            document.getElementById("message").innerHTML = "PC wins!";
            pc_score+=1;
            document.getElementById("pc_s").innerHTML = pc_score;
        }
        
        else{
            
            document.getElementById("message").innerHTML = "DRAW!";
        
        }

    }
    
    return winner();
      
} 




