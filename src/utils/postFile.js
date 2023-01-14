const postFile = async (e, token) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    const response = await fetch('http://localhost:3001/visual/save', {
        method: "POST",
        body: formData,
        headers: {
            'Custom-Token': token
        }
    });

    const {
        location
    } = await response.json();
    return location;
}

export default postFile;