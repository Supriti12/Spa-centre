import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ServiceDetails = () => {
   const [moreData, setMoreData] = useState([]);
   const { id } = useParams();

   const getMoreData = async () => {
      const res = await axios.get(`http://127.0.0.1:3008/services/${id}`);
      setMoreData(await res.data);
      //   console.log(res.data);
   }

   useEffect(() => {
      getMoreData();
   }, []);

   return (
      <>
         <div class="about">
            <div class="container_width">
               <div class="row d_flex grig">
                  <div class="col-md-6">
                     <div class="about_img">
                        <figure><img src={moreData.image} alt=" " />
                        </figure>
                     </div>
                  </div>
                  <div class="col-md-6 order">
                     <div class="titlepage text_align_left">
                        <h2>{moreData.service}</h2>
                        <p>{moreData.ReadMore}</p>
                        <div className='row'>
                           <div>
                              <Link to='/' className='read_more' style={{marginRight: "100px"}}>Back to Home</Link>
                           </div>
                           <div>
                              <Link to='/service' className='read_more' style={{marginLeft:"100px"}}>Go to services</Link>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default ServiceDetails