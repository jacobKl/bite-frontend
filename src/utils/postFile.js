const postFile = async (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    const response = await fetch('http://localhost:3001/visual/save', {
        method: "POST",
        body: formData,
    });

    const {
        name
    } = await response.json();
    return name;
}

export default postFile;