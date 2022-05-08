import { DiseaseTypeCreate } from "./DiseaseTypeCreate";
import { DiseaseTypeEdit } from "./DiseaseTypeEdit";
import { DiseaseTypeList } from "./DiseaseTypeList";
import { DiseaseTypeShow } from "./DiseaseTypeShow";
import MedicationIcon from '@mui/icons-material/Medication';

export default {
    list: DiseaseTypeList,
    show: DiseaseTypeShow,
    edit: DiseaseTypeEdit,
    create: DiseaseTypeCreate,
    icon: MedicationIcon
}