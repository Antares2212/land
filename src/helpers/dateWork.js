export const dateWork = (item = '2023-08-11T05:42:11.516Z') => {
    const substr = item.slice(0, item.indexOf("T"));
    const [year, month] = substr.split("-");
    const date = new Date(year, month - 1);

    const options = { month: "short" , year: "numeric"};

    return new Intl.DateTimeFormat("ru-RU", options).format(date);
}

export const getDate = (item) => 'Создан: ' + dateWork(item.created_at) + 'Обновлен: ' + dateWork(item.updated_at)