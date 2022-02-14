import {MenuItem, Stack, Typography} from "@mui/material";
import SelectInput from "@mui/material/Select/SelectInput";
import {useFormContext} from "react-hook-form";

export default function Stepper1() {
    const { register } = useFormContext();
    const rboList = [
        {name: "Production", value: "12453-145"},
        {name: "Production2", value: "99-145"},
        {name: "Production3", value: "88-145"},
    ];
    //const rboList = getRboList();
    return (
        <Stack direction={"row"} spacing={2}>
                <Typography>Choisir un objet métier racine</Typography>
                <SelectInput {...register("RBOId")} >
                    {rboList.map(e => <MenuItem key={e.value} value={e.value}>{e.name}</MenuItem>)}
                </SelectInput>
        </Stack>
    )
}