function iniciarses(){
    if($('input[id=nombre2]').val()==""||$('input[id=pass]').val()==""){
        var Modalelem = document.querySelector('#modal1');
        var instance = M.Modal.init(Modalelem);
        instance.open();
    }else{
        if ((/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test($('input[name=usuario]').val().toUpperCase())) {
        var nofound=false;
        SiteSP = _spPageContextInfo.webAbsoluteUrl;
        ListName = 'UsuariosiBeni';
        query = "?$select=Correo,Contrasena,ID,Title,Escolaridad";
        QueryList(SiteSP, ListName, query, function (data) {
        $AllQuestions = data.results;
        for (var i in $AllQuestions) {
        if($('input[name=usuario]').val().toUpperCase()==$AllQuestions[i].Correo){
            if($('input[name=contrasen]').val().toUpperCase()==$AllQuestions[i].Contrasena){
                nofound=true;
            localStorage.setItem("Correo",$('input[name=usuario]').val().toUpperCase());
            localStorage.setItem("Nombre",$AllQuestions[i].Title);
            localStorage.setItem("ID1",$AllQuestions[i].ID);
            localStorage.setItem("Escolaridad",$AllQuestions[i].Escolaridad);
                SiteSP = _spPageContextInfo.webAbsoluteUrl;
                ListName = 'TestiBeni';
                query = "?$select=Title,numTest,unoTest,dosTest,tresTest,cuatroTest,completado,ID";
                QueryList(SiteSP, ListName, query, function (data) {
                    $AllQuestion = data.results;
                    for (var j in $AllQuestion) {
                        if($('input[name=usuario]').val().toUpperCase()==$AllQuestion[j].Title){
                        localStorage.setItem("Correo",$AllQuestion[j].Title);
                           localStorage.setItem("Test1",$AllQuestion[j].unoTest);
                           localStorage.setItem("Test2",$AllQuestion[j].dosTest);
                        localStorage.setItem("Test3",$AllQuestion[j].tresTest);
                        localStorage.setItem("Test4",$AllQuestion[j].cuatroTest);
                        localStorage.setItem("completado",$AllQuestion[j].completado)
                        localStorage.setItem("ID2",$AllQuestion[j].ID);
                            SiteSP = _spPageContextInfo.webAbsoluteUrl;
                            ListName = 'ResultadosTest';
                            query = "?$select=correo,ID,Title";
                            QueryList(SiteSP, ListName, query, function (data) {
                                $AllQuestio = data.results;
                                for (var k in $AllQuestio) {
                                    if($('input[name=usuario]').val().toUpperCase()==$AllQuestio[k].correo){
                                    localStorage.setItem("ID3",$AllQuestio[k].ID);
                                    localStorage.setItem("Numero",$AllQuestio[k].Title)
                                    window.location.href = 'http://sp.ictopicos.com/SitePages/iBeni/Plataforma.aspx';
                                    break;
                                    }
                                }
                            });
                       }
                    }
                });
                break;
            }else{
            nofound=true;	
                var Modalelem = document.querySelector('#modal6');
    			var instance = M.Modal.init(Modalelem);
    			instance.open();             
                break;			
            }
        }else{
            nofound=false;
        }
    }
    });
}else{
    var Modalelem = document.querySelector('#modal4');
    var instance = M.Modal.init(Modalelem);
    instance.open();
}
}
}