import ListAltIcon from '@mui/icons-material/ListAlt';
import {NotificationHistoryList} from './NotificationHistoryList';
import {NotificationHistoryCreate} from './NotificationHistoryCreate';
import {NotificationHistoryEdit} from './NotificationHistoryEdit';
import {NotificationHistoryShow} from './NotificationHistoryShow';

export default {
    create: NotificationHistoryCreate,
    list: NotificationHistoryList,
    show: NotificationHistoryShow,
    edit: NotificationHistoryEdit,
    icon: ListAltIcon,
}