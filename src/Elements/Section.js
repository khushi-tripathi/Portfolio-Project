import React from 'react'
// import image from "../Khushi_Tripathi.jpeg";
import image from "../khushi.jpeg";


const Section = () => {
    return (
        //         <div className="sec">
        // <h2>About Me</h2>

        //             <div className=" image-div clearfix">
        //                 <img src={image} className=" imagg float-md-end mb-3 ms-md-3" alt="..." />

        //                 <p>
        //                     A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
        //                 </p>



        //             </div>

        //         </div>



        <div class="about sec" id="about">
            <div class="max-width">
                <h2 class="title">About Me</h2>
                <div class="about-content" id="about">
                    <div class="column left">
                        {/* <img  className="imagg" src={image} alt="..." class="rounded float-left"/> */}
                        <img className="imagg" src={image} alt="no imagg" />
                    </div>
                    <div class="column right">
                        <div class="text">I'm Khushi Tripathi</div>
                        <p className="para">I am a computer science engineering student seeking forward to good opportunities. I am a person of values and full determination. Currently, I am looking forward to opening my wings for a career in the domain of software development and IT. My tech stack includes web development technologies, java, technical writing. I can accommodate any environment easily and quickly. I am a multitasker and active learner that astonish my technical skills.</p>

                        <p className="para">

                            I like to explore new technologies, and I acquire them easily. I am proactive, optimistic, and always eager to magnify my technical skills, abilities, and experiences.</p>
                        {/* <div> */}
                        <a className="main-btn" href="#">More..</a>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>


    )
}

export default Section