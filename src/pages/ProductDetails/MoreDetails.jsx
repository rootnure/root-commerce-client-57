import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';


const MoreDetails = ({ id, name }) => {

    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch(`https://57-root-server.vercel.app/details/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [id]);

    return (
        <section className='my-6'>
            <h2 className="text-4xl divider font-pacifico text-orange-600 my-12">More Details</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-orange-600 text-white'>
                            <th className='w-2/12'>Name</th>
                            <th className='w-10/12'>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        <tr className='text-lg font-bold'>
                            <td>Device</td>
                            <td>{name}</td>
                        </tr>
                        {
                            details.map((spec, idx) => <tr key={idx}>
                                <td className='font-bold'>{spec.name}</td>
                                <td>{spec.value}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

MoreDetails.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default MoreDetails;