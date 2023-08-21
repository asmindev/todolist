const getTime = () => {
    const now = new Date();
    // returned day, month, year
    // day like sunday, monday, etc
    const date = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return `${date}`;
};

export default getTime;
