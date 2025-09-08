import { useState } from "react";

export default function App() {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")

    const handleFname = (e) => {
        console.log(e.target.value)
        setFname(e.target.value)
    }

    const handleLname = (e) => {
        console.log(e.target.value)
        setLname(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form submitted Successfully')
    }
    // by spread operator
    // const [formData, setFormData] = useState({ fname: '', lname: '' })

    // const handleData = (e) => {
    //     // console.log(e.target.name)
    //     // console.log(e.target.value)
    //     setFormData({ ...formData, [e.target.name]: [e.target.value] })

    // }

    return (
        // by spread operator
        <div>
            {/* <h1> Form By React</h1>
            <form action="" onSubmit={handleSubmit}>

                <label htmlFor="">First Name:</label>
                <input type="text" value={formData.fname} name="fname" onChange={handleData} />
                <br></br>




                <label htmlFor="">Lirst Name:</label>
                <input type="text" value={formData.lname} name="lname" onChange={handleData} />

                <br></br>

                <input type="submit" /> */}


            <h1> Form By React</h1>
            <form action="" onSubmit={handleSubmit}>

                <label htmlFor="">First Name:</label>
                <input type="text" value={fname} name="fname" onChange={handleFname} />
                <br></br>




                <label htmlFor="">Lirst Name:</label>
                <input type="text" value={lname} name="lname" onChange={handleLname} />

                <br></br>

                <input type="submit" />





            </form>
        </div>

    )
}