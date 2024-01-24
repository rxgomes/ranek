export function mountQueryString(obj) {
    let queryString = "";
    for (let key in obj) {
        queryString += `&${key}=${obj[key]}`
    }

    return queryString
}

const filters = {
    formatPrice(input) {
        input = Number(input);

        if (isNaN(input)) {
            return "-";
        }

        return input.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    }
}

export default filters;