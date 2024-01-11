const RenderComponent  = () => {

    const renderSomething = (x) => {
        if(x){
            return <h1>Rendering If</h1>
        } else {
            return <h1>Rendering Else</h1>
        }
    }
        
    return (
        <div>
            {renderSomething(false)}
        </div>
    )
}

export default RenderComponent