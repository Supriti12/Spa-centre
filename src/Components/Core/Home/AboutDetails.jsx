import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const AboutDetails = () => {
   const [moreData, setMoreData] = useState([]);
   const { id } = useParams();

   const getMoreData = async () => {
      const res = await axios.get(`http://127.0.0.1:3004/about/${id}`);
      setMoreData(await res?.data);
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
                        <figure><img src={moreData.img} alt=" " />
                        </figure>
                     </div>
                  </div>
                  <div class="col-md-6 order">
                     <div class="titlepage text_align_left">
                        <p>{moreData.ReadMore}</p>
                        <Link to='/' className='read_more'>Back to Home</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default AboutDetails