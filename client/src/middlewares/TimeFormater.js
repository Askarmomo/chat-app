import dayjs from 'dayjs';

export const formateTime = (time) => {
    return dayjs(time).format('MM/DD/YY hh:mm A')
}