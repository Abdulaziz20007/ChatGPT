function chat() {
    let message = document.querySelector('#message').value;
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'b4f378a932msh39e3a3465e0289ap166efejsn9d26a0dbfbed',
            'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
        },
        body: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"${message}"}]}`
    };
    
    fetch('https://openai80.p.rapidapi.com/chat/completions', options)
        .then(response => response.json())
        .then(response => {
            document.querySelector('h1').innerHTML = response.choices[0].message.content
        })
        .catch(err => console.error(err));
}