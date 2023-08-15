// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";
// import "animate.css";
// import TrackVisibility from "react-on-screen";

// export const Contact = () => {

//   const encode = (data) => {
//     return Object.keys(data)
//         .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//         .join("&");
//   }

//   const ContactForm = () => {
//     const [formData, setFormData] = React.useState({
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       message: ""
//     });

//     const handleSubmit = (e) => {
//       e.preventDefault();
      
//       fetch("/", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: encode({ "form-name": "contact", ...formData }),
//       })
//         .then(() => alert("Success!"))
//         .catch((error) => alert(error));
//     };

//     const handleChange = (e) => {
//       setFormData({
//         ...formData,
//         [e.target.name]: e.target.value,
//       });
//     };

//     return (
//       <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
//         <input type="hidden" name="form-name" value="contact" />
//         <Row>
//           <Col size={12} sm={6} className="px-1">
//             <input type="text" placeholder="First Name" name="firstName" onChange={handleChange} />
//           </Col>
//           <Col size={12} sm={6} className="px-1">
//             <input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} />
//           </Col>
//           <Col size={12} sm={6} className="px-1">
//             <input type="email" placeholder="Email Address" name="email" onChange={handleChange} />
//           </Col>
//           <Col size={12} sm={6} className="px-1">
//             <input type="tel" placeholder="Phone No." name="phone" onChange={handleChange} />
//           </Col>
//           <Col size={12} className="px-1">
//             <textarea rows="6" placeholder="Message" name="message" onChange={handleChange}></textarea>
//             <button type="submit">
//               <span>Send</span>
//             </button>
//           </Col>
//         </Row>
//       </form>
//     );
//   };

//   return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className="align-items-center">
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <img
//                   className={isVisible ? "animate__animated animate__zoomIn" : ""}
//                   src={contactImg}
//                   alt="Contact Us"
//                 />
//               )}
//             </TrackVisibility>
//           </Col>
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                   <h2>Get In Touch</h2>
//                   <ContactForm />
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };


