import {Stack, TextField} from "@mui/material";
import {useFormContext} from "react-hook-form";
import Box from "@mui/material/Box";

export default function PBOCardField(props) {
    const { index } = props;
    const { register } = useFormContext();
    const baseName = `fields.${index}`;
    return (
        <Stack spacing={2}>
            <Box>
                <TextField placeholder="Nom du champ" {...register(`${baseName}.name`)}/>
            </Box>
            <Box>
                <TextField placeholder="Description du champ" {...register(`${baseName}.description`)}/>
            </Box>
            <Stack spacing={2} flexDirection="row">
                <TextField placeholder="Nom de l'attribut source" {...register(`${baseName}.source`)}/>
                <TextField placeholder="Fonction d'agrégation" {...register(`${baseName}.name`)}/>
            </Stack>
        </Stack>
    )
}