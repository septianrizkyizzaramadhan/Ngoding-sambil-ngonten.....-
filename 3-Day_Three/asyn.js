async function testAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        if(!response.ok) {
            throw new Error(`ERROR: ${response.status}`)
        }
        const data = await response.json();

        const getData = data
            .map(item => `${item.id} ${item.title} ${item.completed}`)
    console.log(getData)

    } catch (error) {
        console.error(``)
    }
}

testAPI()