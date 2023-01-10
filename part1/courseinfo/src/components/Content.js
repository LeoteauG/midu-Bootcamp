var can1 = 10
var can2 = 7
var can3 = 14
var ter1 = "Fundamentals of React"
var ter2 = "Using props to pass data"
var ter3 = "State of a component"
const Content = () => {
    return(
        <>
           <p>{ter1} : {can1}</p>
           <p>{ter2} : {can2}</p>
           <p>{ter3} : {can3}</p>
        </>
    )
}

export default Content
export {can1, can2, can3};