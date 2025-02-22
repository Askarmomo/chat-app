import dayjs from 'dayjs';

export const formateTime = (time: string) => {
    return dayjs(time).format('MM/DD/YY hh:mm A')
}