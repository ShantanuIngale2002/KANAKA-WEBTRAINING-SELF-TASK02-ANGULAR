const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,16}$/;
const contactRegex = /^\d{10}$/;
var curDate;

// LOGIN FORM CHECKS
function isValidEmail() {
    return emailRegex.test($("#getEmail").val());
}
function isValidPass() {
    return passwordRegex.test($("#getPassword").val());
}

// SINGUP MODAL CHECKS
function isValidModalEmail() {
    return emailRegex.test($("#getModalEmail").val());
}
function isValidModalPass() {
    return passwordRegex.test($("#getModalPassword").val());
}
function isValidModalContact(){
    return contactRegex.test($("#getModalContact").val());
}
function isValidModalDate(){
    curDate=new Date()
    if($("#getModalBirthdate").val() <= (curDate.setFullYear(curDate.getFullYear()-16))){
        return true;
    }
    return false;
}

// DISABLE LOGIN BUTTON
function disableLogin(){
    if($("#getEmail").val()==="" || $("#getPassword").val()===""){
        $("#loginButton").prop('disabled',true);
    }
    else{
        $("#loginButton").prop('disabled',false);
    }
}

// DISABLE SINGUP BUTTON
function disableSignup(){
    if($("#getModalEmail").val()==="" || $("#getModalPassword").val()==="" || $("#getModalName").val()==="" || $("#getModalContact").val()==="" || $("#getModalBirthdate").val()===""){
        $("#signupButton").prop('disabled',true);
    }
    else{
        $("#signupButton").prop('disabled',false);
    }
}

// SHOW TOAST
function showToast(){
    $("#viewToast").toast("show");
}
