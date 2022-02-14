import {
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {useFormContext} from "react-hook-form";

export default function Stepper4() {
    const { getValues } = useFormContext();


    return (
        <Stack>
            <Typography>{getValues("name")}</Typography>
            <Typography>{getValues("description")}</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nom du champ</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {getValues("fields").map((row) => (
                            <TableRow
                                key={row.name}
                            >
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell>{row.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    )
}