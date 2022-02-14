import Stepper1 from "./Stepper1";
import Stepper2 from "./Stepper2";
import Stepper3 from "./Stepper3";
import Stepper4 from "./Stepper4";

const steps = [<Stepper1 />, <Stepper2 />, <Stepper3 />, <Stepper4 />]

const getStep = (activeStep) => steps[activeStep];
export default getStep;