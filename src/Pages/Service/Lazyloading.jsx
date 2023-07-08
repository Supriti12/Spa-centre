import React from 'react'
import { Stack } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

const Lazyloading = ({ sdata }) => {
    return (
        <>
            <div className='container'>
                <br />
                <br />
                <h2 className='text-center'>Our Massage Services</h2>
                <br />
                <div className='row'>
                    {
                        sdata?.map((ele, k) => {
                            return (
                                <>
                                    <Stack spacing={1} style={{ width: "22rem" }} className='mb-4'>
                                        <Skeleton variant="rectangular" animation="wave" width={"21rem"} height={250} className='rounded' />
                                        <div className='d-flex justify-content-between'>
                                            <Skeleton variant='text' animation="wave" width={"10rem"} />
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <Skeleton variant='text' animation="wave" width={"5rem"} />
                                            {/* <Skeleton variant="text" animation="wave" width={"5rem"} /> */}
                                        </div>
                                        <div className='d-flex justify-content-between align-content-center'>
                                            {/* <Skeleton variant='text' animation="wave" width={30} height={20} /> */}
                                            <Skeleton variant="text" animation="wave" width={"20rem"} />
                                        </div>
                                    </Stack>
                                </>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Lazyloading