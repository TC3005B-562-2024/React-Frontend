import httpInstance from "../httpInstance";

export const getInsightCategoryCount = async () => {
    let res = null;
    
    const endpoint = `/alerts/insight-category-count`;
    await httpInstance
        .get(endpoint)
        .then((response) => {
            res = response.data;
        })
        .catch((err) => {
            console.error(err);
            throw new Error("Failed to fetch alert.");
        });

    return res;
}
