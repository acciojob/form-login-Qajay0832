function getFormvalue() {
	event.preventDefault()
	const fName = document.getElementsByName("fname")[0];
	const lName = document.getElementsByName("lname")[0];
	
	
    //Write your code here
	alert(fName.value+" "+lName.value)

}
