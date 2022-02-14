import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";
import PBOCardField from "../components/PBOCardField";

export default function Stepper3() {
    const [pboField, setPboField] = useState([<PBOCardField  key={0} index={0} />]);
    const addPboField = () => setPboField([...pboField,
        <PBOCardField key={pboField.length} index={pboField.length} handleDelete/>
    ]);
    return (
        <Box>
            <Typography>Détails de l'objet métier</Typography>
            {pboField}
            <Button onClick={() => addPboField()}>
                Ajouter un champ à l'objet
            </Button>
        </Box>
    )
}