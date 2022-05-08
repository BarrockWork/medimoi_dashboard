import { DrugTypeCreate } from "./DrugTypeCreate";
import { DrugTypeEdit } from "./DrugTypeEdit";
import { DrugTypeList } from "./DrugTypeList";
import { DrugTypeShow } from "./DrugTypeShow";
import MedicationIcon from '@mui/icons-material/Medication';

export default {
    list: DrugTypeList,
    show: DrugTypeShow,
    edit: DrugTypeEdit,
    create: DrugTypeCreate,
    icon: MedicationIcon
}