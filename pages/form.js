export default function Form(){

    const handleSubmit = async (event) => {

        event.preventDefault();

        const data = {
            val: event.target.val.value,
			title: event.target.title.value,
        };

        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/himom";
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options);
        const result = await response.json();
        console.log(result);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title"/>
            <label htmlFor="val">Val:</label>
            <input type="text" id="val" name="val"/>
            <button type="submit">Submit</button>
        </form>
    )
}