

function solicitudFetch() {
    fetch("https://reqres.in/api/users?delay=3")
      .then((response) => response.json())
      .then ((info) =>{
            let users = info.data;
            dibujarTabla (users);
            guardarLocalStorage(users);
      });
    }
    
    function buscarNombres(){
        let datos = JSON.parse(localStorage.getItem("infoDeUsuarios"));
        if(datos && datos.time > Date.now()){
            dibujarTabla (datos.lista);
        }
        else{
            solicitudFetch();
        }   
    }

    function guardarLocalStorage(arregloUsuarios){
       const info = {
            lista: arregloUsuarios,
            time: Date.now()+60000
        }

        localStorage.setItem('infoDeUsuarios', JSON.stringify(info));
    }

    function dibujarTabla (users){
        for (let i=0; i<users.length; i++){
            let body = document.getElementById("body");
            let tr = document.createElement("tr");
            let td = document.createElement("td");
            td.innerHTML = users[i].id;
            tr.append(td);
            let td2 = document.createElement("td");
            td2.innerHTML =  users[i].first_name;
            tr.append(td2);
            let td3 = document.createElement("td");
            td3.innerHTML =  users[i].last_name;
            tr.append(td3);
            let td4 = document.createElement("td");
            td4.innerHTML =  users[i].email;
            tr.append(td4);
            let td5 = document.createElement("td");
            let img = document.createElement("img");
            img.src = users[i].avatar;
            td5.append(img);
            tr.append(td5);
            body.append(tr);               
        }
    }