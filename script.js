document.querySelector('.btn').addEventListener('click', function () {
    // url to download from google drive
    var cvUrl = 'https://drive.google.com/file/d/1xd7Pzrfw_IIedn9QEMNQXBtDAyOzYJp7/view?usp=sharing';
    
    // A hidden anchor (<a>) element is created dynamically in the document. This anchor element will be used to trigger the download.
    //a.style.display = 'none' is used to hide the anchor element from the user interface.
    var a = document.createElement('a');
    a.style.display = 'none';
    document.body.appendChild(a);

    // href attribute of the anchor element is set to the cvUrl, which is the URL of the PDF file  provided.
    a.href = cvUrl;

    // Specify the name for the downloaded file. 
    a.download = 'Aaradhana_Ojha_CV.pdf'; 

    // Trigger a click event on the anchor element.it is equivalent to clicking on link.
    a.click();

    // Clean up the temporary anchor element
    document.body.removeChild(a);
});