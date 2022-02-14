import {Stack, TextareaAutosize, TextField, Typography} from "@mui/material";
import * as React from "react";
import {useFormContext} from "react-hook-form";

export default function Stepper2() {
    const { register } = useFormContext();
    return (
        <Stack spacing={2}>
            <Typography>Informations de l'objet métier</Typography>
            <TextField placeholder="Nom de l'objet métier" {...register("name")} />
            <TextareaAutosize placeholder="Description de l'objet métier" {...register("description")}/>
        </Stack>
    )
}