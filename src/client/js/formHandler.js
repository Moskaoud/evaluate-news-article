function handleSubmit(event) {
    // let submitBtn = document.getElementById('submit')

    // submitBtn.addEventListener('click', (event) => {
        event.preventDefault()
        let inUrl = document.getElementById('url').value
        console.log('==>>', inUrl)
        if (Client.checkURL(inUrl)) {
            // if (checkURL(inUrl)) {
            response(inUrl)
            updateUI()
        } else {
            alert('invalid URL');
        }
    // })
}

const response = async (inUrl) => {
    await fetch('http://localhost:8081/msg', {
        method: 'POST',
        body: JSON.stringify({ url: inUrl }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

let updateUI = async () => {
    // fetch the data from the app endpoint  
    const data = await fetch('http://localhost:8081/data')
    const res = await data.json()
    if (res !== undefined) {
        document.getElementById('score_tag').innerHTML = res.score_tag;
        document.getElementById("agreement").innerHTML = res.agreement;
        document.getElementById("subjectivity").innerHTML = res.subjectivity;
        document.getElementById("confidence").innerHTML = res.confidence;
        document.getElementById("irony").innerHTML = res.irony;
    }

}
export {handleSubmit}// this make function undefined if commented
