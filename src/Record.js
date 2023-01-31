import { useState } from "react";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from '@mui/icons-material/Delete';


const Record = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState([]);

    const addData = () => {
        setData([...data, {
            name: name,
            email: email
        }])
        setName("");
        setEmail("");
    };


    // REMOVING DATA FUNCTION
    const deleteItem = (index) => {
        let newList = data;
        newList.splice(index, 1);
        setData([...newList]);
    }

    return (
        <div className="container">
            <h1>Record Keeping</h1>
            <div className="user-details">
                <Stack direction="row" spacing={2}>
                    <TextField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                    />
                    <TextField
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                    />
                    <Button disabled={!name || !email} onClick={addData} style={{ cursor: "pointer" }} variant="contained" color="success">
                        <AddIcon />
                    </Button>
                </Stack>
            </div>




            {/************* RENDERING DATA ******************/}
            {
                data.map((input, index) => {
                    return (
                        <div key={index} className="input-data" index={index}>
                            <h3>{input.name}</h3>
                            <h3>{input.email}</h3>
                            <Button onClick={() => deleteItem(index)} variant="contained" color="error">
                                <DeleteIcon />
                            </Button>
                        </div>
                    )
                })
            }




        </div>
    );
};

export default Record;
