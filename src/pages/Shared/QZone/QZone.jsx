import React from 'react';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';
const QZone = () => {
    return (
        <div className='bg-secondary text-center px-3 py-4 rounded-2'>
            <h4 className='fw-bold mb-3 text-white'>QZone</h4>
            <div>
                <img className='img-fluid' src={qzone1} alt="" />
                <img className='img-fluid' src={qzone2} alt="" />
                <img className='img-fluid' src={qzone3} alt="" />
            </div>
            <div>
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default QZone;