function User({name}){
    return <h2>Hello, {name} </h2>
}

function ComponentCommunication(){
    return (
        <div>
            <h1>component communication</h1>
            < User name="MOJAHID" />
        </div>
    )
}

export default ComponentCommunication;