function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    var contin = Client.checkForName(formText)

    /*var requestData = {
        txt: formText,
        key: "e2857a4cca762c7b3f9ea0ad5028b3d6",
        //model: "general",
        lang: "en",
        of: "json"
    }*/

    /*const requestData = new FormData();
    requestData.append('txt', formText);
    requestData.append('key', `${process.env.API_KEY}`);
    requestData.append('lang', "en");
    requestData.append('of', "json");

    console.log(requestData)*/

    if(contin) {
        console.log("::: Form Submitted :::")
        fetch('http://localhost:8081/test?formText='+formText, {
            method: 'GET'
        })
        /*fetch('https://api.meaningcloud.com/sentiment-2.1', {
            method: 'POST',
            //body: JSON.stringify(requestData)
            body: requestData
        })*/
        .then(res => {
            return res.json()
        })
        .then(function (data) {
            console.log(data);
            document.getElementById('results').innerHTML = '<br><p>Irony: ' + data.irony + '</p><br>' + 
            '<p>Confidence: ' + data.confidence + '</p><br>' + 
            '<p>Model: ' + data.model + '</p><br>' + 
            '<p>Agreement: ' + data.agreement + '</p>';
        })
    } else {
        alert("Please enter a valid url");
        document.getElementById('name').focus();
    }
}

export { handleSubmit }
