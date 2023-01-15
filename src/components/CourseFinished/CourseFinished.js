import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import { Link } from 'react-router-dom';

function CourseFinished({course, user}) {
    const exportRef = useRef()


    const exportAsImage = async (el, imageFileName) => {
        const canvas = await html2canvas(el);
        const image = canvas.toDataURL("image/png", 1.0);
        downloadImage(image, imageFileName);
    }; 
    
    const downloadImage = (blob, fileName) => {
        const fakeLink = window.document.createElement("a");
        fakeLink.style = "display:none;";
        fakeLink.download = fileName;

        fakeLink.href = blob;

        document.body.appendChild(fakeLink);
        fakeLink.click();
        document.body.removeChild(fakeLink);

        fakeLink.remove();
    };

  return (
    <div className="mb-5">
                    <div className="mb-3 p-3 bg-white shadow rounded">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <div ref={exportRef} style={{ padding: 50 }} className="d-flex flex-column">
                                <h3 className='text-center'>Learn<span className="text-primary">Able</span></h3>
                                <h1 className='text-center mt-5'>Gratulacje, ukończyłeś kurs</h1>
                                <h3 className='text-center mt-5'>{user.name} {user.surname}</h3>
                                <h2 className='text-center mt-5'>Potwierdzenie ukończenia</h2>
                                <h3 className='text-center mt-1'>"{course.name}"</h3>
                            </div>

                            <Link style={{ color: 'black', fontSize: 30 }} to={"/"} className='btn btn-primary'>Moje kursy</Link>
                            <button style={{ color: 'black', fontSize: 30 }} onClick={() => exportAsImage(exportRef.current, "Certyfikat - " + course.name)} className="btn btn-primary mt-5 mb-5">Pobierz</button>
                        </div>

                    </div>
                </div>
  )
}

export default CourseFinished