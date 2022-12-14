const getFilteredText = txt => {
    const noSpclTxt = txt?.split("|")[0]?.replace(/[^a-zA-Z ]/g, " ");
    return noSpclTxt?.toLowerCase()?.replace(/\b(?:official|lyric|video|teaser|lyrical|audio|song)\b/gi, '').replace('  ', '').trim();
};

export const generateUrl = title => {
    const titleKeyWord = title?.replace(/[^a-zA-Z ]/g, " ")?.split("|")[0];
    return titleKeyWord?.replace(/  +/g, " ").trim().split(" ").join("-").toLowerCase();
};

export const generateTitle = title => {
    let filteredText = (`${getFilteredText(title)} song download`);
    let txtArr = filteredText?.split(' ');

    txtArr.forEach((word, i) => {
        txtArr[i] = txtArr[i].charAt(0).toUpperCase() + txtArr[i].slice(1);
    });

    return txtArr.join(" ");
};

export const generateDescription = ({ title, tags }) => {
    const tagArr = [title, ...tags];
    let result = tagArr.join(',');

    return result.slice(0, 100);
};

export const generateTags = ({ title, tags }) => {
    const tagArr = [title, ...tags];
    return tagArr.slice(0, 10);
};

export const getPublishedTime = time => {
    const d = new Date(time);

    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const date = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

    return `${date} ${month} ${year}`;
};