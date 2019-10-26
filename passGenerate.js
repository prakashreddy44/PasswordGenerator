
function passwordcreator(plength)
{
    keylist="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    tmp='';
    for(i=0;i<plength;i++){
        
        
        tmp += keylist.charAt(Math.floor(Math.random()*keylist.length));
        
    }
    return tmp;
}
function generatepassword(enterlength){
    document.passGen.output.value=passwordcreator(enterlength);
}