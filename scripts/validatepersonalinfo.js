try{
function validatepersonalinfo(){
let date = document.forms.personalinfo.date.value;
let PersonCompletingForm = document.forms.personalinfo.PersonCompletingForm.value;
let healthprovider = document.forms.personalinfo.healthprovider.value;
let Contactphonenumberfax = document.forms.personalinfo.Contactphonenumber/fax.value;
let name = document.forms.personalinfo.name.value;
let dateofbirth = document.forms.personalinfo.dateofbirth.value;
let gender = document.forms.personalinfo.gender.value;
let Ethnicity = document.forms.personalinfo.Ethnicity.value;
let race = document.forms.personalinfo.race.value;
let Genderforsex = document.forms.personalinfo.Genderforsex.value;
let Gonorrheapositiveresult = document.forms.personalinfo.Gonorrheapositiveresult.value;
let reasonforexam = document.forms.personalinfo.reasonforexam.value;
let Diagnosis = document.forms.personalinfo.Diagnosis.value;
let sites = document.forms.personalinfo.site(s).value;
}
function validatepersonalinfoDate(){
  document.getElementById('dateErr').innerHTML ="Date is required";
  document.forms.personalinfo.date.focus();
  return false;  

}
function validatepersonalinfoPersonCompletingForm(){
    document.getElementById('personcompletingformErr').innerHTML ="personcompletingform is required";
    document.forms.personalinfo.personcompletingform.focus();
    return false;  
}

function validatepersonalinfohealthprovider(){
    document.getElementById('healthproviderErr').innerHTML ="healthprovider is required";
    document.forms.personalinfo.healthprovider.focus();
    return false;  
  
  }

function validatepersonalinfoContactphonenumberfax(){
    document.getElementById('Contactphonenumber/faxErr').innerHTML ="Contactphonenumber/fax is required";
    document.forms.personalinfo.Contactphonenumber/fax.focus();
    return false;  
  
  }

  function validatepersonalinfoname(){
    document.getElementById('nameErr').innerHTML ="name is required";
    document.forms.personalinfo.name.focus();
    return false;  
  
  }



  function validatepersonalinfodateofbirth(){
    document.getElementById('dateofbirthErr').innerHTML ="dateofbirth is required";
    document.forms.personalinfo.dateofbirth.focus();
    return false;  
  
  }
  function validatepersonalinfogender(){
    document.getElementById('genderErr').innerHTML ="gender is required";
    document.forms.personalinfo.gender.focus();
    return false;  
  
  }

  function validatepersonalinfoEthnicity(){
    document.getElementById('EthnicityErr').innerHTML ="Ethnicity is required";
    document.forms.personalinfo.Ethnicity.focus();
    return false;  
  
  }

  function validatepersonalinforace(){
    document.getElementById('raceErr').innerHTML ="race is required";
    document.forms.personalinfo.race.focus();
    return false;  
  
  }

  function validatepersonalinfoGenderforsex(){
    document.getElementById('GenderforsexErr').innerHTML ="Genderforsex is required";
    document.forms.personalinfo.Genderforsex.focus();
    return false;  
  
  }

  function validatepersonalinfoGonorrheapositiveresult(){
    document.getElementById('GonorrheapositiveresultErr').innerHTML ="Gonorrheapositiveresult is required";
    document.forms.personalinfo.Gonorrheapositiveresult.focus();
    return false;  
  
  }

  function validatepersonalinforeasonforexam(){
    document.getElementById('reasonforexamErr').innerHTML ="reasonforexam is required";
    document.forms.personalinfo.reasonforexam.focus();
    return false;  
  
  }

  function validatepersonalinfoDiagnosis(){
    document.getElementById('DiagnosisErr').innerHTML ="Diagnosis is required";
    document.forms.personalinfo.Diagnosis.focus();
    return false;  
  
  }

  function validatepersonalinfosites(){
    document.getElementById('site(s)Err').innerHTML ="site(s) is required";
    document.forms.personalinfo.site(s).focus();
    return false;  
  
  }


}


function validatename(){
let namepattern = /*[A-Za-z\$]*$/;
let name = document.forms.personalinfo.name.value;
if(name){
    let x = namepattern.test(name);
    if(x==false){
    document.getElementBYId('nameErr').innerHTML = "<br/>Name can only contain letters and white spaces";
    document.forms.personalinfo.name.focus();
    }
    else{
     document.getElementBYId('nameErr').innerHTML ="";
    document.forms.personalinfo.name.style.borderColor ='green';
    }
    }   
    }

}    
}


