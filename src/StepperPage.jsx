import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import {useState} from "react";
import getStep from "./StepperTab/getStep";
import {Stack} from "@mui/material";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm, FormProvider } from "react-hook-form";

const steps = ['', '', '', ''];

const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
}).required();

export default function StepperPage() {
    const methods = useForm({
        resolver: yupResolver(schema),
    });
    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const onSubmit = data => console.log(data);
    const isEndOfStepper = () => activeStep === steps.length - 1;
    const isFirstStep = () => activeStep === 0

    return (
        <Box>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => <Step key={index} ><StepLabel>{label}</StepLabel></Step>)}
            </Stepper>
            <FormProvider {...methods} >
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    {getStep(activeStep)}
                    <Stack direction="row" spacing={2} justifyContent="end">
                        <Button
                            variant="outlined"
                            disabled={isFirstStep()}
                            onClick={handleBack}
                        >
                            Retour
                        </Button>
                        <Button
                            onClick={handleNext}
                            color="success"
                            variant="contained"
                            type={isEndOfStepper() ? "submit" : "button"}
                        >
                            {isEndOfStepper() ? 'Valider' : 'Suivant'}
                        </Button>
                    </Stack>
                </form>
            </FormProvider>
        </Box>
    );
}